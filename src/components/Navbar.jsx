import React from "react";
import { Link } from "react-router-dom";
import styles from "../pages/Home.module.css";

const Navbar=()=> {
  return (
    <>
      <div className="container m-a">
        <nav className="nav-bar ">
          <div className="left-side">
          <Link to="/"> GALA<span class="span">X!A</span></Link>

          </div>
          <div className="right-side">
            <ul>
              <li>
              <Link to="https://mail.google.com/mail/u/0/#inbox">Github<i className="fa fa-github"></i></Link>
              </li>
              <li>
                <Link to="/">Log In</Link>
              </li>
              <li>
                <Link  to="/"><i class="fa fa-moon-o" aria-hidden="true"></i></Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export {Navbar};