import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../provider/Provider";

const Navbar = () => {
  const { user, logoutHandle } = useContext(Authcontext);
  const Logout = () => {
    logoutHandle()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 z-10 fixed shadow-md px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/product"}>Product</Link>
              </li>
              <li>
                <Link to={"/cart"}>Cart</Link>
              </li>
              <li>
                <Link to={"/order"}>Order</Link>
              </li>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="icon flex items-center">
            <img src="/src/assets/repliqLogo.png" alt="" className="w-9" />
            <div className="relative font-bold ml-2">
              <p className="absolute -top-5">SHOP</p>
              <p className="absolute -top-1 text-sky-800">online</p>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="font-semibold text-base flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
              }
            >
              Product
            </NavLink>

            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
              }
            >
              Cart
            </NavLink>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
              }
            >
              Order
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? " text-blue-700  block px-4 py-2 transition-all duration-300 rounded-md"
                  : "block px-4 py-2 text-gray-800  hover:text-blue-700 transition-all duration-300 rounded-md"
              }
            >
              Dashboard
            </NavLink>
          </div>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button
                onClick={Logout}
                className="text-sm md:text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
              >
                Log out
              </button>
            </>
          ) : (
            <Link
              to={"/login"}
              className="text-base font-normal px-3 py-1 bg-sky-500 hover:bg-sky-700 transition-all duration-300 rounded-md uppercase text-gray-50 "
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
