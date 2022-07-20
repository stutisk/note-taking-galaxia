import React from "react";
import styles from "./Notes.module.css";
import {
  BsArchive,
  BsTrash,
  MdOutlineLabel,
  BsPin,
  VscSymbolColor,
  RiInboxArchiveLine,
  RiInboxUnarchiveLine
} from "../Icons";
import { useArchieve } from "../../Context/ArchieveContext";


const Notes = ({ note }) => {
  const {AddtoArchiveHandler} = useArchieve();
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
          <BsTrash  size={24} className=" icon-color pointer " />
          <RiInboxArchiveLine onClick={()=> AddtoArchiveHandler(note)} size={24} className=" icon-color pointer " />
          <MdOutlineLabel size={24} className=" icon-color pointer " />
          <VscSymbolColor size={24} className=" icon-color  pointer" />
        </div>
      </div>
    </>
  );
};
export { Notes };
