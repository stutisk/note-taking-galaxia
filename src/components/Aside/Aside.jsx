import React from "react";
import { Link } from "react-router-dom";
import styles from "./Aside.module.css";
import {BsArchive, BsTrash,MdOutlineLabel,VscHome } from "../Icons"

const Aside = () => {
  return (
    <>
    <div className={` m-t5 ${styles.asidebox}`}>
      <div className={` pointer ${styles.aside}`} >
        <Link to="/mainpage" className={` padding ${styles.routelink}`}>
          <VscHome size={25} className=" icon-color m-R" />
          Home
        </Link>
        <Link to="/label" className={` padding ${styles.routelink}`}>
          <MdOutlineLabel size={27} className="icon-color m-R" />
          Labels
        </Link>
        <Link to="/archieve" className={` padding ${styles.routelink}`}>
          <BsArchive size={22} className="icon-color m-R" />
          Archive
        </Link>
        <Link to="/trash" className={` padding ${styles.routelink}`}>
          <BsTrash size={23} className="icon-color m-R" />
          Trash
        </Link>
      
      </div>  
    </div>
    </>
  );
};

export { Aside };
