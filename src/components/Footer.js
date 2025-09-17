function Footer() {
  return (
    <div className=" bg-[#0a0e1a] ">
    <div className="flex lg:flex-row flex-col lg:items-center justify-between text-white lg:px-16 lg:py-14 py-6 px-7">
      <div className="min-h-36 h-64 lg:w-82 ">
        <h1 className="text-2xl font-bold pb-4">Business Groups</h1>
        <ul className="list-none text-[#c0c2ce] text-lg font-semibold ">
          <li className="hover:cursor-pointer hover:text-white">AI</li>
          <li className="hover:cursor-pointer hover:text-white">Cloud</li>
          <li className="hover:cursor-pointer hover:text-white">Cybersecurity</li>
          <li className="hover:cursor-pointer hover:text-white">Events & Learning</li>
          <li className="hover:cursor-pointer hover:text-white">Spinnlabs</li>
        </ul>
      </div>
      <div className="min-h-64 h-64 lg:w-82 ">
        <h1 className="text-2xl font-bold pb-4">More</h1>
        <ul className="list-none text-[#c0c2ce] text-lg font-semibold">
          <li className="hover:cursor-pointer hover:text-white">Our Story</li>
          <li className="hover:cursor-pointer hover:text-white">Events</li>
          <li className="hover:cursor-pointer hover:text-white">Careers</li>
          <li className="hover:cursor-pointer hover:text-white">Privacy Policy</li>
        </ul>
      </div>
      <div className="min-h-64 h-64 lg:w-96 w-auto">
        <h1 className="text-2xl font-bold pb-4">Contact Details</h1>
        <ul className="list-none text-[#c0c2ce] text-lg font-semibold">
          <li >2400 Research Blvd, Suite 115, Rockville, MD 20850 USA.</li>
          <li className="text-sm">
            <span className="text-white text-lg">Call Us :</span> 301-337-2290
          </li>
          <li className="text-sm">
            <span className="text-white text-lg">Email Us :</span> support@spsnet.com
          </li>

          <li className="text-sm">
            <span className="text-white text-lg">For Internship Queries :</span> internship@spsnet.com or
            internqueries@spsnet.com
          </li>
        </ul>
      </div>
     </div>
      <div className="text-[#c0c2ce] border-t border-t-gray-500 py-6"> <span className=" py-6 px-12">© 2025 SPS, All Rights Reserved.</span></div>
    </div>
  );
}

export default Footer;
