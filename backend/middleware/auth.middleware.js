// middleware/auth.middleware.js
import { sql } from "../config/db.js";

export const requireLogin = (req, res, next) => {
  const auth = req.auth();
  console.log("🔐 Auth check:", {
    hasAuth: !!auth,
    userId: auth?.userId || "none"
  });
  if (!auth?.userId) {
    console.log("❌ Authentication failed: No userId");
    return res.status(401).json({ error: "Not authenticated" });
  }
  console.log("✅ Authentication passed for user:", auth.userId);
  req.authData = auth;
  next();
};

export const requireLandlord = async (req, res, next) => {
  console.log("🔍 requireLAndlord: Starting...");
  
  try {
    const auth = req.auth()
    const user_id = auth?.userId
    console.log("👤 User ID from auth:", user_id);

    if (!user_id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const result = await sql`
      SELECT role FROM users WHERE clerk_id = ${user_id}
    `;

    if (!result || result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    if (result[0].role !== "landlord") {
      return res.status(403).json({ error: "Landlord access required" });
    }

    console.log("✅ Landord confirmed");
    next(); // let them through
  } catch (err) {
    console.error("❌ Error checking admin:", err);
    res.status(500).json({ error: "Server error" });
  }
};

export const requireRenter = async (req, res, next) => {
  console.log("🔍 requireRenter: Starting...");
  
  try {
    const auth = req.auth()
    const user_id = auth?.userId
    console.log("👤 User ID from auth:", user_id);

    if (!user_id) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const result = await sql`
      SELECT role FROM users WHERE clerk_id = ${user_id}
    `;

    if (!result || result.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    if (result[0].role !== "renter") {
      return res.status(403).json({ error: "Renter access required" });
    }

    console.log("✅ Renter confirmed");
    next(); // let them through
  } catch (err) {
    console.error("❌ Error checking Renter:", err);
    res.status(500).json({ error: "Server error" });
  }
};