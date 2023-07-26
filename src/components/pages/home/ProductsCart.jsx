const ProductsCart = () => {
  return (
    <div className="group w-80 shadow-lg hover:shadow-xl rounded-xl p-5 bg-sky-50 mb-10">
      <div className="rounded-xl overflow-hidden">
        <img
          src="https://discoverpilgrim.com/cdn/shop/files/Shop-The-Look-Banner-EDP-1000x700_1.jpg?v=1689947339&width=1000"
          alt=""
          className="group-hover:scale-110 transition-all duration-200"
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold mt-2">Card Title</h1>
        <p className="text-base text-gray-700">
          Product Description Lorem ipsum dolor sit amet consectetur,
          adipisicing elit.
        </p>
        <p className="mt-2"> Ratings: 5 Out of 5</p>
        <p>
          Price:{" "}
          <span className="text-sky-900 font-semibold text-lg">$500</span>
        </p>
        <div className="flex justify-center gap-3 mt-2">
          <button className="bg-sky-300/90 hover:bg-sky-700 transition-all duration-150 hover:text-white font-semibold px-3 py-1 rounded-lg">
            View Details
          </button>
          <button className="bg-sky-300/90 hover:bg-sky-700 transition-all duration-150 hover:text-white font-semibold px-3 py-1 rounded-lg">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCart;
