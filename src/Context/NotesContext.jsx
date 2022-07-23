
import { createContext, useState, useContext } from "react";


const Notescontext = createContext();
const useNotes = () => useContext(Notescontext);



const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [labels, setLabels] = useState(["Work", "Chill", "Home"]);

 
  
  return (
    <Notescontext.Provider value={{notes,setNotes,labels, setLabels}}>
      {children}
    </Notescontext.Provider>
  );
};

export { NotesProvider, useNotes };
