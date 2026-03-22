import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "../routes/auth.route.js"
import landlordRoutes from "../routes/landlord/landlord.route.js"
import renterRoutes from "../routes/renter/remter.route.js"
import enquiryRoutes from "../routes/renter/enquiry.route.js"
import { clerkMiddleware } from "@clerk/express";

import "dotenv/config";

const app = express();

app.use(clerkMiddleware()); // ✅ FIRST — before everything
app.use((req, res, next) => {
    console.log("🔍 Clerk auth:", JSON.stringify(req.auth, null, 2));
    next();
});

app.use(cors({
    origin: [process.env.CLIENT_URL, "http://localhost:5173"],
    credentials: true,
}));

app.use(express.json());
app.use(helmet({ contentSecurityPolicy: false }));
app.use(morgan("dev"));

// Log all requests
app.use((req, res, next) => {
    console.log(`📨 ${req.method} ${req.path}`); // Fixed: parentheses, not backticks
    next();
});

app.use("/api/users", userRoutes);
app.use("/api/landlord", landlordRoutes);
app.use("/api/renter", renterRoutes)
app.use("/api/enquiries", enquiryRoutes)


export default app;