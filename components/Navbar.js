import Link from "next/link";
import Navitem from "./Navitem";
import Input from "./Input";
import { useSelector } from "react-redux";
const Navbar = () => {
  const input = useSelector((state) => state.input);
  return (
    <>
      <div className="bg-red-500 flex justify-between">
        <Link href="/">
          <img src="/bblogo3.png" alt="bblogo" className="h-16 ml-5 cursor-pointer" />
        </Link>
        <Navitem />
      </div>
      {input && <Input />}
    </>
  );
};

export default Navbar;
