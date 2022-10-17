import { useAuth } from "../components/Auth/AuthContext";
import Navbar from "../components/Navbar";

const Account = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <h1>My account</h1>
      <h1>{user.email}</h1>
      <h1>{user.uid}</h1>
      <h1>{user.displayName}</h1>
    </>
  );
};

export default Account;
