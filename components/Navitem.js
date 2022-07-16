import {
  HeartIcon,
  HomeIcon,
  LinkIcon,
  LoginIcon,
  SearchIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { inputActions } from "../store/inputState";

const Navitem = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const input = useSelector((state) => state.input.button);
  const clickHandler = () => {
    router.push("/");
  };
  const searchHandler = () => {
    dispatch(inputActions.toggle());
    dispatch(inputActions.liveText(""));
  };

  return (
    <div className="flex justify-end ">
      <HomeIcon className="h-5 w-5 m-5 cursor-pointer" onClick={clickHandler} />
      {input && <XIcon className="h-5 w-5 m-5 cursor-pointer" onClick={searchHandler} />}
      {input || <SearchIcon className="h-5 w-5 m-5 cursor-pointer" onClick={searchHandler} />}
      <HeartIcon className="h-5 w-5 m-5 cursor-pointer" />
      <UserIcon className="h-5 w-5 m-5 cursor-pointer" />
      <LoginIcon className="h-5 w-5 m-5 cursor-pointer" />
      <Link href="https://github.com/hemanthnvd/breakingbad">
        <a target="_blank">
          <LinkIcon className="h-5 w-5 m-5 cursor-pointer" />
        </a>
      </Link>
    </div>
  );
};

export default Navitem;
