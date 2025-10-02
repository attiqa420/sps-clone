function MiddleBanner({ heading, subHeading, desc }) {
  return (
  <section className="w-full h-auto mt-10 mb-10 bg-gradient-to-bl from-[#201942] to-[#342779] text-white py-12 px-4 md:px-12">
  <div className="container mx-auto flex flex-col items-center text-center space-y-4 max-w-3xl">
    
    <h1 className="font-semibold text-3xl md:text-4xl lg:text-3xl">
      {heading}
    </h1>

    <h2 className="font-medium text-xl md:text-2xl lg:text-xl">
      {subHeading}
    </h2>

    <p className="text-base md:text-lg">
      {desc}
    </p>

  </div>
</section>

  );
}

export default MiddleBanner;
