import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import { Aside } from "../../components/Aside/Aside";
import { Notes } from "../../components/Notes/Notes";
import { NewNote } from "../../components/NewNote/NewNote.jsx";

const MainPage = () => {
  return (
    <div>
      <Mainnav />
      <div className="grid-container  m-t5 m-l5">
        <div>
          <Aside />
        </div>
        <section>
            <div className="flex-column-start"><NewNote /></div>
            <div className="flex-column-start m-1">
              <Notes />
              <Notes />
              <Notes />
              <Notes />
              <Notes />
            </div>
          
        </section>
      </div>
    </div>
  );
};
export { MainPage };
