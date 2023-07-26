import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../../provider/Provider";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const ProductsCart = ({ product }) => {
  const { _id, name, image, description, rating, price, available } =
    product || {};
  const { user } = useContext(Authcontext);

  const Addtocart = (id) => {
    if (user) {
      const cartData = {
        productID: id,
        productName: name,
        productImage: image,
        productPrice: price,
        userName: user?.displayName,
        userEmail: user?.email,
      };
      console.log(id);
      fetch("https://shop-online-server.vercel.app/addToCart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Added to cart",
              text: "You can see it in your cart",
            });
          }
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Cannot add to cart",
        text: "To add you have to login First",
      });
    }
  };
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
          <Link to={`/product-details/${_id}`}>
            <button className="bg-sky-300/90 hover:bg-sky-700 transition-all duration-150 hover:text-white font-semibold px-3 py-1 rounded-lg">
              View Details
            </button>
          </Link>
          <button
            onClick={() => {
              Addtocart(_id);
            }}
            className="bg-sky-300/90 hover:bg-sky-700 transition-all duration-150 hover:text-white font-semibold px-3 py-1 rounded-lg"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
