import Navbar from "../components/Navbar";
import Link from "next/link";
const register = () => {
  const inputClasses = "rounded cursor-pointer my-2  bg-red-100 w-1/3 h-8 ";
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col items-center">
        <h1 className="m-2">Register</h1>
        <input type="email" placeholder="Email" className={inputClasses} />
        <br />
        <input type="password" placeholder="Password" className={inputClasses} />
        <br />
        <input type="password" placeholder="Enter your password again" className={inputClasses} />
        <br />
        <Link href="/login">{"<<go back to login page"}</Link>
        <button className="bg-red-200 p-1 m-1 rounded">Submit</button>
      </div>
    </>
  );
};

export default register;
