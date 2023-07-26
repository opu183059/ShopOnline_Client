import Swal from "sweetalert2";

const UserRow = ({ userData, index }) => {
  const { email, name, _id } = userData || {};

  const DeleteUser = (id) => {
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
        fetch(`https://shop-online-server.vercel.app/deleteUser/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "User has been Removed", "success");
            }
          });
      }
    });
  };
  return (
    <div className="flex cursor-pointer gap-5 justify-between my-5 bg-sky-50 p-4 shadow-lg hover:shadow-xl rounded-lg">
      <p>{index + 1}</p>
      <h1>{name}</h1>
      <p>{email}</p>
      <button
        onClick={() => {
          DeleteUser(_id);
        }}
        className="px-3 py-1 bg-red-600 rounded-lg text-white"
      >
        Delete
      </button>
    </div>
  );
};

export default UserRow;
