import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Authcontext } from "../../provider/Provider";

const ProductDetails = () => {
  const { user } = useContext(Authcontext);
  const product = useLoaderData();
  const { _id, name, image, description, rating, price, available } =
    product || {};

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
    <div className="pb-10 pt-24 relative">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-start items-center gap-8">
        <div>
          <img
            src={image}
            alt={name}
            className="rounded-xl shadow-lg w-96 h-80"
          />
        </div>
        <div className="text-left">
          <h1 className="text-lg md:text-3xl mb-6 italic font-bold text-sky-700">
            {name}
          </h1>
          <p className="font-semibold text-xl">{description}</p>
          <p>Rating: {rating} out of 5</p>
          <p>Available: {available} in total</p>
          <p className="my-5">
            Price: <span className="text-2xl font-bold">${price}</span>
          </p>
          <button
            onClick={() => {
              Addtocart(_id);
            }}
            className="md:absolute md:bottom-10 text-sm md:text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
