import React from "react";
import { Aside } from "../../components/Aside/Aside";
import { ArchieveNotes } from "../../components/ArchieveNotes/ArchieveNotes";
import { useArchieve } from "../../Context/ArchieveContext";
import { RiInboxArchiveLine } from "../../components/Icons";
const Archievepage = () => {
  const { archieveNote } = useArchieve();
  return (
    <div>
      <div className="grid-container ">
        <div>
          <Aside />
        </div>
        <section>
          <div className="m-t5">
            {archieveNote.length > 0 ? (
              archieveNote.map((item) => <ArchieveNotes note={item} />)
            ) : (
              <div className=" checkout-header m-1t">
                {" "}
                <RiInboxArchiveLine
                  size={100}
                  className="  pointer empty-state"
                />
                <h2 className="empty-state">Your archived notes appear here</h2>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};
export { Archievepage };
