import express from "express"
import { requireLogin, requireRenter } from "../../middleware/auth.middleware.js"
import { getListings } from "../../controllers/renter/listings.controller.js"

const router = express.Router()

router.get("/listings", requireLogin, requireRenter, getListings )

export default router