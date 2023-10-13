import {
  createContext,
  createRef,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import PropTypes from "prop-types";

const TributeContext = createContext();

function TributeProvider({ children }) {
  const [tribute, setTribute] = useState("");
  const [name, setName] = useState("");
  const [editTribute, setEditTribute] = useState("");
  const [tributes, setTributes] = useState([]);

  const [relationship, setRelationship] = useState("");
  const [success, setSuccess] = useState(true);
  const bioRef = createRef(null);
  const tributeRef = createRef(null);
  const headerRef = createRef(null);

  const fetchTributes = useCallback(async function fetchTributes() {
    try {
      const res = await fetch(
        "https://memorial.adaptable.app/api/v1/users/tribute"
      );
      const data = await res.json();

      if (res.ok) {
        setTributes(data.data);
        setSuccess(true);
      }
    } catch (error) {
      setSuccess(false);
    }
  }, []);
  const fetchOneTribute = async (id) => {
    try {
      const response = await fetch(
        `https://memorial.adaptable.app/api/v1/users/${id}`
      );
      const data = await response.json();
      const tribute = data.tributes.tribute;
      setEditTribute(tribute);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TributeContext.Provider
      value={{
        fetchOneTribute,
        editTribute,
        tribute,
        setTribute,
        name,
        setName,
        fetchTributes,
        tributes,
        success,
        bioRef,
        tributeRef,
        headerRef,
        setEditTribute,
        setRelationship,
        relationship,
        setTributes,
      }}
    >
      {children}
    </TributeContext.Provider>
  );
}

const useTribute = () => {
  const context = useContext(TributeContext);
  return context;
};

TributeProvider.propTypes = {
  children: PropTypes.any,
};
export { TributeProvider, useTribute };
