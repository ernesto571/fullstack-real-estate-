import { Link } from "react-router-dom";
import { nonAuthNavLinks } from "../constants";
import { useEffect, useState } from "react";

export default function Navbar (){

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          setScrolled(window.scrollY > 80);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);
    return(
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${scrolled ? "backdrop-blur shadow-lg bg-white" : " bg-inherit"}
        `}>
            <section className="flex justify-between w-[95%] mx-auto items-center py-3">
                {/* logo */}
                <Link to="/">
                    <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1773312096/estate-logo_cmlseg.png" alt="logo" className="w-40 " />
                </Link>

                {/* links */}
                <span className="hidden lg:flex gap-9 justify-center text-[#080e51]  font-300 font-primary tracking-tight">
                    {nonAuthNavLinks.map((link)=>(
                        <div key={link.id}>
                            <a href={link.id}>{link.title}</a>
                        </div>
                    ))}
                </span>
                
                {/* button */}
                <button className="flex bg-white px-9 py-2 rounded-lg text-[#080e51] text-[1.1rem] font-medium tracking-wider">
                    Log in
                    <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1773328969/wired-outline-500-fingerprint-security-hover-pinch_1_csoxif.png" alt="login" className="flex justify-center pl-2" />
                </button>
            </section>
        </nav>
    )
}