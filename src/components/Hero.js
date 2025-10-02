import Image from "next/image";
import hero from "../../public/assets/hero.webp";

function Hero() {
  return (
    <section className="relative z-0 grid grid-cols-12 bottom-0">
    
      <div className="lg:col-span-6 col-span-12 px-7 mt-8 xl:pt-38 2xl:pt-42   flex flex-col">
        <header>
          <h1 className="text-[#2b4e95] text-4xl font-bold font-sans pb-3 lg:pb-4">
            What if
          </h1>
        </header>

        <article className="text-blue-950 text-lg font-medium  px-7">
          <ul className="list-disc space-y-2">
            <li>You could enhance your Identity Management</li>
            <li>You could modernize your legacy enterprise information systems</li>
            <li>You could have Security Operations Center 24x7</li>
            <li>You could have your Cyber Security environment managed for you.</li>
            <li>You could have Compliance Artifacts for your Auditors at click of a button</li>
          </ul>
        </article>

        <div className="my-4 2xl:my-7 px-7">
    <button className="bg-white text-blue-950 text-sm font-medium rounded-full border border-blue-950  px-10 py-3 hover:cursor-pointer hover:bg-blue-950 hover:text-white">
      Request Constitution
    </button>
  </div>
      </div>

      {/* Right Content */}
      <div className="lg:col-span-6 col-span-12 relative flex flex-col">
        <Image
          src={hero}
          alt="Hero image"
          className="w-full h-[580px]   object-top"
          priority={true}
          sizes="(max-width: 768px) 100vw, 412px"
        />

        <div className="absolute inset-0 flex flex-col items-center lg:pt-48 pt-28 px-4 text-center">
          <div className="text-white max-w-lg">
            <div className="lg:text-3xl text-2xl font-bold">
              We are an{" "}
              <span className="text-blue-600/100 dark:text-sky-400/100">
                IT Solutions Provider
              </span>
            </div>
            <div className="lg:text-3xl text-2xl font-bold">
              focused on{" "}
              <span className="text-blue-600/100 dark:text-sky-400/100">
                Solving Business Problems
              </span>
            </div>

            <p className="lg:text-3xl text-2xl font-bold">leveraging</p>

            <div className="lg:text-3xl font-bold">
              <span className="text-amber-500">
                AI, Cloud, Automation & Cybersecurity
              </span>
            </div>

            <button
              className="bg-white text-blue-950 rounded-full mt-7 py-2 px-7 text-sm font-semibold hover:border hover:border-blue-950 hover:cursor-pointer"
            >
              How can we help you today?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
