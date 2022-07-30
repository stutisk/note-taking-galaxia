import { createContext, useState, useContext } from "react";
import { useNotes } from "./NotesContext";
import { useEffect } from "react";
import axios from "axios";

const Trashcontext = createContext();
const useTrash = () => useContext(Trashcontext);

const TrashProvider = ({ children }) => {
  const [trash, setTrash] = useState([]);
  const { setNotes } = useNotes();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/trash`, {
          headers: { authorization: localStorage.getItem("token") },
        });
        setTrash(res.data.trash);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const AddtoTrashHandler = (note) => {
    (async () => {
      try {
        const response = await axios.post(
          `/api/notes/trash/${note._id}`,
          { note },
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );
        setTrash(response.data.trash.reverse());
        setNotes(response.data.notes);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const RestoreTrashHandler = (note) => {
    (async () => {
      try {
        const response = await axios.post(
          `/api/trash/restore/${note._id}`,
          { note },
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );
        setTrash(response.data.trash.reverse());
        setNotes(response.data.notes);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const deleteFromTrash = (note) => {
    (async () => {
      try {
        const res = await axios.delete(`/api/trash/delete/${note._id}`, {
          headers: { authorization: localStorage.getItem("token") },
        });

        setTrash(res.data.trash);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <Trashcontext.Provider
      value={{ trash, setTrash, setNotes, AddtoTrashHandler,RestoreTrashHandler,deleteFromTrash }}
    >
      {children}
    </Trashcontext.Provider>
  );
};

export { TrashProvider, useTrash };
