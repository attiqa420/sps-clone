import product from "@/data/product";
import Image from "next/image";

function Products() {
  return (
    <section className="w-full mx-5  mt-10 mb-10">
      <div className="flex justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 justify-items-center">
          {product.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-[500px] 2xl:w-[700px] 2xl:h-[300px] h-[400px] p-10 ${item.color}`}
            >
              <h1 className="p-3 text-lg text-[#363434] font-bold">
                {item.name}
              </h1>
              <p className="text-sm">{item.description}</p>
              <Image
                src={item.imageUrl}
                alt="Card image"
                loading="lazy"
                width={200}
                height={200}
                className="p-4"
                sizes="(max-width: 768px) 180px, 200px"
              />
              {(item.name === "AZALIO" || item.name === "MYID Self Verify") && (
                <button className="bg-[#201942] text-white rounded-3xl px-6 py-2 border transition duration-300 hover:cursor-pointer hover:bg-white hover:text-blue-950 hover:border-blue-950">
                  View App
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
