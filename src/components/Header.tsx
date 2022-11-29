import React, { useState } from "react";
import { Link } from "react-router-dom";

const navRoutes = ["Home", "Templates", "About"];
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className=" shadow-md bg-white z-50 fixed w-full top-0 flex justify-center">
        <header className="flex justify-between items-center p-5 py-2 w-full max-w-[1500px]">
          <Link to="/">
            <figure className="w-16">
              <img
                src="/images/icons/3rdi_logo.png"
                width={336}
                height={215}
                alt="3rdi_logo"
                className="w-full"
              />
            </figure>
          </Link>
          <div>
            <button
              onClick={toggleMenu}
              className="p-3 rounded-md border-2 sm:hidden flex flex-col items-center "
            >
              <div
                className={`bg-black h-1 mb-1 transform ${
                  isMenuOpen
                    ? "-rotate-45 translate-y-2 w-5"
                    : "rotate-0 translate-y-0 w-10"
                }`}
              />
              <div
                className={`bg-black h-1 mb-1 transform ${
                  isMenuOpen ? "rotate-45 w-5" : "rotate-0 w-10"
                }`}
              />
              <div
                className={`bg-black h-1 w-10 mb-1 ${
                  isMenuOpen ? "opacity-0 w-5" : "opacity-100"
                }`}
              />
            </button>
            <nav
              className={`absolute ${
                isMenuOpen ? "right-0" : "-right-full"
              } h-screen sm:h-auto w-screen sm:w-auto bg-white sm:right-0  sm:relative`}
            >
              <ul className="flex flex-col sm:flex-row items-center overflow-hidden h-auto">
                {navRoutes.map((navItem) => (
                  <Link
                    key={navItem}
                    to={`/${navItem === "Home" ? "" : navItem.toLowerCase()}`}
                    onClick={() => {
                      isMenuOpen && toggleMenu();
                    }}
                  >
                    <p className="mx-5 lg:mx-5 cursor-pointer p-3 hover:font-bold text-lg text-green-700">
                      {navItem}
                    </p>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
