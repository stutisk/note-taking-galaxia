import React from "react";
import { Aside } from "../../components/Aside/Aside";
import { TrashNote } from "../../components/TrashNote/TrashNote";
import { useTrash } from "../../Context/TrashContext";
import {RiDeleteBin5Line} from "../../components/Icons"
const Trashpage = () => {
  const {trash}= useTrash();
  return (
    <div>
      <div className="grid-container">
        <div>
          <Aside />
        </div>
        <section>
          <div className="m-t5">
            {trash.length > 0 ? (
              trash.map((item) => <TrashNote note={item} />)
            ) : (
              <div className=" checkout-header m-1t">
                {" "}
                <RiDeleteBin5Line
                  size={100}
                  className="  pointer empty-state"
                />
                <h2 className="empty-state">Your Trashed notes appear here</h2>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
export { Trashpage };
