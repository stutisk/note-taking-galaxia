import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { useNotes } from "./NotesContext";
import axios from "axios";

const ArchieveContext = createContext({});

const useArchieve = () => useContext(ArchieveContext);

const ArchieveProvider = ({ children }) => {
  const [archieveNote, setArchieveNote] = useState([]);
  const { setNotes } = useNotes();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`/api/archives`, {
          headers: { authorization: localStorage.getItem("token") },
        });
        setArchieveNote(res.data.archives);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const AddtoArchiveHandler = (note) => {
    (async () => {
      try {
        const res = await axios.post(
          `/api/notes/archives/${note._id}`,
          {
            note,
          },
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );

        setArchieveNote(res.data.archives.reverse());
        setNotes(res.data.notes);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const retoreFromArchieve = (note) => {
    (async () => {
      try {
        const res = await axios.post(
          `/api/archives/restore/${note._id}`,
          {
            note,
          },
          {
            headers: { authorization: localStorage.getItem("token") },
          }
        );

        setArchieveNote(res.data.archives);
        setNotes(res.data.notes);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const deleteFromArchieve = (note) => {
    (async () => {
      try {
        const res = await axios.delete(`/api/archives/delete/${note._id}`, {
          headers: { authorization: localStorage.getItem("token") },
        });

        setArchieveNote(res.data.archives);
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <ArchieveContext.Provider
      value={{
        AddtoArchiveHandler,
        archieveNote,
        retoreFromArchieve,
        deleteFromArchieve,
      }}
    >
      {children}
    </ArchieveContext.Provider>
  );
};
export { ArchieveProvider, useArchieve };
