/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const Authcontext = createContext(null);
const Provider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  // register
  const userRegistration = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // email login
  const loginWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   signout
  const logoutHandle = () => {
    localStorage.removeItem("accesss-token");
    return signOut(auth);
  };

  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (curentUser) => {
      setUser(curentUser);
      setLoading(false);
    });
    return () => {
      unsubscrive();
    };
  }, []);

  const Data = {
    user,
    loading,
    product,
    logoutHandle,
    loginWithEmailPass,
    userRegistration,
  };
  return <Authcontext.Provider value={Data}>{children}</Authcontext.Provider>;
};

export default Provider;
