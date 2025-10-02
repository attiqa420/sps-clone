"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import logo from "../../public/assets/logo.webp";
import menuItems from "@/data/menuItems";

import { ChevronDownIcon, Bars4Icon } from "@heroicons/react/24/solid";

import SubMenu from "./SubMenu";
import MobileMenu from "./MobileMenu";

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
    <nav className="bg-white fixed top-0 min-w-screen xl:pl-5 lg:pr-4 z-50 shadow-sm">
   
      <div className="hidden lg:flex items-center justify-between py-4 lg:pr-16 xl:pr-4 2xl:pr-7 text-[#0c2957]">
     
        <Image src={logo} alt="logo" priority={true} />

        {/* Menu Items */}
        <ul className="flex items-center gap-1.5  ">
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <Link
                href={item.path || "#"}
                className="inline-flex items-center hover:text-[#2f5197] transition-colors"
              >
                <span className="font-bold capitalize leading-[30px]">{item.name}</span>
                {item.submenu ? (
                  <ChevronDownIcon className="h-3 w-4  text-[#0c2957] ml-0.5"    aria-hidden="true" />
                ) : (
                  <span className="h-3 w-3" />
                )}
              </Link>

              {item.submenu && <SubMenu submenu={item.submenu} />}
            </li>
          ))}
        </ul>

       
        <button
          className="bg-[#201942] border border-[#201942] text-white font-bold min-w-[9rem] lg:min-w-48 rounded-full py-2 px-4 cursor-pointer hover:bg-white hover:text-blue-950  transition-colors"
          onClick={handleClick}
        
        >
          Internship Portal
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden  items-center justify-between py-3 px-7">
        <Image src={logo} alt="logo" priority={true} />
      
        <button
          onClick={handleToggle}
          className="text-white rounded-full w-12 h-12 bg-[#45a5e6] flex items-center justify-center "
        >
          <Bars4Icon className="h-8 w-8" />
        </button>
  
      </div>

    
      {isOpen && <MobileMenu menuItems={menuItems} onClose={handleToggle} />}
    </nav>
  );
}

export default Navbar;
