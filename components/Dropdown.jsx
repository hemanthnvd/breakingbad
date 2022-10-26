import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { navActions } from "../store/navState";
import { useAuth } from "./Auth/AuthContext";
const Dropdown = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(navActions.toggle());
    logout();
    router.push("/login");
  };
  return (
    <>
      <div className="text-white absolute z-10 bg-[#101110] w-full md:hidden">
        <div className="flex items-center justify-center my-1.5">
          <button
            onClick={() => {
              dispatch(navActions.toggle());
              router.push("/");
            }}
          >
            Home
          </button>
        </div>
        <div className="flex items-center justify-center my-1.5 ">
          <button
            onClick={() => {
              dispatch(navActions.toggle());
              router.push("/favourites");
            }}
          >
            Favourites
          </button>
        </div>
        <div className="flex items-center justify-center my-1.5">
          <button
            onClick={() => {
              dispatch(navActions.toggle());
              router.push("/account");
            }}
          >
            My account
          </button>
        </div>
        <div className="flex items-center justify-center my-1.5">
          {user ? (
            <button onClick={logoutHandler}>Logout</button>
          ) : (
            <button
              onClick={() => {
                dispatch(navActions.toggle());
                router.push("/login");
              }}
            >
              Login
            </button>
          )}
        </div>
        <div className="flex items-center justify-center my-1.5">
          <Link href="https://github.com/hemanthnvd/breakingbad">
            <a target="_blank">Github Repository</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
