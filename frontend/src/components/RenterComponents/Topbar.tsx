import { Search } from "lucide-react";

export default function Topbar (){

    return(
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
    )
}