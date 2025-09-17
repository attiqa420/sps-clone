import Link from "next/link";

function SubMenu2({ submenu2 = [] }) {
  return (
    <ul className="absolute top-0 left-full w-56 bg-white text-blue-800 border-t-2 border-blue-800 shadow-lg z-50  hidden group-hover:block">
      {submenu2.map((subItem, index) => (
        <li
          key={index}
          className="border-b border-blue-200 last:border-b-0 p-2 py-3 hover:text-blue-700"
        >
          {subItem.path ? (
            <Link href={subItem.path || "#"} target={subItem.target || "_self"}>
              {subItem.name}
            </Link>
          ) : (
            <span>{subItem.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default SubMenu2;
