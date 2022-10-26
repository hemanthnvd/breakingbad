import Navbar from "../components/Navbar";
import Link from "next/link";
import { useAuth } from "../components/Auth/AuthContext";
import { useState } from "react";
import { useRouter } from "next/router";
const Register = () => {
  const router = useRouter();
  const { user, signup, logout } = useAuth();
  if (user) {
    router.push("/account");
  }
  // const inputClasses = "rounded cursor-pointer my-2  bg-red-100 w-1/3 h-8 ";
  const inputClasses =
    "form-control block md:w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState({ state: false, value: "" });
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  const password2Change = (event) => {
    setPassword2(event.target.value);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setMessage({ state: true, value: "Passwords does not match" });
    } else {
      setMessage({ state: false, value: "" });
      try {
        await signup(email, password);
        logout();
        router.push("/login");
      } catch (error) {
        setMessage({ state: true, value: error.message });
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col items-center text-white">
        <h1 className="m-5 mb-10 text-xl">Register</h1>
        <input type="email" placeholder="Email" className={inputClasses} onChange={emailChange} />
        <br />
        <input
          type="password"
          placeholder="Password"
          className={inputClasses}
          onChange={passwordChange}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password again"
          className="form-control block md:w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={password2Change}
        />
        <br />
        {message.state && <p>{message.value}</p>}
        <br />
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-[#4E9F3D] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#33e453] hover:shadow-lg focus:bg-[#1E5128] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#1E5128] active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleSignup}
        >
          Signup
        </button>
        <div className="mt-3">
          <Link href="/login">{"<<go back to login page"}</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
