import ink from "../assets/icons8-ink-50.png";
import photos from "../assets/icons8-photos.gif";
import candle from "../assets/icons8-candle.gif";
import book from "../assets/icons8-book.gif";
import { NavLink } from "react-router-dom";
import { useTribute } from "../Context/TributeContext";
function BioData() {
  const { bioRef } = useTribute();

  const scrollToFooter = () => {
    if (bioRef.current) {
      bioRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className=" text-center ">
      <h1 className=" text-3xl mb-2 font-serif">
        Mrs. Sunmola Christiana Titilayo
      </h1>
      <p className=" mb-2">19th February 1980 - 23rd December 2022</p>
      <h1 className=" text-[1rem] mb-4">42 YEARS OF IMPACT! </h1>
      <p className=" mb-4">Kaduna, Nigeria</p>
      <div className=" desktop:flex justify-center gap-2 phone:grid phone:grid-cols-2 iphone:grid iphone:grid-cols-2 small:grid small:grid-cols-2 phone:m-4 small:m-4">
        <NavLink to="/">
          <button
            onClick={scrollToFooter}
            className="desktop:p-2 phone:px-8 mobile:px-28 iphone:p-4 small:p-2 macBook:text-[1.2rem] phone:w-[100%] macBook:px-28  bg-white border-2 rounded-md flex hover:bg-[#fffbf2]"
          >
            <span className=" phone:pr-4 small:pr-4">
              <img
                src={book}
                className=" desktop:w-6 desktop:h-6 phone:w-6 phone:h-6 iphone:w-7 iphone:h-7 mobile:w-6 small:w-7 small:h-7 macBook:w-10 macBook:h-10"
              />
            </span>
            Biography
          </button>
        </NavLink>
        <NavLink>
          <button className="desktop:p-2 phone:px-8 mobile:px-28 macBook:text-[1.2rem] small:p-2 phone:w-[100%] macBook:px-28 iphone:p-4  bg-white border-2 iphone:pr-8 rounded-md flex hover:bg-[#fffbf2]">
            <span className=" phone:pr-4 small:pr-4">
              <img
                src={candle}
                className=" desktop:w-6 desktop:h-6 phone:w-6 phone:h-6 mobile:h-6 mobile:w-6 iphone:w-7 iphone:h-7 small:w-7 small:h-7  macBook:w-10 macBook:h-10"
              />
            </span>
            Services
          </button>
        </NavLink>
        <NavLink>
          <button className="desktop:p-2 phone:px-8 small:p-2 macBook:text-[1.2rem] phone:w-[100%] small:pr-8 macBook:px-28 mobile:px-28 iphone:p-4 iphone:pr-10 bg-white border-2 rounded-md flex hover:bg-[#fffbf2]">
            <span className=" phone:pr-4 small:pr-4 ">
              <img
                src={photos}
                className=" desktop:w-6 desktop:h-6 phone:w-6 phone:h-6 iphone:w-7 iphone:h-7 mobile:w-6 small:w-7 small:h-7  macBook:w-10 macBook:h-10"
              />
            </span>
            Photos
          </button>
        </NavLink>

        <NavLink to="/tributes">
          <button className="desktop:p-2 phone:px-8 small:p-2 macBook:text-[1.2rem] small:pr-3 macBook:px-28 phone:w-[100%] mobile:px-28 iphone:p-4 iphone:pr-9 bg-white border-2 rounded-md flex hover:bg-[#fffbf2]">
            <span className=" phone:pr-4 small:pr-4">
              <img
                src={ink}
                alt="ink"
                className=" desktop:w-6 desktop:h-6 phone:w-6 phone:h-6 iphone:w-7 iphone:h-7 mobile:w-6 small:w-7 small:h-7  macBook:w-10 macBook:h-10"
              />
            </span>
            Tributes
          </button>
        </NavLink>
      </div>
    </section>
  );
}

export default BioData;
