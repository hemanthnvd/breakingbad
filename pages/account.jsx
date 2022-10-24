import Image from "next/image";
import { useAuth } from "../components/Auth/AuthContext";
import Navbar from "../components/Navbar";

const Account = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <div className="text-[#f0fff0] m-10">
        <h1 className="my-5 mx-2 text-2xl">MY ACCOUNT</h1>
        <div className="text-[#E6E6FA] grid grid-cols-2">
          <div className="mt-5">
            <h1 className="m-2">Name : {user.displayName}</h1>
            <h1 className="m-2">Email : {user.email}</h1>
            <h1 className="m-2">User ID : {user.uid}</h1>
          </div>
          {user.photoURL && (
            <div className="flex justify-center m-5">
              <img src={user.photoURL} alt="Profile Image" className="rounded-full"/>
            </div>
          )}
        </div>
      </div>
      <Image src={"/bblogo2.png"} alt="bblogo" width={1200} height={213} />
    </>
  );
};

export default Account;
