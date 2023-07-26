import Swal from "sweetalert2";

const AddProduct = () => {
  const addClass = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const image = form.image.value;
    const price = parseFloat(form.price.value);
    const available = parseInt(form.available.value);
    const rating = parseInt(form.rating.value);
    const description = form.description.value;

    const productData = { name, image, description, rating, price, available };

    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Product added",
            text: "PLease fill the form again to add more Product",
          });
        }
      });

    form.reset();
  };
  return (
    <div>
      <div className="w-9/12 md:w-7/12 lg:w-6/12 mx-auto my-10">
        <div className="md:w-10/12 mx-auto w-full p-8 space-y-3 rounded-xl  bg-indigo-50 ">
          <h1 className="text-2xl font-bold text-center">Registration</h1>

          <form
            onSubmit={addClass}
            noValidate=""
            action=""
            className="text-left space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none    border-gray-600  fo focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Product Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="description"
                id="description"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none    border-gray-600  fo focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="description"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="image"
                id="image"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none    border-gray-600  fo focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="image"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Image URL
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="rating"
                id="rating"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none    border-gray-600  fo focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="rating"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Rating
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="available"
                id="available"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none    border-gray-600  fo focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="available"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Available
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="price"
                id="price"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none    border-gray-600  fo focus:outline-none focus:ring-0 peer"
                placeholder=" "
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus: peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
            <button className="block w-full p-3 text-center rounded-md  text-white  bg-sky-600">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
