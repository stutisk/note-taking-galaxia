import React from "react";
import { Aside } from "../../components/Aside/Aside";
import styles from "../../components/Notes/Notes.module.css";
import { AiOutlineCloseCircle } from "../../components/Icons";
import { useRef } from "react";
import { useNotes } from "../../Context/NotesContext";
const Labelpage = () => {
  const { labels, setLabels } = useNotes();

  const notesInput = useRef();
  const clearInput = () => (notesInput.current.value = "");
  let AddedLabel = "";

  const createLabelHandler = () => {
    AddedLabel = notesInput.current.value;
    AddedLabel !== ""
      ? setLabels([...labels, AddedLabel])
      : setLabels([...labels]);
    clearInput();
  };

  const closeHandler = (deleteLabels) => {
   
    setLabels(labels.filter((_, index) => index !== deleteLabels));
  };

  return (
    <div>
      <div className="grid-container ">
        <div>
          <Aside />
        </div>
        <section>
          <div className=" checkout-header m-1t">ADD LABELS</div>
          <ul
            className={` padding1  flex-column-start   ${styles.chipContainer}`}
          >
            {labels.map((item, index) => {
              return (
                <li className={` padding1  ${styles.chip}  `}>
                  {item}
                  <AiOutlineCloseCircle
                    onClick={() => closeHandler(index)}
                    size={26}
                    className="icon-color ml-1 pointer"
                  />
                </li>
              );
            })}
            <input
              placeholder=" Add New tag..."
              className={` padding1  ${styles.chip}  `}
              ref={notesInput}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  createLabelHandler();
                 console.log(...labels)
                }
              }}
            />
          </ul>
        </section>
      </div>
    </div>
  );
};
export { Labelpage };
