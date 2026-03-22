import { sql } from "../../config/db.js";
import getUserFromClerk from "../../lib/getUserFromClerk.js";
import resend from "../../config/resend.js";
import { clerkClient } from "@clerk/express"; // ✅ add this

export const submitEnquiry = async (req, res) => {
    const { user_id } = await getUserFromClerk(req);

    // ✅ check user_id BEFORE using it
    if (!user_id) return res.status(401).json({ success: false, message: "Not authenticated" });

    // ✅ now safe to use user_id
    const clerkUser = await clerkClient.users.getUser(
        (typeof req.auth === "function" ? req.auth() : req.auth)?.userId
    );
    const renter_email = clerkUser.emailAddresses[0].emailAddress;
    const renter_first_name = clerkUser.firstName;

    console.log(renter_email)

    const { property_id, full_name, phone_number, email_address, message } = req.body;

    if (!property_id || !full_name || !phone_number || !email_address || !message) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const enquiry = await sql`
            INSERT INTO enquiries (renter_id, property_id, full_name, phone_number, email_address, message)
            VALUES (${user_id}, ${property_id}, ${full_name}, ${phone_number}, ${email_address}, ${message})
            RETURNING *
        `;

        const result = await sql`
            SELECT 
                p.title, 
                u.email AS landlord_email,    
                u.first_name AS landlord_first_name
            FROM properties p
            JOIN users u ON u.id = p.landlord_id
            WHERE p.id = ${property_id}
        `;

        const { title, landlord_email, landlord_first_name } = result[0];

        // ✅ Email 1 — notify landlord
        await resend.emails.send({
            from: "HomeID <onboarding@resend.dev>",
            to: landlord_email,
            subject: `New Enquiry for ${title}`,
            html: `
                <h2>Hi ${landlord_first_name},</h2>
                <p>You have a new enquiry for <strong>${title}</strong></p>
                <br/>
                <p><strong>From:</strong> ${full_name}</p>
                <p><strong>Email:</strong> ${email_address}</p>
                <p><strong>Phone:</strong> ${phone_number}</p>
                <p><strong>Message:</strong> ${message}</p>
                <br/>
                <a 
                    href="${process.env.CLIENT_URL}/dashboard/enquiries"
                    style="display:inline-block; padding:12px 24px; background-color:#32cddb; color:white; text-decoration:none; border-radius:8px; font-weight:bold;"
                >
                    View Enquiry in Dashboard
                </a>
                <br/>
                <p style="color:#999; font-size:12px; margin-top:16px;">
                    Or copy this link: ${process.env.CLIENT_URL}/dashboard/enquiries
                </p>
            `
        });

        // ✅ Email 2 — confirm to renter
       // ✅ Email 2 — confirm to renter
console.log("📧 Attempting to send renter confirmation email to:", renter_email);
const renterEmailResult = await resend.emails.send({
    from: "HomeID <onboarding@resend.dev>",
    to: renter_email,
    subject: `Your enquiry for ${title} has been sent!`,
    html: `
        <h2>Hi ${renter_first_name},</h2>
        <p>Your enquiry for <strong>${title}</strong> has been sent successfully.</p>
        <p>The landlord will get back to you shortly.</p>
    `
});
console.log("✅ Renter email result:", renterEmailResult);

        // Hello, I'm very interested in this property and would love to arrange a viewing at your earliest convenience. I'm available any weekday afternoon or weekend morning. Please feel free to reach out via email or phone!

        res.status(201).json({ success: true, data: enquiry[0] });
    } catch (error) {
        console.log("Error in submitEnquiry function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const getLandlordEnquiries = async (req, res) => {
    const { user_id } = await getUserFromClerk(req);

    if (!user_id) {
        return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    try {
        const enquiries = await sql`
            SELECT 
                e.*,
                p.title AS property_title
            FROM enquiries e
            JOIN properties p ON p.id = e.property_id
            WHERE p.landlord_id = ${user_id}
            ORDER BY e.created_at DESC
        `;  // ✅ removed trailing comma after property_title
        res.status(200).json({ success: true, data: enquiries });
    } catch (error) {
        console.log("Error in getLandlordEnquiries function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const markEnquiryAsRead = async (req, res) => {
    const { id } = req.params;
    try {
        await sql`UPDATE enquiries SET status = 'read' WHERE id = ${id}`;
        res.status(200).json({ success: true, message: "Enquiry marked as read" });
    } catch (error) {
        console.log("Error in markEnquiryAsRead function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const markEnquiryAsReplied = async (req, res) => {
    const { id } = req.params;
    try {
        await sql`UPDATE enquiries SET status = 'replied' WHERE id = ${id}`;
        res.status(200).json({ success: true, message: "Enquiry marked as replied" });
    } catch (error) {
        console.log("Error in markEnquiryAsReplied function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}