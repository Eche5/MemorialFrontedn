import BioData from "./components/BioData";
import Headers from "./components/Headers";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer";
import { useTribute } from "./Context/TributeContext";
function Root() {
  const { headerRef } = useTribute();

  return (
    <div ref={headerRef}>
      <Headers />
      <BioData />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
