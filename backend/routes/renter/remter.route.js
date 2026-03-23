import express from "express"
import { requireLogin, requireRenter } from "../../middleware/auth.middleware.js"
import { getListings, searchListings } from "../../controllers/renter/listings.controller.js"

const router = express.Router()

router.get("/listings", requireLogin, requireRenter, getListings )
router.get("/listings/search",  searchListings )

export default router