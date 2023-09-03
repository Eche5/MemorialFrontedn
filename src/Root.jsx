import BioData from "./components/BioData";
import Headers from "./components/Headers";
import { Outlet } from "react-router-dom";
import Footer from "./components/Pages/Footer";
function Root() {
  return (
    <>
      <Headers />
      <BioData />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
