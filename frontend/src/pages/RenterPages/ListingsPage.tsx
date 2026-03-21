import { Search } from "lucide-react";
import { useListingsStore } from "../../store/renter/ListingsStore";
import { useEffect } from "react";
import ListingsPageSkeleton from "../../components/RenterComponents/ListingsPageSkeleton";
import { Link, useNavigate } from "react-router-dom";

export default function ListingsPage(){

    const {allListings, isLoading, fetchListings} = useListingsStore()
    const navigate = useNavigate()

    useEffect( ()=>{
        fetchListings()
    }, [])

    if (isLoading)  return <ListingsPageSkeleton /> 

    return (
        <section className="mt-[3.8rem]">
            <div className="bg-[#080e51]">
                <div className="text-gray-100 justify-between  w-[90%] mx-auto flex py-3">
                    <p className="bg-[#6753fe] py-2 px-5 text-[1.2rem] font-medium rounded-lg">For Rent</p>
                    <span>
                        <div className="flex relative">
                            <input className="relative py-3 pl-[3rem] pr-[6rem] w-full text-sm rounded-md outline-none text-gray-800" type="text" placeholder="New London"/>
                            <Search  className="flex text-gray-800 absolute justify-center items-center top-2 ml-3 text-ellipsis"/>
                        </div>
                    </span>
                    <select name="" id="" className="text-gray-800 bg-white border-2 px-3 text-ellipsis rounded-md border-gray-200">
                        <option value="">Default Sorting</option>
                        <option value="">Sort By Price: Low to High</option>
                        <option value="">Sort By Price: High to Low</option>
                        <option value="">Sort By Latest</option>
                    </select>
                </div>
                
            </div>
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