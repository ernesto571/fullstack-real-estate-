import express from "express";
import { requireLandlord, requireLogin, requireRenter } from "../../middleware/auth.middleware.js";
import { getLandlordEnquiries, markEnquiryAsRead, markEnquiryAsReplied, submitEnquiry } from "../../controllers/renter/enjuiry.controller.js";

const router = express.Router();

router.post("/submit", requireLogin, requireRenter, submitEnquiry);                        // renter submits enquiry
router.get("/", requireLogin, requireLandlord, getLandlordEnquiries);       // landlord gets all enquiries
router.patch("/:id/read", requireLogin, requireLandlord, markEnquiryAsRead);      // mark as read
router.patch("/:id/replied", requireLogin, requireLandlord, markEnquiryAsReplied); // mark as replied

export default router;