import React, { useState } from "react";
import "../styles/component/Navbar.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__container">
        <div className="logo__container">
          <a href="/#" className="logo__title">
            <span>Built</span>
          </a>
        </div>
        <nav className="main__nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Browse Homes</a>
            </li>
            <li>
              <a href="/">Selling</a>
            </li>
          </ul>
        </nav>
        <div className="login">
          <ul>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/">
                <span>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="smallscreen__nav">
          <HiOutlineMenuAlt3
            color="#fff"
            fontSize={24}
            onClick={() => setMobile(true)}
          />
          {mobile && (
            <nav className="mobile__nav">
              <IoMdClose
                fontSize={24}
                style={{ color: "#fff" }}
                onClick={() => setMobile(false)}
                className="close"
              />
              <ul>
                <li onClick={() => setMobile(false)}>
                  <a href="/">Home</a>
                </li>
                <li onClick={() => setMobile(false)}>
                  <a href="/">Contact</a>
                </li>
                <li onClick={() => setMobile(false)}>
                  <a href="/">Blog</a>
                </li>
                <li onClick={() => setMobile(false)}>
                  <a href="/">Browse Homes</a>
                </li>
                <li onClick={() => setMobile(false)}>
                  <a href="/">Selling</a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
