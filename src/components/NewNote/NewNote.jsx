import React from "react";
import styles from "../Notes/Notes.module.css";
import { useRef, useEffect } from "react";
import axios from "axios";
import { BsPin, VscSymbolColor } from "../Icons";
import { useNotes } from "../../Context/NotesContext";
import { useModal } from "../../Context/ModalContext";
const NewNote = () => {
  const notesInput = useRef();

  const { setNotes, notes } = useNotes();
  const { selectedNote, isModal, setIsModal } = useModal();
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
          setNotes(response.data.notes.reverse());
          clearInput();
        } catch (error) {
          console.log(error);
        }
      })();
    }
  };
 
  const updateNote = () => {
   
    (async () => {
      try {
        const response = await axios.post(
          `/api/notes/${selectedNote._id}`,
          {
            note: {
              ...selectedNote,
              content: notesInput.current.value,
            },
          },
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );
        console.log();
        setNotes(response.data.notes.reverse());
        setIsModal(false);
       
      } catch (error) {
        console.log(error);
      }
    })();
  
  };
 

  return (
    <div>
      {isModal ? (
        <div className={styles.modal}>
          <div className={styles.note}>
           
            <textarea
              className={styles.textarea}
              type="text"
              // placeholder="Start writing..."
              rows="500"
              column="500"
              ref={notesInput}
              value={notesInput.content}
            />

            <div className="flex-column-end ">
              <button className={`${styles.notefooter} `} onClick={updateNote}>
                Update Note
              </button>
            </div>
          </div>
        </div>
      ) : (
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
              ref={notesInput}
              // value={myRef.current.value}
            />

            <div className="flex-column-end ">
              <button onClick={addNewNote} className={`${styles.notefooter} `}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export { NewNote };
