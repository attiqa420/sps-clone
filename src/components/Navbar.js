"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.webp";
import Link from "next/link";
import menuItems from "@/data/menuItems";
import {
  ChevronDownIcon,
  Bars4Icon,
} from "@heroicons/react/24/solid";
import SubMenu from "./SubMenu";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 

 
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClick = () => {
    window.open(
      "https://www.spsnet.com/spinnlabs_practice/internship-to-job-program/howitworks.php",
      "_blank"
    );
  };

  return (
    <nav className="bg-white fixed top-0 w-full pl-6  z-50 ">
      <div className="hidden lg:flex pr-16  items-center justify-between py-3 text-blue-950 font-bold text-lg">
        <Image src={logo} alt="logo"   priority={true}  />

        <ul className="flex items-center gap-0.5 font-bold">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.path || "#"}
                className="inline-flex items-center"
              >
                <span> {item.name} </span>
                {item.submenu ? (
                  <ChevronDownIcon className="h-4 w-6" />
                ) : (
                  <span className="h-4 w-6" />
                )}
              </Link>
              {/* submenu */}
              {item.submenu && <SubMenu submenu={item.submenu} />}
            </li>
          ))}
        </ul>

        <button
          className="bg-blue-950 text-white font-bold min-w-36 rounded-full py-1 px-4 cursor-pointer"
          onClick={handleClick}
        >
          Intership Portal
        </button>
      </div>
      {/*Mobile Menu */}
<div className="lg:hidden flex items-center justify-between p-3">
 <Image src={logo} alt="logo"   priority={true}  />
 <Bars4Icon className="text-blue-950 h-8 w-8" onClick={handleToggle} />
</div>
{isOpen && (<MobileMenu menuItems={menuItems} onClose={handleToggle} />)}
      
    </nav>
  );
}

export default Navbar;
