import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="h-16 flex justify-between items-center">
      <div>
        <img src={logo} alt="Gemini" />
      </div>
      <div>
        <ul className="flex ">
          <li className="text-primary">
            <a href="/home">Home</a>
          </li>
          <li className="text-white">
            <a href="/store">Store</a>
          </li>
          <li className="text-white">
            <a href="/blog">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
