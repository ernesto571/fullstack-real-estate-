import { useListingsStore } from "../../store/renter/ListingsStore";
import { useEffect } from "react";
import ListingsPageSkeleton from "../../components/RenterComponents/ListingsPageSkeleton";
import { Link, useNavigate } from "react-router-dom";
import Topbar from "../../components/RenterComponents/Topbar";

export default function ListingsPage(){

    const {allListings, isLoading, fetchListings} = useListingsStore()
    const navigate = useNavigate()

    useEffect( ()=>{
        fetchListings()
    }, [])

    if (isLoading)  return <ListingsPageSkeleton /> 

    return (
        <section className="mt-[3.8rem]">
            <Topbar />
            <div>
                <section className="grid grid-cols-3 w-[85%] mx-auto mt-9 gap-8">
                    {allListings.map((l) => (
                        <div key={l.id}>
                            <span className="relative block  w-full">
                                <p className="absolute top-2 left-2 text-xs font-semibold bg-[#65b110] text-white py-2 px-3 rounded-sm z-10 tracking-wide">
                                    FOR RENT
                                </p>
                                <img 
                                    src={l.images[0].url} 
                                    alt={l.title} 
                                    className="w-full rounded-md object-cover hover:cursor-pointer hover:brightness-75 transition-transform ease-in-out"
                                    onClick={()=>{navigate(`/listings/${l.id}`)}}
                                /> 
                            </span>
                            <div className="flex flex-col mt-3 gap-y-1 border-b-2 border-gray-300 pb-2">
                                <Link to={`/listings/${l.id}`} className="text-[#080e51] text-[1.1rem] text-ellipsis font-medium hover:underline hover:cursor-pointer ">{l.title}</Link>
                                <p className="text-gray-600 ">{l.address}, {l.state}</p>
                                <p className="text-[#080e51] text-[1.1rem] text-ellipsis font-medium">£{l.price} / month</p>
                            </div>
                            {/*  */}
                            <div className="flex justify-between w-[80%] mt-2">
                                <span className="flex gap-2 items-center justify-center">
                                    <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1774081306/bedroom-hotel-svgrepo-com_wj7ymy.svg" alt="icon" className="w-[25px]"/>
                                    <p>{l.bedrooms} br</p>
                                </span>

                                <span className="flex gap-2 items-center justify-center">
                                    <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1774081223/shower-head-svgrepo-com_our3eq.svg" alt="icon" className="w-[25px]"/>
                                    <p>{l.bathrooms} ba</p>
                                </span>

                                <span className="flex gap-2 items-center justify-center">
                                    <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1774081530/area-svgrepo-com_1_xgeqhg.svg" alt="icon" className="w-[25px]"/>
                                    <p>{l.land_size_sqft} SqFt</p>
                                </span>
                            </div>
                        </div>
                    )) }
                </section>
            </div>
        </section>
    )
}