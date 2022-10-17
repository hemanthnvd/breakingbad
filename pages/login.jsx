import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../components/Auth/AuthContext";
const Login = () => {
  const inputClasses = "rounded cursor-pointer my-2  bg-red-100 w-1/3 h-8 ";
  const router = useRouter();
  const { user, login } = useAuth();
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
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col items-center">
        <h1 className="m-5">Login with your credentials</h1>
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
        <button className="rounded bg-red-900 text-red-600 w-1/12 p-2 my-5" onClick={loginHandler}>
          Login
        </button>
        <br />
        <Link href="/register" className="text-teal-600">
          New user?
        </Link>
      </div>
    </>
  );
};

export default Login;
