import LogoImage from "@/assets/logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import CustomButton from "@/components/CustomButton";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  function toggleMenu() {
    setIsMenuOpen((status) => !status);
  }

  useEffect(() => {
    function handleClickOutside(event : MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    }

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex justify-between relative">
      <div className="flex gap-2 items-center">
        <img src={LogoImage} alt="" />
        <h1 className="text-lg text-white">Findtrend</h1>
      </div>

      {isAboveMediumScreens ? (
        <div className="flex items-center">
          <ul className="flex flex-row gap-10">
            <li className="text-white gap-2">About</li>
            <li className="text-white gap-2">How it works</li>
            <li className="text-white gap-2">Pricing</li>
            <li className="text-white gap-2">Solution</li>
            <li className="text-white gap-2">Features</li>
          </ul>
        </div>
      ) : (
        <button onClick={toggleMenu}>
          {isMenuOpen ? (
            <XMarkIcon className="h-8 w-6 text-white" />
          ) : (
            <Bars2Icon className="h-6 w-6 text-white" />
          )}
        </button>
      )}

      {isAboveMediumScreens && (
        <div className="flex items-center gap-3">
          <h1 className="text-white">Login</h1>
          <CustomButton bgColor="bg-white" textColor="text-black">
            Register
          </CustomButton>
        </div>
      )}

      {!isAboveMediumScreens && isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>
      )}

      {/* Mobile Menu */}
      {!isAboveMediumScreens && isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-0 left-0 w-full h-full bg-black opacity-100 flex flex-col items-center z-50"
          style={{ animation: "slideDown 0.3s ease-out" }}
        >
          {/* Logo */}
          <div className="flex justify-between w-full items-center">
            <img src={LogoImage} alt="Logo" className="" />
            <button onClick={toggleMenu} className="text-white">
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>

          <div className="w-full bg-black justify-items-center pb-9 ">
            <ul className="flex flex-col gap-8 text-white bg-black text-xl mt-20 justify-centerr">
              <li className="text-white gap-2">About</li>
              <li className="text-white gap-2">How it works</li>
              <li className="text-white gap-2">Pricing</li>
              <li className="text-white gap-2">Solution</li>
              <li className="text-white gap-2">Features</li>
              <CustomButton bgColor="bg-white" textColor="text-black">
                Register
              </CustomButton>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
