import services from "@/data/services";

function MiddleSection({ services, setService, activeService }) {
  return (
    <div className="relative h-[320px] lg:-mt-36">
      <div className="absolute w-full inset-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full  hidden lg:block"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#172554"
            fillOpacity="1"
            d="M0,256L80,213.3C160,171,320,85,480,64C640,43,800,85,960,90.7C1120,96,1280,64,1360,48L1440,32L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        <div className="block lg:hidden w-full h-full bg-blue-950"></div>
      </div>
      <div className="absolute lg:inset-0 flex flex-col items-center justify-center text-white px-4 text-center pt-5 lg:pt-0 ">
        <span className="text-lg">
          Whether you are an entrepreneur looking for an engineering team or an
          enterprise pursuing digital transformation we can
        </span>
        <span className="text-lg">help you bring your vision to reality.</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full z-10 flex flex-col lg:flex-row justify-center  lg:space-y-0 lg:space-x-2 px-4 pb-2 lg:pb-0">
        {services.map((item, index) => (
          <button
            key={index}
            onClick={() => setService(item)}
            className="bg-blue-950 text-white text-lg font-medium border border-white px-5 py-2 lg:py-0 lg:pt-1 lg:border-b-0 hover:cursor-pointer"
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default MiddleSection;
