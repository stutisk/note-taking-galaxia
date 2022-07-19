import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import { Aside } from "../../components/Aside/Aside";
import { Notes } from "../../components/Notes/Notes";
import { NewNote } from "../../components/NewNote/NewNote.jsx";

const MainPage = () => {
  return (
    <div>
     
      <div className="grid-container ">
        <div>
          <Aside />
        </div>
        <section>
            <div className="flex-column-start"><NewNote /></div>
            <div className="flex-column-start m-1">
              <Notes />     
            </div>
          
        </section>
      </div>
    </div>
  );
};
export { MainPage };
