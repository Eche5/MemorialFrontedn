import ink from "../assets/icons8-ink-50.png";
import photos from "../assets/icons8-photos.gif";
import candle from "../assets/icons8-candle.gif";
import book from "../assets/icons8-book.gif";
import { NavLink } from "react-router-dom";

function BioData() {
  return (
    <section className=" text-center">
      <h1 className=" text-3xl mb-2 font-serif">
        Mrs. Sunmola Christiana Titilayo
      </h1>
      <p className=" mb-2">19th February 1980 - 23rd December 2022</p>
      <p className=" mb-4">Kaduna, Nigeria</p>
      <div className=" flex justify-center gap-2">
        <NavLink to="/">
          <button className="desktop:p-2 phone:p-1 mobile:p-1 iphone:p-1  bg-white border-2 rounded-md flex hover:bg-[#fffbf2]">
            <span>
              <img
                src={book}
                className=" desktop:w-6 desktop:h-6 phone:w-12 phone:h-6 iphone:w-[38rem] iphone:h-6 mobile:w-6 small:w-6 small:h-6"
              />
            </span>
            Biography
          </button>
        </NavLink>

        <button className="desktop:p-2 phone:p-1 mobile:p-1 iphone:p-1  bg-white border-2 rounded-md flex hover:bg-[#fffbf2]">
          <span>
            <img
              src={candle}
              className=" desktop:w-6 desktop:h-6 phone:w-12 mobile:h-6 mobile:w-6 iphone:h-6 iphone:w-96 small:w-6 small:h-6"
            />
          </span>
          Services
        </button>
        <button className="desktop:p-2 phone:p-1 mobile:p-1 iphone:p-1  bg-white border-2 rounded-md flex hover:bg-[#fffbf2]">
          <span>
            <img
              src={photos}
              className=" desktop:w-6 desktop:h-6 phone:w-12 iphone:h-6 iphone:w-[22rem] mobile:w-6 small:w-6 small:h-6"
            />
          </span>
          Photos
        </button>
        <NavLink to="/tributes">
          <button className="desktop:p-2 phone:p-1 mobile:p-1 iphone:p-1  bg-white border-2 rounded-md flex hover:bg-[#fffbf2]">
            <span>
              <img
                src={ink}
                alt="ink"
                className=" desktop:w-6 desktop:h-6 phone:w-12 phone:h-6 iphone:w-[32rem] iphone:h-6 mobile:w-6 small:w-6 small:h-6"
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
