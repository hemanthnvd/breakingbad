import { createContext, useContext } from "react";
import { auth } from "../../../src/firebase-config";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };
  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
