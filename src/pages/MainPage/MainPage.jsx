import React from "react";
import { Aside } from "../../components/Aside/Aside";
import { NewNote } from "../../components/NewNote/NewNote.jsx";
import { NotesList } from "../../components/NotesList/NotesList";

const MainPage = () => {
  return (
    <div>
     
      <div className="grid-container ">
        <div>
          <Aside />
        </div>
        <section>
            <div className="checkout-header "><NewNote /></div>
            <div className="flex-column-start m-1">
              <NotesList />     
            </div>
          
        </section>
      </div>
    </div>
  );
};
export { MainPage };
