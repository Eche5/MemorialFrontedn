import { useEffect } from "react";
import Obituary from "../Obituary";

function HomePage() {
  useEffect(() => {
    document.title = "Mrs. Sunmola | Bio ";
  }, []);
  return (
    <>
      <Obituary />
    </>
  );
}

export default HomePage;
