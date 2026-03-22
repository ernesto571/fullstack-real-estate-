import { useParams } from "react-router-dom"
import { useListingsStore } from "../../store/renter/ListingsStore"
import { useEffect } from "react"
import Topbar from "../../components/RenterComponents/Topbar"
import { Clock } from "lucide-react"

export default function PropertyDetailsPage(){
    const {id} = useParams()
    const {isLoading, allListings, fetchListings} = useListingsStore()
    
    useEffect(()=> {
        fetchListings()
    }, [fetchListings])

    const property = allListings.find((p) => p.id === Number(id));
    const yearsAgo = 2026 - Number(property?.year_built)

    const info = [
        {icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1774117754/house-svgrepo-com_co2wtt.svg", title:"ID", value:property?.id},
        {icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1774081306/bedroom-hotel-svgrepo-com_wj7ymy.svg", title:"BEDROOMS", value:property?.bedrooms },
        {icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1774117753/shower-head-svgrepo-com_1_qmedlu.svg", title:"BATHROOMS", value:property?.bathrooms },
        {icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1774117753/garage-svgrepo-com_pdzhrw.svg", title:"GARAGES", value:property?.garages },
        {icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1774081530/area-svgrepo-com_1_xgeqhg.svg", title:"SIZE", value:`${property?.size_sqft} SqFt` },
        {icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1774117753/area-svgrepo-com_2_xieuke.svg", title:"LAND SIZE", value:`${property?.land_size_sqft} SqFt`  },
        {icon:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1774119865/crane-tool-svgrepo-com_xsw1rl.svg", title:"YEAR BUILT", value:property?.year_built}
    ]

    const address = [
        {title:"Country", value:property?.country },
        {title:"City/Town", value:property?.city },
        {title:"Province/State", value:property?.state },
        {title:"Neighbourhood", value:property?.neighbourhood }
    ]

    const details = [
        {title:"Property ID", value:property?.id  },
        {title:"Price", value:`£${property?.price} / month`  },
        {title:"Property Status", value:"For Rent"  },
        {title:"Rooms", value:property?.rooms  },
        {title:"Bedrooms", value:property?.bedrooms   },
        {title:"Bathrooms", value:property?.bathrooms   },
        {title:"Garages", value:property?.garages   },
        {title:"Year Built", value:property?.year_built  },
        {title:"Size", value:`${property?.size_sqft} SqFt` },
        {title:"Land Size", value:`${property?.land_size_sqft} SqFt`  }
    ]

    const handleGoogleMaps = () => {
        const query = encodeURIComponent(
            `${property?.address}, ${property?.neighbourhood}, ${property?.city}, ${property?.country}`
        )
        window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, "_blank")
    }

    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
        `${property?.address}, ${property?.neighbourhood}, ${property?.city}, ${property?.country}`
    )}&output=embed`
    
    if (!property) {
        return (
        <div className="min-h-screen grid place-items-center">
            Property not found
        </div>
        );
    }

    return(
        <section className="pt-[4rem]">
            <Topbar />

            <section className="w-[85%] mx-auto mt-[3rem]">
                <span className="flex gap-5 items-center text-gray-500">
                    <p className=" top-2 left-2 text-xs font-semibold bg-[#65b110] text-white py-2 px-4 rounded-sm tracking-wide">FOR RENT</p>
                    <p className="flex gap-2"><Clock className="text-gray-400" /> {yearsAgo} years ago</p>
                    <span className="flex gap-2">
                        <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1774109067/eye-svgrepo-com_klicjn.svg" alt="eye icon" className="flex w-[25px] justify-center" />
                        <p >2435 views</p>
                    </span>
                </span>
                <h2 className="my-2 text-[2rem] font-medium text-[#181e65]">{property.title}</h2>
                <span className="flex items-center gap-2 text-gray-500">
                    <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1774111081/location-pin-svgrepo-com_2_nnikf2.svg" className="w-[25px]" alt="pin" />
                    <p className="text-[1.1rem] tracking-wide">{property.address}, {property.neighbourhood}</p>
                </span>
                {/* pic */}
                <div className="grid grid-cols-4 mt-10 gap-3 h-[500px]">
                    {/* Main big image */}
                    <img  src={property.images[0].url}  className="col-span-2 rounded-md w-full h-full hover:brightness-75 transition-transform ease-in-out  object-cover"  alt="pic-1" />
                    {/* Middle column */}
                    <div className="flex flex-col col-span-1 gap-3 h-full">
                        <img src={property.images[1].url} alt="pic-2"  className="w-full flex-1 hover:brightness-75 transition-transform ease-in-out  object-cover rounded-md"/>
                        <img src={property.images[2].url} alt="pic-3" className="w-full flex-1 hover:brightness-75 transition-transform ease-in-out  object-cover rounded-md"/>
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col col-span-1 gap-3 h-full">
                        <img src={property.images[3].url} alt="pic-4" className="w-full flex-1 hover:brightness-75 transition-transform ease-in-out  object-cover rounded-md"/>
                        <img src={property.images[4].url} alt="pic-5" className="w-full flex-1 hover:brightness-75 transition-transform ease-in-out  object-cover rounded-md"/>
                    </div>
                </div>
            </section>

            <section className="mt-14 bg-[#f2f2f2]">
                <div className="grid grid-cols-3 gap-x-12  w-[85%] mx-auto pt-14">
                    {/* left section */}
                    <section className="flex flex-col col-span-2 gap-y-3">
                        {/* description */}
                        <div className=" bg-white rounded-md">
                            <div className="max-w-[92%] mx-auto py-6">
                                <h4 className="text-[1.5rem] font-medium tracking-wide text-[#101549]">Description</h4>
                                <p className="pt-3 text-gray-600">{property.description}</p>
                            </div>
                        </div>

                        {/* overview */}
                        <div className=" bg-white rounded-md">
                            <div className="max-w-[92%] mx-auto py-6">
                                <h4 className="text-[1.5rem] font-medium tracking-wide text-[#101549]">Overview</h4>
                                <div className="pt-3 text-gray-600 grid grid-cols-4 gap-5">
                                    {info.map((i) => (
                                        <div key={i.title} className="flex items-center gap-3 gap-y-5">
                                            <span className="bg-white rounded-md shadow-md p-3">
                                                <img src={i.icon} alt="icon" className="w-[35px]" />
                                            </span>
                                            <div>
                                                <p className="text-sm">{i.title}</p>
                                                <p className="font-bold text-[#101549] pt-2">{i.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Address */}
                        <div className=" bg-white rounded-md">
                            <div className="max-w-[92%] mx-auto py-6">
                                <span className="flex justify-between items-center">
                                    <h4 className="text-[1.5rem] font-medium tracking-wide text-[#101549]">Address</h4>
                                    <button className="bg-[#e86822] rounded-lg font-medium text-white py-3 px-6 mt-5 hover:cursor-pointer hover:bg-[#e86822]/90 ease-in-out duration-200" onClick={handleGoogleMaps}>
                                        <span className="flex gap-2">
                                            <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1774127700/map-location-pin-svgrepo-com_zx5pxd.svg" alt="icon" className="w-[25px]" />
                                            <p>Open On Google Maps</p>
                                        </span>
                                    </button>
                                </span>
                                <span className="flex gap-7 mt-5 text-[0.9rem]">
                                    <strong className="text-[#101549]">Address</strong>
                                    <p className="text-gray-600">{property.address}</p>
                                </span>
                                <div className="pt-4 text-gray-600 grid grid-cols-2 gap-x-5 gap-y-4 text-[0.9rem]">
                                    {address.map((a) => (
                                        <div key={a.title} className="flex gap-7">
                                            <strong className="text-[#101549]">{a.title}</strong>
                                            <p className="text-gray-600">{a.value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Details */}
                        <div className=" bg-white rounded-md">
                            <div className="max-w-[92%] mx-auto py-6">
                                <h4 className="text-[1.5rem] font-medium tracking-wide text-[#101549]">Details</h4>
                                <div className="pt-5 text-gray-600 grid grid-cols-2 gap-5">
                                    {details.map((d) => (
                                        <div key={d.title} className="w-[70%]">
                                            <span className="flex justify-between text-[0.9rem]">
                                                <strong className=" text-[#101549]">{d.title}</strong>
                                                <p className="text-gray-600">{d.value}</p>
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className=" bg-white rounded-md">
                            <div className="max-w-[92%] mx-auto py-6">
                                <h4 className="text-[1.5rem] font-medium tracking-wide text-[#101549]">Features</h4>
                                <div className="pt-5 text-gray-600 grid grid-cols-3 gap-5">
                                    {property.amenities.map((a) => (
                                        <div key={a} className="flex gap-2 items-center">
                                            <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1774130055/check-svgrepo-com_yrcg01.svg" alt="icon" className="w-[22px]" />
                                            <p>{a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* location */}
                        <div className=" bg-white rounded-md">
                            <div className="max-w-[92%] mx-auto py-6">
                                <h4 className="text-[1.5rem] font-medium tracking-wide text-[#101549]">Location</h4>
                                <div className="w-full h-[400px] rounded-2xl overflow-hidden border border-gray-100 shadow-sm mt-6">
                                    <iframe
                                        src={mapSrc}
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                    
                </div>
                
            </section>
            
        </section>
    )
}