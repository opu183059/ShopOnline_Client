import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../provider/Provider";
import OrderRow from "./OrderRow";

const Order = () => {
  const { user } = useContext(Authcontext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setOrder(result);
      });
  }, []);
  console.log(order);
  return (
    <div className="pt-20 min-h-screen">
      {order?.map((item) => (
        <OrderRow key={item._id} item={item}></OrderRow>
      ))}
    </div>
  );
};

export default Order;
