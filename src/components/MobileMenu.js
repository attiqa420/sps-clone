"use client";

import Link from "next/link";
import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

function MobileMenu({ menuItems, onClose }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index);
    setOpenSubMenu(null);
  };

  const toggleSubMenu = (i) => {
    setOpenSubMenu(openSubMenu === i ? null : i);
  };

  return (
    <nav className="fixed inset-0 bg-white z-50 p-6 overflow-y-auto xl:hidden">
      <div className="flex justify-end mb-4">
        <button onClick={onClose} aria-label="Close Menu">
          <XMarkIcon className="h-6 w-6 cursor-pointer" />
        </button>
      </div>

      <section>
        <ul className="space-y-4 text-blue-900 font-bold">
          {menuItems.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col">
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
                  <div className="mt-2">
                    <ul className="pl-4 space-y-2">
                      {item.submenu.map((subItem, i) => (
                        <li key={i}>
                          <div className="flex flex-col">
                            <div
                              className="flex justify-between items-center cursor-pointer"
                              onClick={() => toggleSubMenu(i)}
                            >
                              <Link href={subItem.path || "#"}>
                                {subItem.name}
                              </Link>
                              {subItem.submenu1 && (
                                <ChevronRightIcon
                                  className={`h-4 w-4 transform transition-transform ${
                                    openSubMenu === i ? "rotate-90" : ""
                                  }`}
                                />
                              )}
                            </div>

                            {subItem.submenu1 && openSubMenu === i && (
                              <div className="mt-2">
                                <ul className="pl-4 space-y-2 text-sm">
                                  {subItem.submenu1.map((item1, id) => (
                                    <li key={id}>
                                      <Link href={item1.path || "#"}>
                                        {item1.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}

          <li className="pt-4">
            <div>
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
            </div>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default MobileMenu;
