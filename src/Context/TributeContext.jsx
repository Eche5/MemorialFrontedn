import { createContext, useState } from "react";

export const TributeContext = createContext();

function TributeProvider({ children }) {
  const [tribute, setTribute] = useState("");
  const [name, setName] = useState("");
  const [tributes, setTributes] = useState([]);
  const [success, setSuccess] = useState(true);

  const fetchTributes = async () => {
    try {
      const res = await fetch(
        "https://memorialbackendupdated.onrender.com/api/v1/users/tribute"
      );
      const data = await res.json();

      if (res.ok) {
        setTributes(data.data);
        setSuccess(true);
      }
    } catch (error) {
      setSuccess(false);
      console.error("Error fetching tributes:", error);
    }
  };
  return (
    <TributeContext.Provider
      value={{
        tribute,
        setTribute,
        name,
        setName,
        fetchTributes,
        tributes,
        success,
      }}
    >
      {children}
    </TributeContext.Provider>
  );
}
export default TributeProvider;
