"use client";
import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import SubMenu2 from "./SubMenu2";
import { useState } from "react";

function SubMenu({ submenu }) {
  const [hovered, setHovered] = useState(null);

  return (
    <ul className="absolute  w-56 bg-white text-blue-800 border-t-2 text-sm border-blue-800 shadow-lg z-50 font-bold  hidden group-hover:block">
      {submenu.map((subItem, index) => (
        <li
          key={index}
          className="relative border-b border-blue-950 last:border-b-0 p-2 py-3"
          onMouseEnter={() => setHovered(index)}
          onMouseLeave={() => setHovered(null)}
        >
          {subItem.path ? (
            <Link
              href={subItem.path || "#"}
              target={subItem.target || "_self"}
              className="flex items-center justify-between"
            >
              <span>{subItem.name}</span>
            </Link>
          ) : (
            <span>{subItem.name}</span>
          )}

          {subItem.submenu1 ? (
            <ArrowLongRightIcon className="h-4 w-4 absolute right-2 top-1/2 " />
          ) : null}

          {subItem.submenu1 && hovered === index && (
            <SubMenu2 submenu2={subItem.submenu1} />
          )}
        </li>
      ))}
    </ul>
  );
}

export default SubMenu;
