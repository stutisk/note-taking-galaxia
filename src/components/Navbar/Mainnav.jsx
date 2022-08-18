import React from "react";
import { Link } from "react-router-dom";
// import styles from "../pages/Home/Home.module.css";
import styles from "./Mainnav.module.css";
import { FilterModal } from "../FilterModal/FilterModal";
import { useState } from "react";

const Mainnav = () => {
  const [show, setShow] = useState(false);
  var user = JSON.parse(localStorage.getItem("user"));

  
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
            <div className=" checkout-header m-1t">Hola, {user.name} 🙋‍♀️</div>
          </div>
          
          <button
            onClick={() => setShow((prev) => !prev)}
            className={styles.btn}
          >
            <Link className={styles.btn} to="./MainPage">
              Filter
            </Link>
          </button>
          {show && <FilterModal />}

         
        </nav>
      </div>
    </>
  );
};
export { Mainnav };
