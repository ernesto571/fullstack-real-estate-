import { sql } from "../config/db.js";
import app from "./app.js";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

async function initDB() {
    console.log("🔄 Initializing database...");
    try {
        // users table
        await sql`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                clerk_id VARCHAR(255) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                first_name VARCHAR(255),
                last_name VARCHAR(255),
                role VARCHAR(20) CHECK (role IN ('renter','landlord', 'admin')) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                last_login TIMESTAMP,
                profile_pic VARCHAR(255)
            )
        `;
        console.log("✅ Users table created/verified");
    
        // properties table
        await sql`
            CREATE TABLE IF NOT EXISTS properties (
                id SERIAL PRIMARY KEY,
                landlord_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10,2) NOT NULL,
                category VARCHAR(20) CHECK (category IN ('rent','sale')) DEFAULT 'rent',
                bedrooms INTEGER,
                bathrooms INTEGER,
                garages INTEGER,
                size_sqft INTEGER,
                land_size_sqft INTEGER,
                year_built INTEGER,
                rooms INTEGER,
                featured BOOLEAN DEFAULT FALSE,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `
        console.log("✅ Properties table created/verified")

        await sql `
            CREATE TABLE IF NOT EXISTS property_addresses (
                id SERIAL PRIMARY KEY,
                property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
                address VARCHAR(255),
                neighbourhood VARCHAR(100),
                city VARCHAR(100),
                state VARCHAR(100),
                country VARCHAR(100)
            );
        `
        console.log("✅ Property Addresses table created/verified")

        await sql `
            CREATE TABLE IF NOT EXISTS property_images (
                id SERIAL PRIMARY KEY,
                property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
                image_url TEXT NOT NULL
            );
        `
        console.log("✅ Property Images table created/verified")

        await sql`
            CREATE TABLE IF NOT EXISTS property_amenities (
                id SERIAL PRIMARY KEY,
                property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
                amenity_name VARCHAR(100) NOT NULL
            );
         `;
        console.log("✅ Amenities table created/verified")

        await sql`
            CREATE TABLE IF NOT EXISTS enquiries (
                id SERIAL PRIMARY KEY,
                renter_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
                property_id INTEGER REFERENCES properties(id) ON DELETE CASCADE,
                full_name VARCHAR(255) NOT NULL,
                phone_number VARCHAR(20) NOT NULL,
                email_address VARCHAR(255) NOT NULL,
                message TEXT NOT NULL,
                status VARCHAR(20) CHECK (status IN ('unread', 'read', 'replied')) DEFAULT 'unread',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `;
        console.log("✅ Enquiries table created/verified");

    } catch (error) {
        console.error("❌ Error initDB:", error);
        process.exit(1);
    }
}

initDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server is running on port ${PORT}`);
    });
});