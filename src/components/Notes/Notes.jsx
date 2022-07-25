import React from "react";
import styles from "./Notes.module.css";
import {
  BsTrash,
  MdOutlineLabel,
  VscSymbolColor,
  RiInboxArchiveLine,
  MdEditNote,
} from "../Icons";
import { useArchieve } from "../../Context/ArchieveContext";
import { useModal } from "../../Context/ModalContext";
import { useNotes } from "../../Context/NotesContext";
const Notes = ({ note }) => {
  const { AddtoArchiveHandler } = useArchieve();
  const { setIsModal, setSelectednote } = useModal();
  const { labels, setLabels } = useNotes();
  console.log(labels);
  const editHandler = () => {
    setSelectednote(note);
    setIsModal(true);
  };

  return (
    <>
      <div className={styles.notes}>
        <div>
          <div className="flex-column-end">
            {" "}
            <MdEditNote
              onClick={editHandler}
              size={30}
              className=" icon-color pointer  m-R1 "
            />
            <RiInboxArchiveLine
              onClick={() => AddtoArchiveHandler(note)}
              size={24}
              className=" icon-color pointer m-R1 "
            />
            <BsTrash size={24} className=" icon-color pointer m-R1 " />
           
          </div>
        </div>
        <div className="m-1">{note.content}</div>
       
        <div className="flex-column-end gap3">
        {/* <div className=" icon-color pointer m-R1">{note.createdAt}</div> */}
          <select className=" icon-color pointer m-R1  ">
            <option value="volvo">Labels</option>
            {labels.map((item) => {
              return <option>{item}</option>;
            })}
          </select>
          <select className=" icon-color pointer m-R1  ">
            <option value="Priority">Priority</option>
            <option value="low">low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          <VscSymbolColor size={24} className=" icon-color  pointer m-R1" />
        </div>
      </div>
    </>
  );
};
export { Notes };
