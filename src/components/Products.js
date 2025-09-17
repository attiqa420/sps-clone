import product from "@/data/product";
import Image from "next/image";

function Products() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {product.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-[500px] h-[400px]   p-10 ${item.color}`}
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
            {item.name == "AZALIO" || item.name == "MYID Self Verify" ? (
              <button className="bg-blue-950 text-white rounded-3xl px-6 py-2 border transition duration-300 hover:cursor-pointer hover:bg-white hover:text-blue-950 hover:border-blue-950">
                View App
              </button>
            ) : null}
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
