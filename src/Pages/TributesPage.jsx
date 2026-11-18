import Tributes from "../components/Tributes";
import { useEffect } from "react";
function TributesPage() {
  useEffect(() => {
    document.title = "Mrs. Sunmola | Tribute ";
  }, []);

  return (
    <section>
      <Tributes />
    </section>
  );
}

export default TributesPage;
