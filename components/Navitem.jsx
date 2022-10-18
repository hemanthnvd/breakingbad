import {
  HeartIcon,
  HomeIcon,
  LinkIcon,
  LoginIcon,
  LogoutIcon,
  SearchIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { inputActions } from "../store/inputState";
import { useAuth } from "./Auth/AuthContext";

const Navitem = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.button);
  const { user, logout } = useAuth();
  const homeHandler = () => {
    router.push("/");
  };
  const loginHandler = () => {
    router.push("/login");
  };
  const logoutHandler = () => {
    logout();
    router.push("/login");
  };
  const searchHandler = () => {
    dispatch(inputActions.toggle());
    dispatch(inputActions.liveText(""));
  };
  const accountHandler = () => {
    router.push("/account");
  };
  const favHandler = () => {
    router.push("/favourites");
  };

  return (
    <div className="flex justify-end ">
      <HomeIcon className="h-5 w-5 m-5 cursor-pointer" onClick={homeHandler} />
      {input && <XIcon className="h-5 w-5 m-5 cursor-pointer" onClick={searchHandler} />}
      {input || <SearchIcon className="h-5 w-5 m-5 cursor-pointer" onClick={searchHandler} />}
      <HeartIcon className="h-5 w-5 m-5 cursor-pointer" onClick={favHandler} />
      <UserIcon className="h-5 w-5 m-5 cursor-pointer" onClick={accountHandler} />
      {user ? (
        <LogoutIcon className="h-5 w-5 m-5 cursor-pointer" onClick={logoutHandler} />
      ) : (
        <LoginIcon className="h-5 w-5 m-5 cursor-pointer" onClick={loginHandler} />
      )}
      <Link href="https://github.com/hemanthnvd/breakingbad">
        <a target="_blank">
          <LinkIcon className="h-5 w-5 m-5 cursor-pointer" />
        </a>
      </Link>
    </div>
  );
};

export default Navitem;
