import { useCallback, useEffect } from "react";
import Obituary from "../components/Obituary";

function HomePage() {
  useEffect(() => {
    document.title = "Mrs. Sunmola | Bio ";
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [scrollToTop]);
  return (
    <section className=" transition-all">
      <Obituary />
    </section>
  );
}

export default HomePage;
