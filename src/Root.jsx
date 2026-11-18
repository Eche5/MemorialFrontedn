import BioData from "./components/BioData";
import Headers from "./components/Headers";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Footer";
import { useTribute } from "./Context/TributeContext";
function Root() {
  const { headerRef } = useTribute();

  return (
    <div ref={headerRef} className="flex min-h-screen flex-col">
      <Headers />
      <BioData />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Root;
