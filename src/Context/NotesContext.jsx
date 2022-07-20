
import { createContext, useState, useContext } from "react";


const Notescontext = createContext();
const useNotes = () => useContext(Notescontext);



const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  
  
  return (
    <Notescontext.Provider value={{notes,setNotes}}>
      {children}
    </Notescontext.Provider>
  );
};

export { NotesProvider, useNotes };
