import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import styles from "../AuthPage/AuthPage.module.css";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
    
      <section className={styles.loginSection}>
        <div className={` m-t5 ${styles.authContainer}`} id="container">
          <div className="form-container ">
            <form action="login.html" className={` m-t ${styles.form}`}>
              <h3 className={` m-5 ${styles.auntHeading}`}>Good To See You Again</h3>

              <label for="aunth-input" className="label m-1t">
                {" "}
                Email Address*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="supriya"
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Password*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="supriya"
              />

              <button className={`m-5  btn-padding ${styles.loginBtn}`}>
                Login
              </button>
              <button className={`m-5  btn-padding ${styles.loginBtnsec}`}>
                Login As Guest
              </button>

              <Link
                to="/signup"
                className={`m-5  logout icon-color ${styles.externallink}`}
              >
                Don't have an account? Sign up !
                <span>
                  <AiFillCaretRight size={25} className="icon-color" />
                </span>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export { Login };
