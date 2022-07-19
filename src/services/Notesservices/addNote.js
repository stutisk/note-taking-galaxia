import axios from "axios";

const addNoteService = (note, token) => {
  return axios.post(
    "/api/notes",
    { note },
    { headers: { authorization: token } }
  );
};

export { addNoteService };