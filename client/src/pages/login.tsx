import React from "react";

const Login = () => {
  return (
    <div>
      <div className="h-screen min-h-screen max-h-screen bg-gray-200 flex justify-center items-center p-4">
        <div className="bg-white  w-full p-4 rounded shadow-2xl text-gray-700 sm:w-96">
          <div className="flex justify-end">
            <img
              src="https://www.ns-logo.com/wp-content/uploads/2020/07/logo-icon-png-8.png"
              alt=""
              className="w-8"
            />
          </div>

          <p className="text-center pb-2 text-3xl">Welcome</p>

          <form action="#" className="my-5">
            <div className="pb-5 text-sm text-center">
              <p>
                You don´t have an account?{" "}
                <a href="#" className="text-blue-500">
                  Register now!
                </a>
              </p>
            </div>

            <div className="pb-5">
              <input
                type="text"
                className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                placeholder="Username or email"
              />
            </div>

            <div className="pb-5">
              <input
                type="text"
                className="block w-full p-2 rounded shadow bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:outline-none"
                placeholder="Password"
              />
            </div>

            <div className="pb-5">
              <input type="checkbox" />
              <label htmlFor="">Remember password</label>
            </div>

            <div className="pb-5 text-right text-sm">
              <a href="#" className="text-blue-500">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              className="bg-blue-500 p-2 w-full text-white rounded"
            >
              LogIn
            </button>
          </form>

          <hr />

          <div className="mt-8 relative flex justify-around">
            <div className="bg-blue-800 h-12 w-12 flex justify-center items-center rounded-full text-white">
              <i className="fab fa-facebook text-3xl"></i>
            </div>
            <div className="bg-blue-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
              <i className="fab fa-twitter text-3xl"></i>
            </div>

            <div className="bg-red-500 h-12 w-12 flex justify-center items-center rounded-full text-white">
              <i className="fab fa-google text-3xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 right-0">
        <button id="switchTheme">
          <i className="fab fa-codepen"></i>s
        </button>
      </div>
    </div>
  );
};

export default Login;
