import Link from "next/link";

function ServiceCard({ service }) {
  return (
    <div id="service-card">
      <div className="flex flex-col  sm:pt-32  xl:flex-row items-center space-y-4 lg:space-y-0 lg:pt-10 xl:pt-20 2xl:pt-32 px-7 lg:space-x-14">
        <div className="flex-col xl:w-72 w-full lg:px-7">
          <h1 className="text-[#363434] text-xl font-bold pb-3">
            {service.name}
          </h1>

          <ul className="list-none text-sm">
            {service.description.map((text, i) => (
              <li key={i}>{text}</li>
            ))}
          </ul>
        </div>
<div className="lg:flex justify-between space-y-10 pt-8">
        {service.features.map((feature, index) => (
          <div
            key={index}
            className="max-w-sm w-72 h-80 col-span-4 min-h-fit    rounded-2xl border-t-[#201942] border-8 border-b-0 
            border-l-0 border-r-0 drop-shadow-2xl bg-white ml-3"
          >
            <div className="px-6 py-4">
              <div className="mb-4">
                <div className="font-bold text-xl text-[#363434] mb-2">
                  {feature.name}
                </div>
                <ul className="list-disc ml-5 text-sm text-[#363434] font-semibold">
                  {feature.featuredes.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto flex justify-center pt-4">
                <Link href="#" className="text-blue-700 underline  tex-sm">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
