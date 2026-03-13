import { WhyUs } from "../../constants";

export default function WhyChooseUs(){

    return (
        <section id="why-us" className="bg-[#080e51]">
            <div className="py-[4rem] md:py-[5rem] w-[96%] md:w-[87%] mx-auto">
                <h1 className="flex  justify-center text-[2rem] md:text-[3rem] text-white font-medium">Why Choose HomeID</h1>

                <p className="flex pt-4 justify-center text-[1.2rem] text-[#b5b7cb] font-medium">We connect renters with properties quickly and safely, and help owners reach the right tenants.</p>

                {/* cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-11 md:gap-7 ">
                    {WhyUs.map((w)=> (
                        <div key={w.title}>
                            <img src={w.image} alt={w.title} className="rounded-lg" />

                            <h3 className="text-[1.5rem] text-white font-medium pt-3 tracking-wide">{w.title}</h3>
                            <p className=" text-[#b5b7cb] pt-2 ">{w.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}