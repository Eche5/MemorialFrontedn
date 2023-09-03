import { createContext, useContext, useReducer, useRef, useState } from "react";

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
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const errRef = useRef();

  async function Login() {
    console.log(username, pwd);
    try {
      const userData = { username, password: pwd };
      const res = await fetch(
        "https://memorialbackendupdated.onrender.com/api/v1/users/login",
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
      } else {
        dispatch({ type: "login", payload: { username, password: pwd } });
        setUsername("");
        setPwd("");
      }
    } catch (err) {
      if (err.status === 400) {
        setErrMsg("username or password incorrect");
      }

      console.log(err);
      errRef.current.focus();
    }
  }

  function Logout() {}
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside the AuthProvider");
  return context;
}
export { AuthProvider, useAuth };
