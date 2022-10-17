import Navbar from "../components/Navbar";
import Link from "next/link";
import { useAuth } from "../components/ui/Auth/AuthContext";
import { useState } from "react";
const Register = () => {
  const { user, signup } = useAuth();
  const inputClasses = "rounded cursor-pointer my-2  bg-red-100 w-1/3 h-8 ";
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
      } catch (error) {
        setMessage({ state: true, value: error.message });
      }
    }
  };
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col items-center">
        <h1 className="m-2">Register</h1>
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
          className={inputClasses}
          onChange={password2Change}
        />
        <br />
        <Link href="/login">{"<<go back to login page"}</Link>
        {message.state && <p>{message.value}</p>}
        <button className="bg-red-200 p-1 m-1 rounded" onClick={handleSignup}>
          Signup
        </button>
      </div>
    </>
  );
};

export default Register;
