import { NavLink } from "react-router-dom";
import pic from "../assets/WhatsApp Image 2023-08-24 at 12.25.28.jpg";

function Headers() {
  return (
    <header className=" laptop:mt-2   iphone:mt-12">
      <div className=" phone:mt-12 mobile:mt-28 desktop:mt-0 laptop:mt-0 mobile:mb-4  ">
        <NavLink to="login">
          <img
            src={pic}
            className=" inset-0 m-auto desktop:w-72 macBook:w-96 macBook:h-96 desktop:h-72 laptop:h-[40rem] laptop:w-[40rem] rounded-full border-8 border-white iphone:w-[14.5rem] iphone:h-[14.5rem] small:w-40 small:h-40 phone:w-60 phone:h-60  phone:top-[12rem] mobile:top-[10rem] mobile:w-96 mobile:h-96 small:top-[8.2rem] iphone:top-[6.7rem] laptop:top-[12rem]"
          />
        </NavLink>
      </div>
    </header>
  );
}

export default Headers;
