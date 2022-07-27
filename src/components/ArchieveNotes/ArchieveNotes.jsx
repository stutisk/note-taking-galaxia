import React from "react";
import styles from "../Notes/Notes.module.css";
import {
  
  BsTrash,

  BsPin,
 
  RiInboxUnarchiveLine
} from "../Icons";
import { useArchieve } from "../../Context/ArchieveContext";


const ArchieveNotes = ({ note }) => {
  const {retoreFromArchieve,deleteFromArchieve} = useArchieve();
  return (
    <>
      <div className={` m-t2 ${styles.note}`}   style={{ backgroundColor: note.color }} >
        <div>
          <div className="flex-column-end">
            {" "}
            <BsPin size={25} className=" icon-color m-R" />
          </div>
        </div>
        <div className="m-1">{note.content}</div>
        <div className="flex-column-end">
          <BsTrash onClick={() => deleteFromArchieve(note)}  size={24} className=" icon-color pointer " />
          <RiInboxUnarchiveLine onClick={()=> retoreFromArchieve(note)} size={24} className=" icon-color pointer " />
        
        </div>
      </div>
    </>
  );
};
export { ArchieveNotes };
