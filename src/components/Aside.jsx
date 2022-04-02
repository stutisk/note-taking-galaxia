import React from "react";
import { Link } from "react-router-dom";
import styles from "../pages/Home.module.css";
import {BsArchive, BsTrash,MdOutlineLabel,VscHome , CgProfile } from "./Icons"

const Aside = () => {
  return (
    <>
    <div className={styles.asidebox}>
      <div className={` pointer ${styles.aside}`} >
        <Link to="#" className={` padding ${styles.routelink}`}>
          <VscHome size={25} className=" icon-color m-R" />
          Home
        </Link>
        <Link to="/" className={` padding ${styles.routelink}`}>
          <MdOutlineLabel size={27} className="icon-color m-R" />
          Labels
        </Link>
        <Link to="/" className={` padding ${styles.routelink}`}>
          <BsArchive size={22} className="icon-color m-R" />
          Archive
        </Link>
        <Link to="/" className={` padding ${styles.routelink}`}>
          <BsTrash size={23} className="icon-color m-R" />
          Trash
        </Link>
        <Link to="/" className={` padding ${styles.routelink}`}>
          <CgProfile size={23} className="icon-color m-R" />
          Profile
        </Link>
      </div>  
    </div>
    </>
  );
};

export { Aside };
