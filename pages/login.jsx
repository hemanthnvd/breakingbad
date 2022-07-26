import Navbar from "../components/Navbar";
const Login = () => {
  const inputClasses = "rounded cursor-pointer my-5 ml-96 bg-red-100 w-1/3 h-8 ";
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <form action="" className="m-5">
        <input type="text" placeholder="firstName" className={inputClasses} />
        <br />
        <input type="text" placeholder="lastName" className={inputClasses} />
        <br />
        <input type="text" placeholder="age" className={inputClasses} />
        <br />
        <input type="password" placeholder="password" className={inputClasses} />
        <br />
        <input type="password" placeholder="re-enter password" className={inputClasses} />
        <br />
        <button
          disabled
          type="submit"
          onClick={submitHandler}
          className="rounded bg-red-900 text-red-600 p-2 my-5 ml-96"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Login;
