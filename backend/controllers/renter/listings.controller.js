import { sql } from "../../config/db.js";

// ------------------- CACHING SETUP -------------------

// In-memory cache storage
const cache = {};
// 20 minutes TTL (Time To Live) in milliseconds
const CACHE_TTL = 20 * 60 * 1000; 

/**
 * Executes a SQL query, checking the cache first.
 * If the cache is valid, returns cached data. Otherwise, executes the query,
 * updates the cache, and returns fresh data.
 * * @param {string} key - Cache key (e.g., 'breakfast', 'all').
 * @param {function} queryFunction - The async function that executes the SQL query.
 * @returns {Promise<Array>} The menu data.
 */
const queryAndCache = async (key, queryFunction) => {
  const cachedItem = cache[key];
  const now = Date.now();

  // Check if cache exists and is still valid (less than CACHE_TTL old)
  if (cachedItem && now - cachedItem.timestamp < CACHE_TTL) {
    console.log(`[CACHE] Serving data for key: ${key} from cache.`);
    return cachedItem.data;
  }

  // Cache is invalid or non-existent, run the query
  console.log(`[CACHE] Cache miss or expired for key: ${key}. Fetching fresh data.`);
  const freshData = await queryFunction();

  // Store the fresh data in the cache
  cache[key] = {
    data: freshData,
    timestamp: now,
  };

  return freshData;
};

export const getListings = async (req, res) => {
  try {
      const listings = await queryAndCache('listings', async () => {
          return await sql`
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
              GROUP BY p.id, pa.address, pa.neighbourhood, pa.city, pa.state, pa.country
          `
      })
      console.log("fetched all listings:", listings.length)
      res.status(200).json({ success: true, data: listings })
  } catch (error) {
      console.log("Error in getListings function", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}