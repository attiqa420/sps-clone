"use client";

import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import SubMenu2 from "./SubMenu2";
import { useState } from "react";

function SubMenu({ submenu }) {
  const [hovered, setHovered] = useState(null);

  return (
    <ul className="absolute w-56 bg-white text-[#2f5197] border-t-2 border-blue-800 shadow-lg z-50 font-medium text-base leading-[24px] hidden group-hover:block">
      {submenu.map((subItem, index) => (
        <li
          key={index}
          className="relative border-b border-blue-950 last:border-b-0 p-2 py-3"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          <div className="flex items-center justify-between">
            {subItem.path ? (
              <Link
                href={subItem.path}
                target={subItem.target || "_self"}
                className="flex-1"
              >
                {subItem.name}
              </Link>
            ) : (
              <span className="flex-1">{subItem.name}</span>
            )}

            {/* Show arrow if submenu1 exists */}
            {subItem.submenu1 && (
              <ArrowLongRightIcon className="h-4 w-4 ml-2 text-blue-800" />
            )}
          </div>

          {/* Show SubMenu2 if hovered */}
          {subItem.submenu1 && hovered === index && (
            <div className="absolute top-0 left-full">
              <SubMenu2 submenu2={subItem.submenu1} />
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
