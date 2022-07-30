
import { createContext, useState, useContext,useReducer } from "react";
import { filterReducer } from "../utils/filterReducer";

const Notescontext = createContext();
const useNotes = () => useContext(Notescontext);



const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [labels, setLabels] = useState(["Work", "Chill", "Home"]);
  const [colors,setColors] = useState([""]);

  const initialFilterState = {
    tag: "all",
    priority: "all",
    sortByDate: "latest",
  };
 
  const [state, dispatch] = useReducer(filterReducer, initialFilterState)
  return (
    <Notescontext.Provider value={{notes,setNotes,labels, setLabels,colors,setColors,state, dispatch}}>
      {children}
    </Notescontext.Provider>
  );
};

export { NotesProvider, useNotes };
