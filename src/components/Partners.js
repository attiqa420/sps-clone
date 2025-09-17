import partnersData from "@/data/partnersData";
import Image from "next/image";

function Partners() {
  return (
    <>
      <div className=" mt-32  mx-auto text-center mb-10 text-[#363434]">
        <h1 className="font-bold text-2xl ">Our Technology Partners</h1>
      </div>
      <div className=" grid grid-cols-2 place-items-center lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:items-center  gap-x-8 gap-y-4">
        {partnersData.map((item, index) => (
          <div
            key={index}
            className="flex  items-center justify-center w-[100px] h-[50px] bg-white hover:cursor-pointer "
          >
            <Image
              src={item.imageUrl}
              width={100}
              height={100}
              alt="partners logo"
              className=" transition duration-500 hover:scale-75 "
              sizes="(max-width: 768px) 80px, 100px"
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default Partners;
