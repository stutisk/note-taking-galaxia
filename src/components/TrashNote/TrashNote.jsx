import React from "react";
import styles from "../Notes/Notes.module.css";
import { BsTrash, BsPin, RiDeleteBin2Line} from "../Icons";
// import { useArchieve } from "../../Context/ArchieveContext";
import { useTrash } from "../../Context/TrashContext";

const TrashNote = ({ note }) => {
 const {RestoreTrashHandler,deleteFromTrash} = useTrash();
  return (
    <>
      <div
        className={` m-t2 ${styles.note}`}
        style={{ backgroundColor: note.color }}
      >
        <div>
          <div className="flex-column-end">
            {" "}
            <BsPin size={25} className=" icon-color m-R" />
          </div>
        </div>
        <div className="m-1">{note.content}</div>
        <div className="flex-column-end">
          <BsTrash
            onClick={() => deleteFromTrash(note)}
            size={24}
            className=" icon-color pointer "
          />
          <RiDeleteBin2Line
            onClick={() => RestoreTrashHandler(note)}
            size={24}
            className=" icon-color pointer "
          />
        </div>
      </div>
    </>
  );
};
export { TrashNote };
