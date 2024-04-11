import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { MdOutlineSearch } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Blog</li>
      </ul>
      <div className="navbar-right">
        <MdOutlineSearch />

        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <FaShoppingBasket />
          </Link>
          <div className="dot"></div>
        </div>
        <CgProfile onClick={() => setShowLogin(true)} />
      </div>
    </div>
  );
};

export default Navbar;
