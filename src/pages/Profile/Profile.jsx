import React from "react";
import styles from "../../components/Notes/Notes.module.css";
import { Aside } from "../../components/Aside/Aside";

const Profile = () => {
  var user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div className="grid-container ">
        <div>
          <Aside />
        </div>
        <section>
       
            <h1 className=" checkout-header m-1t">Hello, {user.name} 🙋‍♀️</h1>
         
        </section>
      </div>
    </div>
  );
};
export { Profile };
