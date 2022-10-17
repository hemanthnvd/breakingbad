import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "./AuthContext";

const ProtectedRoute = (props) => {
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [router, user]);

  return <>{user ? props.children : null}</>;
};

export default ProtectedRoute;
