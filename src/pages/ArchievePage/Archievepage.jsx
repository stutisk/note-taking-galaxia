import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import { Aside } from "../../components/Aside/Aside";


const Archievepage = () => {
  return (
    <div>
      <Mainnav />
      <div className="grid-container  m-t5 m-l5">
        <div>
          <Aside />
        </div>
        <section>
        <div className=" checkout-header m-1t">
            ADD ARCHIEVED NOTES
            </div>
           
          
        </section>
      </div>
    </div>
  );
};
export { Archievepage};