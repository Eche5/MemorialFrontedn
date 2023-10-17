import { useCallback, useEffect } from "react";
import { useTribute } from "../Context/TributeContext";
import location from "../assets/icons8-location.gif";

function Services() {
  const { serviceRef } = useTribute();

  const scrollToService = useCallback(() => {
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [serviceRef]);

  useEffect(() => {
    scrollToService();
  }, [scrollToService]);

  return (
    <section className="flex flex-col justify-center items-center">
      <div
        className=" bg-white border-4 border-gray-500  laptop:w-[800px] desktop:w-[800px]  rounded-lg px-8 py-8"
        ref={serviceRef}
      >
        <h1 className=" text-3xl text-black pb-8">Visitation</h1>

        <div className="laptop:flex laptop:justify-between desktop:flex desktop:justify-between gap-8">
          <div className=" leading-10 w-full">
            <div className=" flex border-dashed border-b-2 border-gray-800 w-[80%] items-center">
              <img src={location} className=" w-5 h-5" />
              <h1 className=" font-black">Location</h1>
            </div>
            <p>No.56, Aminu Tanko Street, Sabo Kaduna, Nigeria</p>
            <a className=" underline text-blue-700" href="#">
              Get Direction
            </a>
          </div>

          <div className=" leading-10 w-full">
            <div className=" flex border-dashed border-b-2 border-gray-800 w-[80%] items-center">
              <img
                className=" w-5 h-5"
                src="https://img.icons8.com/hieroglyphs/32/experimental-calendar-hieroglyphs.png"
                alt="experimental-calendar-hieroglyphs"
              />
              <h1 className=" font-black">Date & Time</h1>
            </div>
            <h1>Monday, November 18, 2023</h1>
            <h1>1:00 PM to 3:45 PM</h1>
          </div>
        </div>
        <div className=" flex gap-2 border-dashed border-b-2 border-gray-800 w-full pt-4">
          <img
            className=" w-5 h-5"
            src="https://img.icons8.com/ios/50/calendar--v1.png"
            alt="calendar--v1"
          />
          <h1 className=" font-black">Additional Details</h1>
        </div>
      </div>
    </section>
  );
}

export default Services;
