function MiddleBanner({ heading, subHeading, desc }) {
  return (
    <div className="container w-full h-auto mt-20 mb-20 bg-linear-to-bl from-blue-950 to-blue-900 text-white py-12 px-12">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-semibold text-3xl pb-4">{heading}</h1>
        <h2 className="font-semibold text-xl">{subHeading}</h2>
        <p >{desc}</p>
      </div>
    </div>
  );
}

export default MiddleBanner;
