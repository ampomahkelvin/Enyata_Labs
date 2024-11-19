import { useState } from "react";

const Toggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <button
      onClick={handleToggle}
      className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-8 bg-white" : "translate-x-0 bg-green-500"
        }`}
      ></div>
    </button>
  );
};

export default Toggle;
