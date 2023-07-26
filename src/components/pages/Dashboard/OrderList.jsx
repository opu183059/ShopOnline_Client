import { useEffect, useState } from "react";
import OrderRow from "./OrderRow";

const OrderList = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://shop-online-server.vercel.app/orderedProduct")
      .then((res) => res.json())
      .then((res) => setOrder(res));
  }, []);
  return (
    <div>
      <h1 className="text-lg md:text-2xl mb-6 italic font-bold text-sky-700">
        All Orders
      </h1>

      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Serial</th>
              <th>Product</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {order?.map((orderData, index) => (
              <OrderRow
                key={orderData._id}
                orderData={orderData}
                index={index}
              ></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderList;
