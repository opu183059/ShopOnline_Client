/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
export const Authcontext = createContext(null);
const Provider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("/src/assets/data.json")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, []);
  const Data = {
    product,
  };
  return <Authcontext.Provider value={Data}>{children}</Authcontext.Provider>;
};

export default Provider;