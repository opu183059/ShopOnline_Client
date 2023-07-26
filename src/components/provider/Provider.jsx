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
  const [role, setRole] = useState(null);

  // get user role
  const getRoleFromServer = async (email) => {
    const response = await fetch(
      `https://shop-online-server.vercel.app/usermail/${email}`
    );
    const userFromDB = await response.json();
    return userFromDB?.role;
  };
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
    setRole("");
    return signOut(auth);
  };

  useEffect(() => {
    fetch("https://shop-online-server.vercel.app/allProducts")
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
  }, [user]);

  useEffect(() => {
    if (user) {
      getRoleFromServer(user.email).then((res) => setRole(res));
    }
  }, [user]);

  const Data = {
    user,
    loading,
    product,
    logoutHandle,
    loginWithEmailPass,
    userRegistration,
    role,
    setRole,
  };
  return <Authcontext.Provider value={Data}>{children}</Authcontext.Provider>;
};

export default Provider;
