import { useEffect, useState } from "react";
import ProductsRow from "./ProductsRow";

const AllProducts = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((res) => setProduct(res));
  }, [product]);
  return (
    <div>
      <h1 className="text-lg md:text-2xl mb-6 italic font-bold text-sky-700">
        All Products
      </h1>

      <div className="overflow-x-auto max-w-6xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Number</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available</th>
              <th>Rating</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {product?.map((productData, index) => (
              <ProductsRow
                key={productData._id}
                productData={productData}
                index={index}
              ></ProductsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllProducts;
