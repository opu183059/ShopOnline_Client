/* eslint-disable react/prop-types */
import Swal from "sweetalert2";

const CartRow = ({ item }) => {
  const { productID, productImage, productName, productPrice } = item || {};

  const removeCart = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/deleteCart/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <>
      <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={productImage} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <p className="font-bold">{productName}</p>
            </div>
          </div>
        </td>
        <td>{productPrice}</td>
        <td>
          <button
            onClick={() => {
              removeCart(productID);
            }}
            className="px-2 py-1 text-white bg-red-500 rounded-lg"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartRow;
