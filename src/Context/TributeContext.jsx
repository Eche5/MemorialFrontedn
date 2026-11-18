import {
  createContext,
  createRef,
  useCallback,
  useContext,
  useState,
} from "react";
import PropTypes from "prop-types";
import { USERS_API } from "../config";

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

  const serviceRef = createRef(null);

  const [isLoaded, setIsLoaded] = useState(false);

  //to display all tributes
  const fetchTributes = useCallback(async function fetchTributes() {
    try {
      setIsLoaded(true);

      const res = await fetch(
        `${USERS_API}/tribute`
      );

      const data = await res.json();

      if (res.ok) {
        setTributes(data.data);

        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsLoaded(false);
    }
  }, []);

  //To Update Tribute
  const fetchOneTribute = async (id) => {
    try {
      const response = await fetch(
        `${USERS_API}/${id}`
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
        isLoaded,
        setTribute,
        name,
        setName,
        fetchTributes,
        serviceRef,
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
