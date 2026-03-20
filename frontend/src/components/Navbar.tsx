import { Link, NavLink } from "react-router-dom";
import { nonAuthNavLinks } from "../constants";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";
import { SignedIn, UserButton, useUser } from "@clerk/clerk-react";
import { useLandlordAuthStore } from "../store/LandlordAuthStore";


export default function Navbar() {
  const { isSignedIn } = useUser();
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const profile = useLandlordAuthStore((s) => s.profile);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-30 transition-all duration-300
          ${scrolled ? "backdrop-blur shadow-lg bg-white" : "bg-transparent"}
        `}
      >
        <section className="flex justify-between w-[98%] md:w-[95%] mx-auto items-center py-3">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1773312096/estate-logo_cmlseg.png"
              alt="logo"
              className="w-[7rem] md:w-40"
            />
          </Link>

          {/* Links */}
          { !SignedIn ? (
            <span className="hidden lg:flex gap-9 justify-center text-[#080e51] font-300 font-primary tracking-tight">
              {nonAuthNavLinks.map((link) => {
                  const isActive = location.hash === link.id;

                  return (
                  <div key={link.id}>
                      <a href={link.id} className={`nav-link ${isActive ? "active" : ""}`}>{link.title}</a>
                  </div>
                  )
                  })}
            </span>
          ) : ""}
          
        
          <div className="flex gap-2 ">
            {isSignedIn ? (
              profile?.role == "renter"  ? (
                <>
                <button>
                  {/* todo: add heart button */}
                  Favourites
                </button>
                <UserButton />
              </>
              ) : (<UserButton />)
             ) : (<>
                {/* Login button */}
                <button className={`flex py-1 px-5 md:px-9 md:py-2 rounded-lg  text-[1.1rem] font-medium tracking-wider  ${scrolled ? "bg-[#e86822]/90 hover:bg-[#e86822]/80 shadow-sm text-white" : "bg-white text-[#080e51]"}
                `}>
                  Login
                  <img
                  src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1773328969/wired-outline-500-fingerprint-security-hover-pinch_1_csoxif.png"
                  alt="login"
                  className={`hidden justify-center pl-2  ${scrolled ? "md:hidden" : "md:flex"}
                  `}
                  />
                </button>
              </>
            )}
            

            {/* Hamburger */}
            <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden hover:bg-[#e86822] hover:text-white hover:bg-opacity-20 p-2 rounded-lg transition-all"
                aria-label="Toggle menu"
            >
                <Menu size={24} />
            </button>
          </div>      

        </section>
      </nav>

      {/* Sidebar is now OUTSIDE <nav> — no longer inherits nav's background */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}