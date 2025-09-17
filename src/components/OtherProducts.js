import Image from "next/image";
import othersData from "@/data/othersData";

function OtherProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center justify-items-center mt-32 mb-10 px-4">
      {othersData.map((item, index) => (
        <div
          key={index}
          className=" relative flex flex-col items-center justify-center w-[300px] h-[300px] shadow-xl mt-5 "
        >
          <Image
            src={item.imageUrl}
            alt="Logo Image"
            width={70}
            height={70}
            className="absolute -top-4"
          />
          <h1 className="py-4 text-lg font-bold text-[#363434]">{item.name}</h1>
          <p className="text-sm px-6">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default OtherProducts;
