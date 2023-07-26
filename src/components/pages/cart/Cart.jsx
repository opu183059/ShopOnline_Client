import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../provider/Provider";
import CartRow from "./CartRow";

const Cart = () => {
  const { user } = useContext(Authcontext);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myCart/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setCart(result);
      });
  }, [cart]);
  console.log(cart);
  return (
    <div className="pt-20 min-h-screen">
      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item) => (
              <CartRow key={item._id} item={item}></CartRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
