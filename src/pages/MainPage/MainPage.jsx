import React from "react";
import { Mainnav } from "../../components/Mainnav";
import { Aside } from "../../components/Aside";
import { Notes } from "../../components/Notes";

const MainPage = () => {
  return (
    <div>
      <Mainnav />
      <div className="grid-container  m-t5 m-l5">
        <div>
          <Aside />
        </div>
        <div className="flex-column-start">
          <Notes />
          <Notes />
          <Notes />
        </div>
      </div>
    </div>
  );
};
export { MainPage };
