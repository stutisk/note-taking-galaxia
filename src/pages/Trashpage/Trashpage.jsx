import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import { Aside } from "../../components/Aside/Aside";


const Trashpage = () => {
  return (
    <div>
      <div className="grid-container  m-t5 m-l5">
        <div>
          <Aside />
        </div>
        <section>
        <div className=" checkout-header m-1t">
             TRASH NOTES
            </div>
           
          
        </section>
      </div>
    </div>
  );
};
export { Trashpage};