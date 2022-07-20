import React from "react";
import styles from "../Notes/Notes.module.css";
import { useRef } from "react";
import axios from "axios";
import { BsPin, VscSymbolColor } from "../Icons";
import { useNotes } from "../../Context/NotesContext";
const NewNote = () => {
  const notesInput = useRef();
  const { setNotes } = useNotes();

  const clearInput = () => (notesInput.current.value = "");

  const addNewNote = () => {
    if (localStorage.getItem("token")) {
      (async () => {
        try {
          const response = await axios.post(
            `/api/notes`,
            {
              note: {
                content: notesInput.current.value,
              },
            },
            {
              headers: { authorization: localStorage.getItem("token") },
            }
          );
          console.log(response.data);
          setNotes(response.data.notes);
          clearInput();
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };

  return (
    <div>
      <div className={styles.note}>
        {/* <ColorModal/> */}
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
export { NewNote };
