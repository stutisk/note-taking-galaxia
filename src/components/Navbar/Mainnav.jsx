import React from "react";
import { Link } from "react-router-dom";
// import styles from "../pages/Home/Home.module.css";
import styles from "./Mainnav.module.css";
import {MdOutlineLogout} from "../Icons"

const Mainnav = () => {
  return (
    <>
      <div className="container m-a">
        <nav className="nav-bar ">
          <div className="left-side  ">
            <Link to="/mainpage">
              {" "}
              GALA<span class="span">X!A</span>
            </Link>
          </div>
          <div className={styles.searchbar}>
            <form action="#">
              <input
                type="search"
                placeholder=" Search For Notes"
                name="search"
                   />
            </form>
          </div>
          <button className={styles.btn}>
        <Link className={styles.btn} to="./MainPage">
          New note
        </Link>
      </button>
      <div className={styles.profiledetails}>
            
            <MdOutlineLogout size={35} className=" icon-color  pointer"/>
          </div>
        </nav>
      </div>
    </>
  );
};
export { Mainnav };
