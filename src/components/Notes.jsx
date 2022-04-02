import React from "react";
import styles from "../pages/Home.module.css";
import {BsArchive, BsTrash,MdOutlineLabel,BsPin , VscSymbolColor } from "./Icons"

const Notes = () => {
  return (
    <>
      <div className={styles.note}>
        <div>
          <div className="flex-column-end">
            {" "}
            <BsPin size={25} className=" icon-color m-R" />
          </div>
        </div>
        <div className="m-1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </div>
        <div className="flex-column-start">
          <BsTrash size={21} className=" icon-color pointer " />
          <BsArchive size={21} className=" icon-color pointer " />
          <MdOutlineLabel size={23} className=" icon-color pointer " />
          <VscSymbolColor size={23} className=" icon-color  pointer" />
        </div>
      </div>
    </>
  );
};
export { Notes };
