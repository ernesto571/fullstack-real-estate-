import { create } from "zustand";
import axios from "../../lib/axios";
import toast from "react-hot-toast";

interface Listing {
    id: number;
    landlord_first_name: string;
    landlord_last_name: string;
    landlord_email: string;
    landlord_profile_pic: string;
    title: string;
    description: string;
    price: number;
    category: string;
    bedrooms: number;
    bathrooms: number;
    garages: number;
    size_sqft: number;
    land_size_sqft: number;
    year_built: number;
    rooms: number;
    address: string;
    neighbourhood: string;
    city: string;
    state: string;
    country: string;
    images: { id: number; url: string }[];
    amenities: string[];
    created_at: string;
}

interface ListingsStore {
    allListings: Listing[];
    isLoading: boolean;
    error: string | null;
    fetchListings: () => Promise<void>;
}

export const useListingsStore = create<ListingsStore>((set) => ({
    allListings: [],
    isLoading: false,
    error: null,

    // fetch Listings
    fetchListings: async () => {
        set({ isLoading: true, error: null })
        try {
            const res = await axios.get("/renter/listings")
            console.log("Fetches Listings", res.data.data)
            set({ allListings: res.data.data, isLoading: false })
        } catch (error:any) {
            console.error("Fetch Listings Error:", error)
            const errorMessage = error.response?.data?.error || "Failed to fetch Listings";
            set({
                error: errorMessage,
                isLoading: false,
                allListings: [],
              });
            toast.error(errorMessage);
        }
    }
}))


