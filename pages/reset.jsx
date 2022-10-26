import { useState } from "react";
import Navbar from "../components/Navbar";
import { auth } from "../src/firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ state: false, value: "" });
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const submitHandler = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage({ state: true, value: "Password reset email sent!" });
      })
      .catch((error) => {
        setMessage({ state: true, value: error.message });
      });
  };
  return (
    <>
      <Navbar />
      <div className="mt-16 md:m-16 flex flex-col items-center text-white">
        <h1 className="m-5 mb-10 text-xl">Reset your password !</h1>
        <input
          type="email"
          placeholder="Email"
          className="form-control block md:w-1/3 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          onChange={emailHandler}
        />
        {message.state && <p className="mt-3">{message.value}</p>}
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 mt-8 bg-[#4E9F3D] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#33e453] hover:shadow-lg focus:bg-[#1E5128] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#1E5128] active:shadow-lg transition duration-150 ease-in-out"
          onClick={submitHandler}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Reset;
