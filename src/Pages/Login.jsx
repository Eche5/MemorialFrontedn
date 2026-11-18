import { useState, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Spinner from "../components/Spinner";
import {
  ArrowLeftIcon,
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  UserIcon,
} from "../components/Icons";

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
    isLogin,
    setPwd,
    isAuthenticated,
    isAuthenticating,
  } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const isValid = username.length > 4 && pwd.length > 4;

  const onHandleSubmit = (e) => {
    e.preventDefault();
    Login();
  };

  useEffect(() => {
    document.title = "Mrs. Sunmola | Login";
    usernameRef.current.focus();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    setErrMsg("");
  }, [username, pwd, setErrMsg]);

  const inputWrap =
    "flex items-center gap-3 rounded-xl border border-line bg-white px-4 transition-colors focus-within:border-gold-soft focus-within:ring-4 focus-within:ring-gold-soft/20";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-10">
      <section className="card w-full max-w-sm p-8">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-medium text-ink">
            Welcome back
          </h1>
          <p className="mt-2 text-sm text-ink-muted">
            Sign in to manage tributes.
          </p>
        </div>

        <p
          ref={errRef}
          tabIndex={-1}
          className={errMsg ? "errmsg mt-6" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>

        <form onSubmit={onHandleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="username" className="field-label">
              Username
            </label>
            <div className={inputWrap}>
              <UserIcon className="h-4 w-4 flex-none text-ink-muted" />
              <input
                id="username"
                type="text"
                autoComplete="username"
                className="w-full bg-transparent py-3 text-[0.95rem] text-ink outline-none placeholder:text-ink-muted/70"
                onChange={(e) => setUsername(e.target.value.trim())}
                value={username}
                required
                ref={usernameRef}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="field-label">
              Password
            </label>
            <div className={inputWrap}>
              <LockIcon className="h-4 w-4 flex-none text-ink-muted" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                className="w-full bg-transparent py-3 text-[0.95rem] text-ink outline-none placeholder:text-ink-muted/70"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="flex-none rounded-full p-1 text-ink-muted transition-colors hover:text-ink"
              >
                {showPassword ? (
                  <EyeOffIcon className="h-4 w-4" />
                ) : (
                  <EyeIcon className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          <button
            disabled={!isValid || isAuthenticating}
            type="submit"
            className="btn-primary mt-2 w-full py-3"
          >
            {isAuthenticating && <Spinner />}
            {isLogin}
          </button>
        </form>
      </section>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
      >
        <ArrowLeftIcon className="h-4 w-4" />
        Back to memorial
      </Link>
    </div>
  );
}

export default Login;
