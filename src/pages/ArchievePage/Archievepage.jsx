import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import { Aside } from "../../components/Aside/Aside";

const Archievepage = () => {
  return (
    <div>
      <div className="grid-container ">
        <div>
          <Aside />
        </div>
        <section>
          <div className=" checkout-header m-1t">ADD ARCHIEVED NOTES</div>
        </section>
      </div>
    </div>
  );
};
export { Archievepage };
