import { useContext, useState } from "react";
import { Authcontext } from "../../provider/Provider";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { user, role, logoutHandle } = useContext(Authcontext);
  const [isActive, setActive] = useState("false");
  const navigate = useNavigate();
  const handleToggle = () => {
    setActive(!isActive);
  };

  const Logout = () => {
    logoutHandle()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="text-gray-900 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 bold"></div>
        </div>
        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-sky-700 focus:border-sky-800"
        >
          {isActive ? "MENU ☰" : "Close 𐤕"}
        </button>
      </div>

      <div
        className={`z-10 font-semibold md:fixed flex flex-col justify-between overflow-x-hidden dark:bg-blue-950 bg-blue-500 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className="text-gray-950 dark:text-gray-50">
          <div>
            <div className="mt-3">
              <p className="uppercase text-white font-semibold cursor-default text-3xl mx-2 mb-2">
                Shop Online
              </p>

              <h4 className="mx-2 mt-2 cursor-default text-2xl">{role}</h4>
              <h4 className="mx-2 mt-2 cursor-default medium ">
                {user?.displayName}
              </h4>
              <p className="mx-2 mt-1 cursor-default text-sm medium text-gray-50">
                {user?.email}
              </p>
            </div>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/dashboard/order-list"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 pl-8  transition-colors duration-300 transform  hover:bg-blue-800 hover:text-gray-50 rounded-lg ${
                isActive ? "bg-blue-800  text-white" : " "
              }`
            }
          >
            Order List
          </NavLink>
          <NavLink
            to="/dashboard/all-users"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 pl-8  transition-colors duration-300 transform  hover:bg-blue-800 hover:text-gray-50 rounded-lg ${
                isActive ? "bg-blue-800  text-white" : " "
              }`
            }
          >
            All Customers
          </NavLink>
          <NavLink
            to="/dashboard/all-products"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800 pl-8 rounded-lg ${
                isActive ? "bg-blue-800  text-white" : " "
              }`
            }
          >
            All Products
          </NavLink>
          <NavLink
            to="/dashboard/add-product"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 mt-5 hover:text-gray-50 transition-colors duration-300 transform  hover:bg-blue-800 pl-8 rounded-lg ${
                isActive ? "bg-blue-800  text-white" : " "
              }`
            }
          >
            Add Products
          </NavLink>

          <Link
            to={"/"}
            className="flex w-full items-center px-4 py-2 mt-5  hover:bg-blue-800 text-black hover:text-gray-50 dark:text-gray-50 rounded-lg transition-colors duration-300 transform"
          >
            <span className="mx-4 medium">Home</span>
          </Link>
          <button
            onClick={Logout}
            className="flex w-full items-center px-4 py-2 mt-5 hover:bg-blue-800 text-black dark:text-gray-50 rounded-lg transition-colors duration-300 transform hover:text-gray-50"
          >
            <span className="mx-4 medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
