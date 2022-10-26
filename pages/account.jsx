import Image from "next/image";
import { useAuth } from "../components/Auth/AuthContext";
import Navbar from "../components/Navbar";

const Account = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <div className="text-[#f0fff0] m-0.5 mt-10 md:m-10">
        <h1 className="my-5 md:mx-2 text-2xl">MY ACCOUNT</h1>
        <div className="text-[#E6E6FA] grid grid-cols-2">
          <div className="mt-5">
            <h1 className="md:m-2 break-words">Name : {user.displayName}</h1>
            <h1 className="md:m-2 break-words">Email : {user.email}</h1>
            <h1 className="md:m-2 break-words">User ID : {user.uid}</h1>
          </div>
          {user.photoURL && (
            <div className="flex justify-center m-5">
              <img src={user.photoURL} alt="Profile Image" className="rounded-full" />
            </div>
          )}
        </div>
      </div>
      <div className="mt-10 p-5">
        <Image src={"/bblogo2.png"} alt="bblogo" width={1200} height={213} />
      </div>
    </>
  );
};

export default Account;
