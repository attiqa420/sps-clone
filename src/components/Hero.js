import Image from "next/image";
import hero from "../../public/assets/hero.webp";

function Hero() {
  return (
    <div className="grid grid-cols-12  bottom-0">
      <div className="lg:col-span-6 col-span-12 px-7 pt-28 lg:pt-36">
        <h1 className="text-[#2b4e95] text-4xl font-bold font-sans pb-3 lg:pb-5">
          What if
        </h1>

        <ul className="text-blue-950 text-lg font-medium list-disc px-7">
          <li>You could enhance your Identity Management</li>
          <li>
            You could modernize your legacy enterprise information systems
          </li>
          <li>You could have Security Operations Center 24x7</li>
          <li>
            You could have your Cyber Security environment managed for you.
          </li>
          <li>
            You could have Compliance Artifacts for your Auditors at click of a
            button
          </li>
        </ul>
        <div>
          <button className="bg-white text-blue-950 text-sm rounded-full border border-blue-950 px-5 p-3 mt-5 ml-7 mb-4 lg:mb-0 hover:cursor-pointer hover:bg-blue-950 hover:text-white">
            Request Constitution
          </button>
        </div>
      </div>
      <div className="lg:col-span-6 col-span-12 relative">
        <Image src={hero} alt="Hero image" className="w-full block" priority={true}  sizes="(max-width: 768px) 100vw, 412px" />
        <div className="absolute inset-0  flex flex-col items-center lg:pt-48 pt-28">
          <div className="text-white text-center">
            <div className="lg:text-3xl text-2xl font-bold">
              We are an{" "}
              <span className="text-blue-600/100 dark:text-sky-400/100 ">
                IT Solutions Provider
              </span>
            </div>
            <div className="lg:text-3xl text-2xl font-bold">
              focused on{" "}
              <span className="text-blue-600/100 dark:text-sky-400/100 ">
                Solving Business Problems
              </span>
            </div>

            <span className="lg:text-3xl text-2xl font-bold">leveraging</span>
            <div className="lg:text-3xl font-bold">
              <span className="text-amber-500">
                {" "}
                AI, Cloud, Automation & Cybersecurity
              </span>
            </div>
            <button
              className="bg-white text-blue-950 rounded-full
             mt-9 p-2 text-sm font-semibold
             hover:border  hover:border-blue-950 hover:cursor-pointer"
            >
              How can we help you today?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
