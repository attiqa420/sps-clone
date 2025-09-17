import customersData from "@/data/customersData"
import Image from "next/image"


function Customers() {
  return (
    <div className="pb-20 w-full flex flex-col items-center justify-items-center">
      <div className="text-center ">
<h1 className="text-[#363434] font-bold text-xl">Customers we are proud to work with.</h1>
<p>Our mission is to deliver compelling narratives, remarkable experiences, and outstanding results for our clients.</p>
      </div>
      <div className="mt-9 grid lg:grid-cols-8 grid-cols-2 gap-6
      ">
{customersData.map( (item, index) => (
<div key={index} className="w-32 h-32 bg-white rounded-full grid col-span-1 place-items-center">
<Image src={item.imageUrl} alt="customer" width={70} height={70} className="object-center" />
        </div>
))}
        

      </div>
    </div>
  )
}

export default Customers
