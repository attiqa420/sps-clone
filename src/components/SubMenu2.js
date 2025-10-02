import Link from "next/link";

function SubMenu2({ submenu2 }) {
  return (
    <ul className="absolute top-0 left-full w-56 bg-white text-[#2f5197] border-t-2 border-blue-800 shadow-lg z-50 font-medium text-base leading-[24px]">
      {submenu2.map((subItem, index) => (
        <li
          key={index}
          className="border-b border-blue-200 last:border-b-0 p-2 py-3 hover:text-blue-700"
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
          </div>
        </li>
      ))}
    </ul>
  );
}

export default SubMenu2;
