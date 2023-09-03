import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

function Login() {
  const usernameRef = useRef();
  const {
    Login,
    errRef,
    username,
    pwd,
    setErrMsg,
    errMsg,
    setUsername,
    setPwd,
    isAuthenticated,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";
  console.log(isAuthenticated);
  const LOGIN_URL = "/login";

  const onHandleSubmit = (e) => {
    e.preventDefault();
    Login();
  };
  const inputType = showPassword ? "text" : "password";

  useEffect(() => {
    if (username.length > 4 && pwd.length > 4) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [username, pwd]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated]);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd]);

  return (
    <div
      className="
    flex flex-col justify-center items-center
    min-h-screen py-4 px-2
  "
    >
      <section className="w-full max-w-[420px] min-h-[400px] flex flex-col justify-start p-8 bg-gray-800 text-white rounded-lg">
        <h1 className="text-5xl leading-5 mt-2">Sign In</h1>
        <form
          onSubmit={onHandleSubmit}
          className="flex flex-col justify-evenly flex-grow pb-4"
        >
          <label htmlFor="username" className="mt-4">
            Username
          </label>
          <input
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            required
            ref={usernameRef}
            className="text-[22px] p-1 rounded text-black"
          />
          <label htmlFor="password" className="mt-4">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              type={inputType}
              className="text-[22px] p-1 rounded text-black"
            />
            <button
              type="button"
              className="absolute top-2 right-3 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            disabled={!isValid}
            type="submit"
            className={
              isValid
                ? "border rounded-lg border-transparent py-2 px-4 text-base font-medium bg-gray-900 hover:border-gray-400 transition duration-250 ease-in-out cursor-pointer hover:bg-green-700 mt-4"
                : "cursor-not-allowed border rounded-lg border-transparent py-2 px-4 text-base font-medium bg-gray-900 hover:border-gray-400 transition duration-250 ease-in-out"
            }
          >
            Log in
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
