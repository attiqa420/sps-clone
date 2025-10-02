import services from "@/data/services";

function MiddleSection({ services, setService, activeService }) {
  return (
    <section className="relative w-full h-[250px] -mt-[100px] z-10 text-white overflow-hidden">
 
      <div className="absolute top-0 left-0 w-full h-full z-0 hidden lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 250"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#201942"
            fillOpacity="1"
            d="M0,128L480,64L960,64L1440,0L1440,320L960,320L480,320L0,320Z"
          ></path>
        </svg>
      </div>

 
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-[#201942] lg:hidden" />

    
      <div className="relative z-10 flex flex-col justify-between items-center h-full px-4 text-center">
     
        <div className="flex-grow flex items-center justify-center w-full">
          <h4 className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-snug">
            Whether you&apos;re an entrepreneur or enterprise, we help bring your vision to life.
          </h4>
        </div>

     
        <nav className="w-full flex flex-col lg:flex-row justify-center gap-2 pb-2">
          {services.map((item, index) => (
            <button
              key={index}
              onClick={() => setService(item)}
              className={`text-sm font-medium border px-4 py-2 rounded transition-all duration-300 w-full lg:w-auto
                ${
                  activeService.name === item.name
                    ? "bg-white text-[#201942] border-white"
                    : "bg-[#201942] text-white border-white hover:bg-white hover:text-[#201942]"
                }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}




export default MiddleSection;
