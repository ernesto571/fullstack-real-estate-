import { useParams } from "react-router-dom"
import { useListingsStore } from "../../store/renter/ListingsStore"
import { useEffect } from "react"

export default function PropertyDetailsPage(){

    const {id} = useParams()
    const {isLoading, allListings, fetchListings} = useListingsStore()
    
    useEffect(()=> {
        fetchListings()
    }, [fetchListings])

    const property = allListings.find((p) => p.id === Number(id));

    
    if (!property) {
        return (
        <div className="min-h-screen grid place-items-center">
            Property not found
        </div>
        );
    }

    return(
        <section>
            {property.title}
        </section>
    )
}