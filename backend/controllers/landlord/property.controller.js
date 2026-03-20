import cloudinary from "../../config/cloudinary.js";
import { sql } from "../../config/db.js";
import getUserFromClerk from "../../lib/getUserFromClerk.js";

export const createProperty = async (req,res)=> {
    
    console.log("🔍 req.auth:", req.auth?.());  // log this
    const { user_id } = await getUserFromClerk(req);
    console.log("🔍 user_id:", user_id);  
    
    if (!user_id) {
        return res.status(401).json({ success: false, message: "Not authenticated" });
    }
    const {title, description, price,  numOfBedrooms, numOfBathrooms, numOfGarages, size_sqft, land_size_sqft, year_built, numOfRooms} = req.body;

    if (!title || !description || !price ||  !numOfBedrooms || !numOfBathrooms || !numOfGarages || !size_sqft || !land_size_sqft || !year_built || !numOfRooms){
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const newProperty = await sql `
            INSERT INTO properties (landlord_id, title, description, price,  bedrooms, bathrooms, garages, size_sqft, land_size_sqft, year_built, rooms)
            VALUES (${user_id}, ${title}, ${description}, ${price}, ${numOfBedrooms}, ${numOfBathrooms}, ${numOfGarages}, ${size_sqft}, ${land_size_sqft}, ${year_built}, ${numOfRooms})
            RETURNING *
        `
        res.status(201).json({ success: true, data: newProperty[0] });
    } catch (error) {
      console.log("Error in createProperty function", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }

}

export const addPropertyAddress = async (req,res) => {
    const {property_id, address, neighbourhood, city, state, country} = req.body;

    if(!address || !neighbourhood || !city || !state || !country ){
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try{
        const property_address = await sql `
            INSERT INTO property_addresses ( property_id, address, neighbourhood, city, state, country )
            VALUES ( ${property_id}, ${address}, ${neighbourhood}, ${city}, ${state}, ${country} )
            RETURNING *
        `
        res.status(201).json({ success: true, data: property_address[0] });
    } catch (error) {
      console.log("Error in addPropertyAddress function", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }

}

export const addPropertyAmenities = async (req, res) => {
    const { property_id, amenities } = req.body;

    if (!property_id || !amenities || !Array.isArray(amenities) || amenities.length === 0) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const insertedAmenities = await Promise.all(
            amenities.map((amenity_name) => 
                sql`
                    INSERT INTO property_amenities (property_id, amenity_name)
                    VALUES (${property_id}, ${amenity_name})
                    RETURNING *
                `
            )
        );

        res.status(201).json({ success: true, data: insertedAmenities.map(a => a[0]) });
    } catch (error) {
        console.log("Error in addPropertyAmenities function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const addPropertyImages = async (req, res) => {
    const { property_id } = req.body;

    if (!property_id || !req.files || req.files.length === 0) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    try {
        const insertedImages = await Promise.all(
            req.files.map((file) =>
                sql`
                    INSERT INTO property_images (property_id, image_url)
                    VALUES (${property_id}, ${file.path})
                    RETURNING *
                `
            )
        );

        res.status(201).json({ success: true, data: insertedImages.map(img => img[0]) });
    } catch (error) {
        console.log("Error in addPropertyImages function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const getLandlordProperties = async (req, res) => {
    const { user_id } = await getUserFromClerk(req);

    if (!user_id) {
        return res.status(401).json({ success: false, message: "Not authenticated" });
    }

    try {
        const properties = await sql`
            SELECT 
                p.*,
                pa.address, pa.neighbourhood, pa.city, pa.state, pa.country,
                ARRAY_AGG(DISTINCT jsonb_build_object('id', pi.id, 'url', pi.image_url)) 
                    FILTER (WHERE pi.image_url IS NOT NULL) AS images,
                ARRAY_AGG(DISTINCT pam.amenity_name) 
                    FILTER (WHERE pam.amenity_name IS NOT NULL) AS amenities
            FROM properties p
            LEFT JOIN property_addresses pa ON pa.property_id = p.id
            LEFT JOIN property_images pi ON pi.property_id = p.id
            LEFT JOIN property_amenities pam ON pam.property_id = p.id
            WHERE p.landlord_id = ${user_id}
            GROUP BY p.id, pa.address, pa.neighbourhood, pa.city, pa.state, pa.country
        `;

        res.status(200).json({ success: true, data: properties });
    } catch (error) {
        console.log("Error in getLandlordProperties function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
export const updateProperty = async (req, res) => {
    const { id } = req.params;
    const { user_id } = await getUserFromClerk(req);
    const { title, description, price, numOfBedrooms, numOfBathrooms, numOfGarages, size_sqft, land_size_sqft, year_built, numOfRooms, category } = req.body;

    try {
        // make sure the property belongs to this landlord
        const existing = await sql`
            SELECT * FROM properties WHERE id = ${id} AND landlord_id = ${user_id}
        `;

        if (existing.length === 0) {
            return res.status(404).json({ success: false, message: "Property not found or unauthorized" });
        }

        const updatedProperty = await sql`
            UPDATE properties SET
                title = COALESCE(${title}, title),
                description = COALESCE(${description}, description),
                price = COALESCE(${price}, price),
                bedrooms = COALESCE(${numOfBedrooms}, bedrooms),
                bathrooms = COALESCE(${numOfBathrooms}, bathrooms),
                garages = COALESCE(${numOfGarages}, garages),
                size_sqft = COALESCE(${size_sqft}, size_sqft),
                land_size_sqft = COALESCE(${land_size_sqft}, land_size_sqft),
                year_built = COALESCE(${year_built}, year_built),
                rooms = COALESCE(${numOfRooms}, rooms),
                category = COALESCE(${category}, category),
                updated_at = CURRENT_TIMESTAMP
            WHERE id = ${id} AND landlord_id = ${user_id}
            RETURNING *
        `;

        res.status(200).json({ success: true, data: updatedProperty[0] });
    } catch (error) {
        console.log("Error in updateProperty function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deleteProperty = async (req,res) => {
    const { id } = req.params;
    
    try {
        const deletedProperty = await sql`
        DELETE FROM properties WHERE id=${id} RETURNING *
        `;
    
        if (deletedProperty.length === 0) {
        return res.status(404).json({
            success: false,
            message: "Property not found",
        });
        }
    
        res.status(200).json({ success: true, data: deletedProperty[0] });
    } catch (error) {
        console.log("Error in deleteProperty function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export const deletePropertyImage = async (req, res) => {
    const { id } = req.params;
    const { image_url } = req.body;

    console.log("🗑️ deletePropertyImage called:", { id, image_url }); // ✅ log to verify

    if (!id || !image_url) {
        return res.status(400).json({ success: false, message: "image id and url are required" });
    }

    try {
        const public_id = image_url
            .split("/upload/")[1]
            .replace(/v\d+\//, "")
            .replace(/\.[^/.]+$/, "")

        console.log("🗑️ Deleting from Cloudinary:", public_id);

        await cloudinary.uploader.destroy(public_id);

        await sql`DELETE FROM property_images WHERE id = ${id}`;

        res.status(200).json({ success: true, message: "Image deleted" });
    } catch (error) {
        console.log("Error in deletePropertyImage function", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}