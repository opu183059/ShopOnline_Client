/* eslint-disable react/prop-types */
const OrderRow = ({ item }) => {
  const { productImage, productName, productPrice, createdAt } = item || {};
  return (
    <div className="max-w-sm shadow-lg hover:shadow-xl p-4 rounded-lg mx-auto bg-sky-50 hover:bg-sky-100 flex items-center justify-center gap-5 my-6 cursor-pointer">
      <div className="w-4/12">
        <img src={productImage} alt="" className="w-20 h-20 rounded-xl" />
      </div>
      <div className="w-8/12">
        <h1 className="font-semibold text-left italic">
          {productName} <br />
          Price: {productPrice} <br />
          Date: {createdAt.slice(0, 10)}
        </h1>
      </div>
    </div>
  );
};

export default OrderRow;
