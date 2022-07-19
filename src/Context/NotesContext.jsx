import { NotesReducer } from "../Reducer/NotesReducer";
import { createContext, useReducer, useContext } from "react";


const Notescontext = createContext();
const useNotes = () => useContext(Notescontext);

const NotesProvider = ({ children }) => {


  const [state, dispatch] = useReducer(NotesReducer, {  });
  return (
    <Notescontext.Provider value={{ state, dispatch }}>
      {children}
    </Notescontext.Provider>
  );
};

export { NotesProvider, useNotes };
