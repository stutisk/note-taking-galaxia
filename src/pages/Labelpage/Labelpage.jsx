import React from "react";
import { Aside } from "../../components/Aside/Aside";
import styles from "../../components/Notes/Notes.module.css";
import { AiOutlineCloseCircle } from "../../components/Icons";
const Labelpage = () => {
  return (
    <div>
      <div className="grid-container ">
        <div>
          <Aside />
        </div>
        <section>
          <div className=" checkout-header m-1t">ADD LABELS</div>
          <ul className={` padding1  flex-column-start   ${styles.chipContainer}`}>
            <li className={` padding1  ${styles.chip}  `}>
              Work
              <AiOutlineCloseCircle
                size={26}
                className="icon-color ml-1 pointer"
              />
            </li>
            <li className={` padding1  ${styles.chip} `}>
              Worksucks
              <AiOutlineCloseCircle
                size={26}
                className="icon-color ml-1 pointer"
              />
            </li>
            <li className={` padding1  ${styles.chip}  `}>
              Work
              <AiOutlineCloseCircle
                size={26}
                className="icon-color ml-1 pointer"
              />
            </li>
            <li className={`   `}>
             
              <input  placeholder="New tag"  className={` padding1  ${styles.chip}  `}/>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
export { Labelpage };
