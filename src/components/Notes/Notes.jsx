import React from "react";
import styles from "./Notes.module.css";
import {

  BsTrash,
  MdOutlineLabel,

  VscSymbolColor,
  RiInboxArchiveLine,

  MdEditNote
} from "../Icons";
import { useArchieve } from "../../Context/ArchieveContext";
import { useModal } from "../../Context/ModalContext";
import { LabelsModal } from "../LabelsModal/LabelsModal";
const Notes = ({ note }) => {
  const { AddtoArchiveHandler } = useArchieve();
  const { setIsModal, setSelectednote } = useModal();

  const editHandler = () => {
    setSelectednote(note);
    setIsModal(true);
  };

  return (
    <>
      <div className={styles.note} >
        <div>
          <div className="flex-column-end">
            {" "}
          
            <MdEditNote onClick={editHandler} size={30} className=" icon-color pointer " />
          </div>
        </div>
        <div className="m-1">{note.content}</div>
        <div className="flex-column-end gap3">
          <BsTrash   size={24} className=" icon-color pointer m-R1 " />
          <RiInboxArchiveLine
          
            onClick={() => AddtoArchiveHandler(note)}
            size={24}
            className=" icon-color pointer m-R1 "
          />
           
          <MdOutlineLabel size={24} className=" icon-color pointer m-R1  " />
         
          <VscSymbolColor size={24} className=" icon-color  pointer m-R1" />
       
        </div>
      </div>
      {/* <LabelsModal/> */}
    </>
  );
};
export { Notes };
