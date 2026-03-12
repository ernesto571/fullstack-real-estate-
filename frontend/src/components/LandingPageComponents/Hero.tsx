
export default function Hero (){

    return (
        <section className="flex relative  ">
            <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1773311389/bg-homepage_nqbhoc.jpg" alt="homepage-background" className="relative h-[90vh] md:h-[90vh] lg:h-[100%]" />

            <div className="flex flex-col absolute inset-0 mt-[9rem] ml-5 md:ml-[5rem] text-[#080e51] w-[90%] md:w-[70%] lg:w-[40%]">
                <h1 className="text-[#080e51] text-[2.2rem] md:text-[3rem] font-[700] font-sans ">Find and List Properties with Ease</h1>
                <p className="mt-8 font-sans md:text-[1.3rem] font-semibold tracking-wide md:leading-10">A simple marketplace where buyers discover homes and sellers connect with the right buyers.</p>

                <div className="mt-[3rem] flex gap-9">
                    <button className="bg-[#e86822] rounded-lg md:text-[1.2rem] font-medium text-white py-2 md:py-4 px-5 md:px-10">Browse Properties</button>
                    <button className="bg-white rounded-lg md:text-[1.2rem] font-medium text-[#e86822] py-2 md:py-4 px-5 md:px-10">List Your Property</button>
                </div>
            </div>
        </section>
    )    
}