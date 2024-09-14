import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { GiBookCover } from "react-icons/gi";

const ROUTES = ["Home", "About", "Categories", "Contact"];

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative flex px-8 py-6 justify-between items-center bg-neutral-900">
      <div className="flex items-center gap-2">
        <GiBookCover className="font-extrabold text-teal-300" />
        <h1 className="text-teal-300 font-bold">Tech Blog</h1>
      </div>

      {/* Routes list for larger screens */}
      <div className="hidden sm:flex">
        <ul className="flex space-x-2 text-teal-300">
          {ROUTES.map((route, index) => (
            <li key={index}>{route}</li>
          ))}
        </ul>
      </div>

      {/* Menu icon for small screens */}
      <div className="sm:hidden flex items-center">
        <AiOutlineMenu
          onClick={toggleMenu}
          className="cursor-pointer text-teal-300"
        />
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 right-8 bg-white shadow-lg rounded-lg z-50">
          <ul className="flex flex-col space-y-2 p-4">
            {ROUTES.map((route, index) => (
              <li key={index} className="cursor-pointer">
                {route}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hero;
