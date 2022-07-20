import React from "react";
import { Aside } from "../../components/Aside/Aside";


const Trashpage = () => {
  return (
    <div>
      <div className="grid-container">
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