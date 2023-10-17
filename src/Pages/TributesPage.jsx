import Tributes from "../components/Tributes";
import { useEffect } from "react";
function TributesPage() {
  useEffect(() => {
    document.title = "Mrs. Sunmola | Tribute ";
  }, []);

  return (
    <section className=" transition-all">
      <Tributes />
    </section>
  );
}

export default TributesPage;
