import React from "react";
import { Link } from "react-router-dom";
// import styles from "../pages/Home/Home.module.css";
import styles from "./Mainnav.module.css";

const Mainnav = () => {
  return (
    <>
      <div className="container m-a">
        <nav className="nav-bar ">
          <div className="left-side  ">
            <Link to="/">
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
        <Link className={styles.btn} to="./Newnote">
          New note
        </Link>
      </button>
      <div className={styles.profiledetails}>
            <Link to="/">
              <img
                src="https://picsum.photos/id/1027/80/120"
                alt="Avatar "
                class="avatar size-large"
              />
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};
export { Mainnav };
