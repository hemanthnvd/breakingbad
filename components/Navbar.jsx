import Link from "next/link";
import { useSelector } from "react-redux";
import Navitem from "./Navitem";
import Dropdown from "./Dropdown";
const Navbar = () => {
  const hamState = useSelector((state) => state.nav.ham);
  return (
    <>
      <div></div>
      <div className="bg-[#101110]">
        <div className="flex justify-between" id="home">
          <Link legacyBehavior href="/" legacyBehavior>
            <img
              src="/bblogo3.png"
              alt="bblogo"
              className="p-2 md:p-0 h-16 ml-2 md:ml-5 cursor-pointer"
            />
          </Link>
          <Navitem />
        </div>
        {hamState && <Dropdown />}
      </div>
    </>
  );
};

export default Navbar;
