import React from "react";

const Button = ({ name }) => {
  return (
    <button className="px-5 py-2 mx-2 mt-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 ease-in-out w-auto mx-auto sm:mx-2 sm:mt-2">
      {name}
    </button>
  );
};

export default Button;
