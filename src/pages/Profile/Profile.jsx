import React from "react";

import { Aside } from "../../components/Aside/Aside";


const Profile = () => {
  return (
    <div>

      <div className="grid-container ">
        <div>
          <Aside />
        </div>
        <section>
        <div className=" checkout-header m-1t">
            PROFILE PAGE
            </div>
           
          
        </section>
      </div>
    </div>
  );
};
export {Profile };