import React from "react";

const Register = () => {
  return (
    <div>
      <div className="flex justify-center items-center bg-gradient-to-br from-blue-700 via-yellow-300 to-blue-700 m-auto min-h-screen">
        <div className="flex flex-col bg-indigo-200 w-5/6 sm:w-4/6 md:w-3/6 pt-10 md:pt-8 rounded-xl duration-500 ease-in-out transform hover:-translate-1 hover:scale-105">
          <img
            className="mx-auto w-32 my-1 md:my-2 2xl:my-3 pb-4 md:pb-6 rounded-full transition duration-500 ease-in-out transform hover:-translate-1 hover:scale-110"
            src="https://picsum.photos/200"
            alt=""
          />
          <input
            className="mx-auto h-auto w-4/6 my-1 md:my-2 2xl:my-3 p-3 text-center text-lg md:text-xl text-gray-200 placeholder-white font-bold focus:outline-none transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-300 hover:placeholder-red-500 transform hover:-translate-y-1 hover:scale-110"
            name="email"
            placeholder="email"
            type="email"
          />
          <input
            className="mx-auto h-auto w-4/6 my-1 md:my-2 2xl:my-3 p-3 text-center text-lg md:text-xl text-gray-200 placeholder-white font-bold focus:outline-none transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-300 hover:placeholder-red-500 transform hover:-translate-y-1 hover:scale-110"
            name="username"
            placeholder="username"
            type="username"
          />
          <input
            className="mx-auto h-auto w-4/6 my-1 md:my-2 2xl:my-3 p-3 text-center text-lg md:text-xl text-gray-200 placeholder-white font-bold focus:outline-none transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-300 hover:placeholder-red-500 transform hover:-translate-y-1 hover:scale-110 "
            name="password"
            placeholder="password"
            type="password"
          />
          <input
            className="mx-auto h-auto w-4/6 my-1 md:my-2 2xl:my-3 p-3 text-center text-lg md:text-xl text-gray-200 placeholder-white font-bold focus:outline-none transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-300 hover:placeholder-red-500 transform hover:-translate-y-1 hover:scale-110 "
            name="re-password"
            placeholder="password repeat"
            type="password"
          />
          <button className="mx-auto h-auto w-4/6 my-1 md:my-2 2xl:my-3 p-3 md:mb-5 2xl:mb-12 text-lg md:text-xl bg-blue-700 text-white transition duration-500 ease-in-out hover:bg-blue-600 transform hover:-translate-y-1 hover:scale-110">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
