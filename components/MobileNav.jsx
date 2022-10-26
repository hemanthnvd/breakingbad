import { MenuIcon, HeartIcon, XIcon, SearchIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { inputActions } from "../store/inputState";
import { navActions } from "../store/navState";
import Input from "./Input";
const MobileNav = () => {
  const input = useSelector((state) => state.input.button);
  const hamState = useSelector((state) => state.nav.ham);
  const router = useRouter();
  const dispatch = useDispatch();
  const searchHandler = () => {
    dispatch(inputActions.toggle());
    dispatch(inputActions.liveText(""));
  };
  const favHandler = () => {
    router.push("/favourites");
  };
  const hamHandler = () => {
    dispatch(navActions.toggle());
  };
  return (
    <>
      <div className="flex md:hidden">
        {input && <Input />}
        {input && (
          <XIcon className="h-5 w-5 m-5 cursor-pointer text-[#FFFFFF]" onClick={searchHandler} />
        )}
        {input || (
          <SearchIcon
            className="h-5 w-5 m-5 cursor-pointer text-[#FFFFFF]"
            onClick={searchHandler}
          />
        )}
        {input || (
          <HeartIcon className="h-5 w-5 m-5 cursor-pointer text-[#FFFFFF]" onClick={favHandler} />
        )}
        {hamState || (
          <MenuIcon className="h-5 w-5 m-5 cursor-pointer text-[#FFFFFF]" onClick={hamHandler} />
        )}
        {hamState && (
          <XIcon className="h-5 w-5 m-5 cursor-pointer text-[#FFFFFF]" onClick={hamHandler} />
        )}
      </div>
    </>
  );
};

export default MobileNav;
