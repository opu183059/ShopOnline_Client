import { useContext } from "react";
import { Authcontext } from "../../provider/Provider";
import ProductsCart from "../home/ProductsCart";

const Product = () => {
  const { product } = useContext(Authcontext);
  return (
    <div className="py-20">
      <h1 className="text-lg md:text-2xl mb-6 italic font-bold text-sky-700">
        Our top Products
      </h1>
      <div className="max-w-6xl mx-auto justify-items-center grid grid-cols-1 md:grid-cols-3">
        {product.map((product) => (
          <ProductsCart key={product.id} product={product}></ProductsCart>
        ))}
      </div>
    </div>
  );
};

export default Product;
