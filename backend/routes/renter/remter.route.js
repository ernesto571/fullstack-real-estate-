import express from "express"
import { requireLandlord, requireLogin } from "../../middleware/auth.middleware.js"
import { getListings } from "../../controllers/renter/listings.controller.js"

const router = express.Router()

router.get("/listings", requireLogin, requireLandlord, getListings )

export default router