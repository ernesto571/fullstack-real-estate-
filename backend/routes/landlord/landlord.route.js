import express from "express";
import { addPropertyAddress, addPropertyAmenities, addPropertyImages, createProperty, deleteProperty, deletePropertyImage, getLandlordProperties, updateProperty } from "../../controllers/landlord/property.controller.js";
import {requireLogin, requireLandlord } from "../../middleware/auth.middleware.js";
import {upload} from "../../config/cloudinary.js";

const router = express.Router();

router.post("/properties/create", requireLogin, requireLandlord, createProperty);
router.put("/properties/:id", requireLogin, requireLandlord, updateProperty);
router.delete("/properties/:id", requireLogin, requireLandlord, deleteProperty);
router.post("/properties/address", requireLogin, requireLandlord, addPropertyAddress);
router.post("/properties/amenities", requireLogin, requireLandlord, addPropertyAmenities);
router.post("/properties/images", requireLogin, requireLandlord, upload.array("images", 10), addPropertyImages);
router.delete("/properties/image/:id", requireLogin, requireLandlord, deletePropertyImage);
router.get("/properties/my-properties", requireLogin, requireLandlord, getLandlordProperties);

export default router;