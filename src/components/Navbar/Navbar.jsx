import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container m-a">
        <nav className="nav-bar ">
          <div className="left-side">
            <Link to="/mainpage">
              {" "}
              GALA<span class="span">X!A</span>
            </Link>
          </div>
          <div className="right-side">
            <ul>
              <li>
                <Link to="/">Log In</Link>
              </li>
              <li>
                <Link to="/">
                  <i class="fa fa-moon-o" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export { Navbar };
