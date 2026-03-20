import { sql } from "../../config/db.js";
import { clerkClient } from "@clerk/express";

// Create user profile after Clerk authentication
export const createLandlordProfile = async (req, res) => {
  console.log("📝 createLandlordProfile: Starting...");

  try {
    const { userId: clerkUserId } = req.auth(); // ✅ call as function

    const clerkUser = await clerkClient.users.getUser(clerkUserId);

    const email = clerkUser.emailAddresses?.[0]?.emailAddress || null;
    const firstName = clerkUser.firstName || null;
    const lastName = clerkUser.lastName || null;
    const lastLogin = clerkUser.lastSignInAt
      ? new Date(Number(clerkUser.lastSignInAt))
      : null;
    const profilePic = clerkUser.imageUrl ;

    const result = await sql`
      INSERT INTO users (clerk_id, email, first_name, last_name, role, last_login , profile_pic)
      VALUES (${clerkUserId}, ${email}, ${firstName}, ${lastName}, 'landlord', ${lastLogin}, ${profilePic})
      ON CONFLICT (clerk_id)
      DO UPDATE SET last_login = EXCLUDED.last_login
      RETURNING *
    `;

    console.log("✅ Landord Profile created/found:", result[0]);

    res.json({
      message: "User profile ready",
      profile: result[0],
    });

  } catch (err) {
    console.error("❌ createLandlordProfile error:", err);
    res.status(500).json({ error: err.message });
  }
};
