import React from "react";
import styles from "./Notes.module.css";
import {
  BsArchive,
  BsTrash,
  MdOutlineLabel,
  BsPin,
  VscSymbolColor,
} from "../Icons";


const Notes = ({ note }) => {
  
  return (
    <>
      <div className={styles.note}>
        <div>
          <div className="flex-column-end">
            {" "}
            <BsPin size={25} className=" icon-color m-R" />
          </div>
        </div>
        <div className="m-1">{note.content}</div>
        <div className="flex-column-start">
          <BsTrash  size={21} className=" icon-color pointer " />
          <BsArchive size={21} className=" icon-color pointer " />
          <MdOutlineLabel size={23} className=" icon-color pointer " />
          <VscSymbolColor size={23} className=" icon-color  pointer" />
        </div>
      </div>
    </>
  );
};
export { Notes };
