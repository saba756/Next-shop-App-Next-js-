import React from "react";

const Input = ({ type, required, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      required={required}
      onChange={onChange}
      className="border rounded px-3 py-1 w-80"
    />
  );
};

export default Input;
