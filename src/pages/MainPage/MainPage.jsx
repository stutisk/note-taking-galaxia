import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import { Aside } from "../../components/Aside/Aside";
import { Notes } from "../../components/Notes/Notes";
import RichText from "../../components/RichText";


const MainPage = () => {
  return (
    <div>
      <Mainnav />
      <div className="grid-container  m-t5 m-l5">
        <div>
          <Aside />
        </div>
        <div className="flex-column-start">
          {/* <RichText /> */}
          <Notes />
          <Notes />
          <Notes />
        </div>
      </div>
    </div>
    )
  };
export { MainPage };