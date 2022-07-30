import { Notes } from "../Notes/Notes";
import { useNotes } from "../../Context/NotesContext";
import { RiStickyNoteLine } from "../../components/Icons";
import { getFilteredList } from "../../utils/filterData";
const NotesList = () => {
  const { notes,state } = useNotes();
  const Finalnotes = getFilteredList(notes, state)
  return (
    <>
   
      {Finalnotes.length > 0 ? (
        Finalnotes.map((item) => <Notes note={item} />)
      ) : (
        <div className=" checkout-header m-1t">
          {" "}
          <RiStickyNoteLine size={100} className="  pointer empty-state" />
          <h2 className="empty-state">Notes you add appear here</h2>
        </div>
      )}
    </>
  );
};

export { NotesList };
