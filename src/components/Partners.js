import partnersData from "@/data/partnersData";
import Image from "next/image";

function Partners() {
  return (
    
      <section className=" mt-16 mb-16 ">
        <div className="text-center  text-[#363434]"> 
        <h3 className="font-bold text-2xl pb-8">Our Technology Partners</h3>
        </div>
     <div className="flex justify-center ">
      <div className=" grid grid-cols-2 place-items-center lg:grid-cols-5 2xl:grid-cols-7 gap-x-12 gap-y-4">
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
      </div>
    </section>
  );
}

export default Partners;
