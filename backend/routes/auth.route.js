import express from "express";
import { requireLogin } from "../middleware/auth.middleware.js";
import { createRenterProfile, getUserProfile } from "../controllers/renter/renter.auth.controller.js";
import { createLandlordProfile } from "../controllers/landlord/landlord.auth.controller.js";

const router = express.Router();

router.post("/create-renter-profile", requireLogin, createRenterProfile);
router.post("/create-landlord-profile", requireLogin, createLandlordProfile);
router.get("/user-profile", requireLogin, getUserProfile);

export default router;