import Link from "next/link";
import Navitem from "./Navitem";
const Navbar = () => {
  return (
    <>
      <div className="bg-[#101110] flex justify-between">
        <Link href="/">
          <img src="/bblogo3.png" alt="bblogo" className="h-16 ml-5 cursor-pointer" />
        </Link>
        <Navitem />
      </div>
    </>
  );
};

export default Navbar;
