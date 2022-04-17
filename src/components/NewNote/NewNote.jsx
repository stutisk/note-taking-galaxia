import React from "react";
import styles from "../Notes/Notes.module.css";

import {
  BsArchive,
  BsTrash,
  MdOutlineLabel,
  BsPin,
  VscSymbolColor,
} from "../Icons";

const NewNote = () => {
  return (
    <div>
     
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
        />
        
         <div className="flex-column-end ">
        <button className={`${styles.notefooter} `}>Save</button>

      </div>
      </div>
     
    </div>
  );
};
export { NewNote };
