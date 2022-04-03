import React from "react";
import { Aside } from "../../components/Aside/Aside";
import RichText from "../../components/RichText";
import { Mainnav } from "../../components/Navbar/Mainnav";

import { Link } from "react-router-dom";
import styles from "../../components/Navbar/Mainnav.module.css";

const Newnote = () => {
    return(
        <div>
       
        <RichText/>
        <button className={styles.btn}>
        <Link className={styles.btn} to="./Newnote">
          ADD
        </Link>
      </button>
    </div>
    )
};
export {Newnote};