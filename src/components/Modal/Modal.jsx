import React from "react";
import styles from "../Notes/Notes.module.css";
import { useRef } from "react";
import { BsPin, VscSymbolColor } from "../Icons";

const Modal = () => {
    const notesInput = useRef();
   
  return (
    <div className={styles.modal}>
      <div className={styles.note}>
        <div className="flex-column-end">
          <VscSymbolColor size={23} className=" icon-color  pointer" />
          <BsPin size={25} className=" icon-color pointer" />
        </div>
        <textarea
          className={styles.textarea}
          type="text"
          placeholder="Start writing..."
          rows="500"
          column="500"
          ref={notesInput}
        />

        <div className="flex-column-end ">
          <button onClick={addNewNote} className={`${styles.notefooter} `}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export { Modal };
