import verticalData from "@/data/verticalData";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Verticals() {
  return (
    <section
      id="verticals"
      className=" w-full mt-10 mb-10 mx-7"
    >
      <h3 className="text-center text-2xl font-bold text-[#363434] mb-10">
        SPS Verticals
      </h3>

      <div className="max-w-[1400px] flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-8 gap-x-8">
          {verticalData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center xl:w-[320px] md:w-[350px] min-h-[600px]"
            >
              <div
                className="w-full h-[300px] bg-cover bg-center text-white p-4 rounded-t-2xl"
                style={{ backgroundImage: `url(${item.imagUrl})` }}
              >
                <h1 className="text-xl font-bold mb-2">{item.name}</h1>
                <p className="text-sm">{item.desc}</p>
              </div>

              {/* Bottom List Section */}
              <div className="w-full min-h-[200px] bg-white p-4 text-sm text-gray-800 rounded-b-2xl shadow">
                <ul className="list-none space-y-1">
                  {item.branches.map((branch, id) => (
                    <li
                      key={id}
                      className="border-b border-b-gray-200 p-2 last:border-b-0"
                    >
                      <Link
                        href="#"
                        className="flex justify-between items-center font-medium"
                      >
                        {branch}{" "}
                        <ArrowLongRightIcon className="w-5 h-8 text-[#363434]" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Verticals;
