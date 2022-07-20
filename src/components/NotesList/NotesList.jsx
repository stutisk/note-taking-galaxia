import { Notes } from "../Notes/Notes";
import { useNotes } from "../../Context/NotesContext";
import {RiStickyNoteLine} from "../../components/Icons"
const NotesList = () => {
    const { notes } = useNotes();
  return (
    <>
    {/* {notes.length>0&&(notes.map((item) => <Notes note={item} />))} */}
    {notes.length > 0 ? (
              notes.map((item) => <Notes note={item} />)
            ) : (
              <div className=" checkout-header m-1t">
                {" "}
                <RiStickyNoteLine
                  size={100}
                  className="  pointer empty-state"
                />
                <h2 className="empty-state">Notes you add appear here</h2>
              </div>
            )}
   
    </>
  )
};

export { NotesList };
