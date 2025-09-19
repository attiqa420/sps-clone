"use client";
import Link from "next/link";
import { XMarkIcon, ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function MobileMenu({ menuItems, onClose }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
    setOpenSubMenu(null); 
  };

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto lg:hidden">
      <div className="flex justify-end mb-4">
        <XMarkIcon className="h-6 w-6 cursor-pointer" onClick={onClose} />
      </div>

      <ul className="space-y-4 text-blue-900 font-bold">
        {menuItems.map((item, index) => (
          <li key={index}>
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleMenu(index)}
            >
              <Link href={item.path || "#"}>{item.name}</Link>
              {item.submenu && (
                <ChevronDownIcon
                  className={`h-4 w-4 transform transition-transform ${
                    openMenu === index ? "rotate-180" : ""
                  }`}
                />
              )}
            </div>

            {item.submenu && openMenu === index && (
              <ul className="pl-4 mt-2 space-y-2">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSubMenu(subIndex)}
                    >
                      <Link href={subItem.path || "#"}>{subItem.name}</Link>
                      {subItem.submenu1 && (
                        <ChevronRightIcon
                          className={`h-4 w-4 transform transition-transform ${
                            openSubMenu === subIndex ? "rotate-90" : ""
                          }`}
                        />
                      )}
                    </div>

                    {subItem.submenu1 && openSubMenu === subIndex && (
                      <ul className="pl-4 mt-2 space-y-2 text-sm">
                        {subItem.submenu1.map((nested, nestedIndex) => (
                          <li key={nestedIndex}>
                            <Link href={nested.path || "#"}>{nested.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

        <li className="pt-4">
          <button
            className="w-full bg-blue-950 text-white rounded-full py-2"
            onClick={() =>
              window.open(
                "https://www.spsnet.com/spinnlabs_practice/internship-to-job-program/howitworks.php",
                "_blank"
              )
            }
          >
            Internship Portal
          </button>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
