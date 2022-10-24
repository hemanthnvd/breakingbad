import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../components/Auth/AuthContext";
import { provider } from "../src/firebase-config";
const Login = () => {
  const inputClasses =
    "form-control block w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
  const router = useRouter();
  const { user, login, loginGoogle } = useAuth();
  if (user) {
    router.push("/account");
  }
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ state: false, value: "" });
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      setMessage({ state: false, value: "" });
      router.push("/");
    } catch (error) {
      setMessage({ state: true, value: error.message });
    }
  };
  const googleHandler = () => {
    loginGoogle(provider)
      .then((result) => {
        setMessage({ state: false, value: "" });
      })
      .catch((error) => {
        setMessage({ state: true, value: error.message });
      });
  };
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col items-center text-white">
        <h1 className="m-5 mb-10 text-xl">Login with your credentials</h1>
        <input type="email" placeholder="Email" className={inputClasses} onChange={emailHandler} />
        <br />
        <input
          type="password"
          placeholder="Password"
          className={inputClasses}
          onChange={passwordHandler}
        />
        <br />
        {message.state && <p>{message.value}</p>}
        <br />
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={loginHandler}
        >
          Login
        </button>
        <br />
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-[#4E9F3D] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#33e453] hover:shadow-lg focus:bg-[#1E5128] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#1E5128] active:shadow-lg transition duration-150 ease-in-out"
          onClick={googleHandler}
        >
          Signin with google
        </button>
        <div className="flex justify-between">
          <div className="m-5">
            <Link href="/register" className="text-teal-600">
              New user?
            </Link>
          </div>

          <button className="m-5">Forgot password?</button>
        </div>
      </div>
    </>
  );
};

export default Login;
