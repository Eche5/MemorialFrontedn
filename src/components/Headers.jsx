import { NavLink } from "react-router-dom";
import headerImg from "../assets/pexels-karolina-grabowska-4622890.jpg";
import pic from "../assets/WhatsApp Image 2023-08-24 at 12.25.28.jpg";

function Headers() {
  return (
    <header className="m-4 border-8 border-white rounded-2xl relative mb-24">
      <img
        src={headerImg}
        alt="roseflower"
        className="desktop:h-full mobile:h-[20vh] w-[100%] rounded-2xl phone:h-[20vh] iphone:h-[20vh] small:h-[35vh]"
      />
      <NavLink to="login">
        <img
          src={pic}
          className="absolute inset-0 m-auto desktop:w-64 desktop:h-64 rounded-full border-8 border-white iphone:w-48 iphone:h-48 small:w-40 small:h-40 phone:w-40 phone:h-40 desktop:top-[15rem] phone:top-[7.5rem] mobile:top-[10rem] small:top-[8.2rem] iphone:top-[6.7rem]"
        />
      </NavLink>
    </header>
  );
}

export default Headers;
