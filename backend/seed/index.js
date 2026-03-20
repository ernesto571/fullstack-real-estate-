import properties from "./property.js";
import { sql } from "../config/db.js";

const LANDLORD_ID = 1;

async function seedProperties() {
  console.log("🌱 Starting property seed...");

  for (const property of properties) {
    try {
      // 1. Insert property
      const newProperty = await sql`
        INSERT INTO properties (landlord_id, title, description, price, category, bedrooms, bathrooms, garages, size_sqft, land_size_sqft, year_built, rooms)
        VALUES (
          ${LANDLORD_ID}, ${property.title}, ${property.description}, ${property.price},
          ${property.category}, ${property.bedrooms}, ${property.bathrooms}, ${property.garages},
          ${property.size_sqft}, ${property.land_size_sqft}, ${property.year_built}, ${property.rooms}
        )
        RETURNING id
      `;
      const property_id = newProperty[0].id;
      console.log(`✅ Property created: "${property.title}" (id: ${property_id})`);

      // 2. Insert address
      await sql`
        INSERT INTO property_addresses (property_id, address, neighbourhood, city, state, country)
        VALUES (${property_id}, ${property.address}, ${property.neighbourhood}, ${property.city}, ${property.state}, ${property.country})
      `;
      console.log(`   📍 Address added`);

      // 3. Insert amenities
      for (const amenity_name of property.amenities) {
        await sql`
          INSERT INTO property_amenities (property_id, amenity_name)
          VALUES (${property_id}, ${amenity_name})
        `;
      }
      console.log(`   🏊 ${property.amenities.length} amenities added`);

      // 4. Insert images
      for (const image_url of property.images) {
        await sql`
          INSERT INTO property_images (property_id, image_url)
          VALUES (${property_id}, ${image_url})
        `;
      }
      console.log(`   🖼️ ${property.images.length} images added`);

    } catch (error) {
      console.error(`❌ Failed to seed "${property.title}":`, error.message);
    }
  }

  console.log("🎉 Seed complete!");
  process.exit(0);
}

seedProperties();