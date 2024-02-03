import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState("shop");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          Furni<span>Store</span>
        </div>
        <div className="navbar-mobile-icon" onClick={toggleMenu}>
          ☰
        </div>
        <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`} ref={menuRef}>
          <li
            onClick={() => {
              setMenu("home");
              setIsMenuOpen(false);
            }}
          >
            <Link style={{ textDecoration: "none", color: "#0B3954" }} to="/">
              Home
            </Link>{" "}
            {menu === "home" ? <hr /> : <> </>}
          </li>
          <li
            onClick={() => {
              setMenu("sofa");
              setIsMenuOpen(false);
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#0B3954" }}
              to="sofa"
            >
              Sofa
            </Link>{" "}
            {menu === "sofa" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("chair");
              setIsMenuOpen(false);
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#0B3954" }}
              to="chair"
            >
              Chair
            </Link>{" "}
            {menu === "chair" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("table");
              setIsMenuOpen(false);
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#0B3954" }}
              to="table"
            >
              Table
            </Link>
            {menu === "table" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("frames");
              setIsMenuOpen(false);
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "#0b3954" }}
              to="frames"
            >
              Frames{menu === "frames" ? <hr /> : <></>}
            </Link>
          </li>
        </ul>

        <div className="navbar-user">
          <Link style={{ textDecoration: "none" }} to="/login">
            {" "}
            <button>Login</button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/cart">
            <img src="./bag.svg" alt="" />
          </Link>

          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
