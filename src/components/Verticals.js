import verticalData from "@/data/verticalData";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import Link from "next/link";

function Verticals() {
  return (
    <div className="container w-full mt-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-1 gap-y-10 px-12 ">
      <h1 className="text-center text-2xl font-bold text-[#363434] lg:col-span-4 col-span-1 mb-5">
        SPS Verticals
      </h1>

      {verticalData.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center mx-auto w-[300px]  "
        >
          <div
            className="w-full h-[300px] bg-cover bg-center text-white p-4 rounded-t-2xl"
            style={{ backgroundImage: `url(${item.imagUrl})` }}
          >
            <h1 className="text-xl font-bold mb-2">{item.name}</h1>
            <p className="text-sm">{item.desc}</p>
          </div>

          <div className="w-full min-h-[200px] bg-white p-4 text-sm text-gray-800">
            <ul className="list-none space-y-1">
              {item.branches.map((branch, id) => (
                <li
                  key={id}
                  className="border-b border-b-gray-200 p-2 last:border-b-0  "
                >
                  <Link href="#" className="flex justify-between items-center">
                    {branch} <ArrowLongRightIcon className="w-4 h-3" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Verticals;
