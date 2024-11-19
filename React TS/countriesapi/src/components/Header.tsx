import { MoonIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex px-10 py-7 justify-between shadow-lg lg:px-20 dark:bg-black-100">
      <Link to="/">
        <div className="text-2xl font-extrabold dark:text-white">
          Where in the world?
        </div>
      </Link>
      <div className="flex items-center gap-2" onClick={toggleTheme}>
        <MoonIcon className="w-5 dark:text-white dark:fill-white" />
        <span className="whitespace-nowrap text-lg dark:text-white">Dark Mode</span>
      </div>
    </div>
  );
};

export default Header;
