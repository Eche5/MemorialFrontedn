import Tributes from "../Tributes";
import { useEffect } from "react";
function TributesPage() {
  useEffect(() => {
    document.title = "Mrs. Sunmola | Tribute ";
  }, []);
  return (
    <>
      <Tributes />
    </>
  );
}

export default TributesPage;
