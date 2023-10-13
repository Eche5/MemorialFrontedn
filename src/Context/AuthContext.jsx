import { createContext, useContext, useReducer, useRef, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

const initiatState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return initiatState;
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initiatState
  );
  const [username, setUsername] = useState("");
  const [isLogin, setIssLoggingin] = useState("Log in");
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  async function Login() {
    try {
      const userData = { username, password: pwd };
      setIssLoggingin("Logging in...");
      setIsAuthenticating(true);
      const res = await fetch(
        "https://memorial.adaptable.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
          withCredentials: true,
        }
      );
      const data = await res.json();
      if (!res.ok) {
        setErrMsg(data.message);
        setIssLoggingin("Log in");
        setIsAuthenticating(false);
      } else {
        dispatch({ type: "login", payload: userData });
        setIssLoggingin("Log in");
        setIsAuthenticating(false);

        setUsername("");
        setPwd("");
      }
    } catch (err) {
      if (err.status === 400) {
        setErrMsg("username or password incorrect");
      }
      errRef.current.focus();
    }
  }

  function Logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider
      value={{
        Login,
        username,
        pwd,
        errRef,
        errMsg,
        setErrMsg,
        setUsername,
        setPwd,
        isAuthenticated,
        Logout,
        user,
        isAuthenticating,
        isLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.any,
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
