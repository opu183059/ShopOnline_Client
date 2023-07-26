import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductsCart = ({ product }) => {
  const { id, name, image, description, rating, price, available } =
    product || {};
  return (
    <div className="group w-80 shadow-lg hover:shadow-xl rounded-xl p-5 cursor-default bg-sky-50/50 hover:bg-sky-50 mb-10">
      <div className="rounded-xl overflow-hidden h-52">
        <img
          src={image}
          alt=""
          className="group-hover:scale-110 transition-all duration-200 w-full h-full"
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold mt-2">{name}</h1>
        <p className="text-base text-gray-700">{description}</p>
        <p className="mt-2">
          Ratings: <span>{rating}</span> Out of 5
        </p>
        <p>Available: {available}</p>
        <p>
          Price:
          <span className="text-sky-900 font-semibold text-lg ml-1">
            ${price}
          </span>
        </p>
        <div className="flex justify-center gap-3 mt-2">
          <Link to={`/product-details/${id}`}>
            <button className="bg-sky-300/90 hover:bg-sky-700 transition-all duration-150 hover:text-white font-semibold px-3 py-1 rounded-lg">
              View Details
            </button>
          </Link>
          <button className="bg-sky-300/90 hover:bg-sky-700 transition-all duration-150 hover:text-white font-semibold px-3 py-1 rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
