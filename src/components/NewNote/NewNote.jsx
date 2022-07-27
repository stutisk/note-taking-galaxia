import React from "react";
import styles from "../Notes/Notes.module.css";
import { useRef, useEffect } from "react";
import axios from "axios";
import { MdOutlineLabel, VscSymbolColor } from "../Icons";
import { useNotes } from "../../Context/NotesContext";
import { useModal } from "../../Context/ModalContext";

import { Link } from "react-router-dom";
const NewNote = () => {
  const notesInput = useRef();
  const selectlabels = useRef();
  const selectPriority = useRef();
  const inputColor = useRef();
  const { setNotes, notes, labels } = useNotes();
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
                tags: selectlabels.current.value,
                createdAt: new Date().toLocaleTimeString([], {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                }),
                priority: selectPriority.current.value,
                color: inputColor.current.value,
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
              priority: selectPriority.current.value,
              color: inputColor.current.value,
              tags: selectlabels.current.value,
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

  useEffect(() => {
    isModal ? (notesInput.current.value = selectedNote.content) : <></>;
  });

  return (
    <div>
      {isModal ? (
        <div className={styles.modal}>
          <div className={styles.note}>
            <div className="flex-column-end">
              <select className=" icon-color pointer m-R1  " ref={selectlabels}>
                {labels.map((item) => {
                  return <option>{item}</option>;
                })}
              </select>
              <select
                className=" icon-color pointer m-R1  "
                ref={selectPriority}
              >
                <option value="low">low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <input
                type="color"
                name="card-color"
                id="card-color"
                className="pointer"
                ref={inputColor}
              />
            </div>
            <textarea
              className={styles.textarea}
              type="text"
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
            <h3 className="empty-state">Notes-{notes.length}</h3>
            <div className="flex-column-end">
              {labels.length > 0 ? (
                <select
                  className=" icon-color pointer m-R1  "
                  ref={selectlabels}
                >
                  {labels.map((item) => {
                    return <option>{item}</option>;
                  })}
                </select>
              ) : (
                <Link to="/label" className={` icon-color pointer m-R1  ${styles.routelink}`}>
               Add  Labels
                </Link>
              )}
              <select
                className=" icon-color pointer m-R1  "
                ref={selectPriority}
              >
                <option value="low">low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>

              <input
                type="color"
                name="card-color"
                id="card-color"
                className="pointer"
                ref={inputColor}
              />
            </div>
            <textarea
              className={`${styles.textarea}  `}
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
      )}
    </div>
  );
};
export { NewNote };
