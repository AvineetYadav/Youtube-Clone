import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-5 py-1 mx-3 text-sm bg-gray-200 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
