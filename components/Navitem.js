import { HeartIcon, HomeIcon, LinkIcon, LoginIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";
import {useRouter} from "next/router";

const Navitem = () => {
  const router = useRouter();
  const clickhandler =()=>{
      router.push("/");
  }
  return (
    <div className="flex justify-end ">
      <HomeIcon className="h-5 w-5 m-5 cursor-pointer" onClick={clickhandler}/>
      <SearchIcon className="h-5 w-5 m-5 cursor-pointer" />
      <HeartIcon className="h-5 w-5 m-5 cursor-pointer" />
      <UserIcon className="h-5 w-5 m-5 cursor-pointer" />
      <LoginIcon className="h-5 w-5 m-5 cursor-pointer" />
      <LinkIcon className="h-5 w-5 m-5 cursor-pointer" />
    </div>
  );
};

export default Navitem;
