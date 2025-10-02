import Image from "next/image";
import othersData from "@/data/othersData";

function OtherProducts() {
  return (
    <section className="w-full px-4 mt-28 mb-28">
      <div className="flex justify-center">
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  xl:gap-x-12 gap-x-6 gap-y-10 justify-center justify-items-center">
          {othersData.map((item, index) => (
            <div
              key={index}
              className=" bg-white relative flex flex-col items-center justify-center md:w-[250px] lg:w-[300px] h-[300px] shadow-xl mt-5"
            >
              <Image
                src={item.imageUrl}
                alt="Logo Image"
                width={70}
                height={70}
                className="absolute -top-4"
                sizes="(max-width: 768px) 60px, 70px"
              />
              <h1 className="py-4 text-lg xl:text-xl font-bold text-[#363434]">
                {item.name}
              </h1>
              <p className="text-sm px-6">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OtherProducts;
