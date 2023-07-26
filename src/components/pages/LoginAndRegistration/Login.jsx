/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../provider/Provider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginWithEmailPass, user } = useContext(Authcontext);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    setErrorMessage("");
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginWithEmailPass(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        let errrormessage = error.code.split("auth/")[1];
        setErrorMessage(errrormessage);
        setSuccessMessage(" ");
      });
  };

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  return (
    <div className="pt-20">
      <div className="w-9/12 md:w-7/12 lg:w-6/12 mx-auto my-10">
        <div className="md:w-10/12 mx-auto w-full p-8 space-y-3 rounded-xl  bg-sky-50   text-gray-800">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleLogin}
            noValidate=""
            action=""
            className="text-left space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none     border-gray-600    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:  text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
            <div className="space-y-1 text-sm">
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2  appearance-none border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="password"
                  className="peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:  text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Password
                </label>
              </div>
            </div>

            <button className="block w-full rounded-md p-3 text-center text-white bg-sky-600">
              Log in
            </button>
            <div className="errorMessage">
              <p className="text-red-500">{errorMessage}</p>
              <p className="text-green-500">{successMessage}</p>
            </div>
          </form>
          <p className="text-xs text-center sm:px-6   ">
            Dont have an account?
            <Link
              to={"/registration"}
              className="text-sm ml-1 hover:text-blue-500 font-semibold underline"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
