import Swal from "sweetalert2";

const ProductsRow = ({ productData, index }) => {
  const { _id, name, image, rating, price, available } = productData || {};

  const deleteProduct = (id) => {
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
        fetch(`http://localhost:5000/productDelete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Product has been Removed", "success");
            }
          });
      }
    });
  };
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>
        <td>
          <div>
            <p className="font-bold">{name}</p>
          </div>
        </td>
        <td>{price}</td>
        <td>{available}</td>
        <td>{rating}</td>
        <td>
          <button
            onClick={() => {
              deleteProduct(_id);
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

export default ProductsRow;
