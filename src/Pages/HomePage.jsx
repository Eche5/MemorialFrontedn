import { useCallback, useEffect } from "react";
import Obituary from "../components/Obituary";
import { useTribute } from "../Context/TributeContext";

function HomePage() {
  const { fetchTributes } = useTribute();

  useEffect(() => {
    document.title = "Mrs. Sunmola | Bio ";

    fetchTributes();
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
