import { Notes } from "../Notes/Notes";
import { useNotes } from "../../Context/NotesContext";
const NotesList = () => {
    const { notes } = useNotes();
  return (
    <>
    {notes.length>0&&(notes.map((item) => <Notes note={item} />))}
    </>
  )
};

export { NotesList };
