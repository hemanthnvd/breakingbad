import Link from "next/link";
import Navbar from "../components/Navbar";
const Login = () => {
  const inputClasses = "rounded cursor-pointer my-2  bg-red-100 w-1/3 h-8 ";
  return (
    <>
      <Navbar />
      <div className="m-5 flex flex-col items-center">
        <h1 className="m-5">Login with your credentials</h1>
        <input type="email" placeholder="Email" className={inputClasses} />
        <br />
        <input type="password" placeholder="Password" className={inputClasses} />
        <br />
        <button disabled className="rounded bg-red-900 text-red-600 w-1/12 p-2 my-5">
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
