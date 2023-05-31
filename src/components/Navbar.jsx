import React, { useState } from "react";
import logo from "../assets/logo.png"; // Import your logo image
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navIsShown, setNavIsShown] = useState(false);
  const [dropdownIsShown, setDropdownIsShown] = useState(false);

  const toggleNavIsShown = () => {
    setNavIsShown((navIsShown) => !navIsShown);
  };

  const toggleDropdownIsShown = () => {
    setDropdownIsShown((dropdownIsShown) => !dropdownIsShown);
  };

  return (
    <nav className="flex justify-between items-center h-20 px-4 absolute top-0 left-0 z-10 w-full text-white bg-black">
      <img src={logo} alt="Logo" className="h-10" />{" "}
      {/* Use the imported logo */}
      <ul className="hidden md:flex">
        <li>
          <Link to="/">Halaman Utama</Link>
        </li>
        <li
          className="relative"
          onMouseEnter={toggleDropdownIsShown}
          onMouseLeave={toggleDropdownIsShown}
        >
          <a href="/destinasi">Destinasi</a>
          {dropdownIsShown && (
            <ul className="absolute bg-white text-black mt-2 py-2 rounded shadow">
              <li>
                <Link to="/destinasi/gunung">Gunung</Link>
              </li>
              <li>
                <Link to="/destinasi/tempatwisata">Tempat Wisata</Link>
              </li>
              <li>
                <Link to="/destinasi/bangunanbersejarah">
                  Bangunan Bersejarah
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/aboutus">Tentang Kami</Link>
        </li>
        <li>
          <Link to="/galeri">Galeri</Link>
        </li>
        <li>
          <Link to="/team">Tim</Link>
        </li>
      </ul>
      <div className="hidden md:flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          {/* Search icon */}
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          {/* Account icon */}
        </svg>
      </div>
      {!navIsShown && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 md:hidden"
          onClick={toggleNavIsShown}
        >
          {/* Hamburger menu icon */}
        </svg>
      )}
      {navIsShown && (
        <div className="md:hidden absolute z-10 top-0 left-0 w-full bg-gray-100/90 text-black px-4 py-6">
          {/* Dropdown menu content */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
