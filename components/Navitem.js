import {
  HeartIcon,
  HomeIcon,
  LinkIcon,
  LoginIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";

const Navitem = () => {
  const router = useRouter();
  const clickhandler = () => {
    router.push("/");
  };
  return (
    <div className="flex justify-end ">
      <HomeIcon className="h-5 w-5 m-5 cursor-pointer" onClick={clickhandler} />
      <SearchIcon className="h-5 w-5 m-5 cursor-pointer" />
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
