import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import styles from "../AuthPage/AuthPage.module.css";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      {/* <Mainnav /> */}
      <section className={styles.loginSection}>
        <div className={` m-t3 ${styles.authContainer}`} id="container">
          <div className="form-container ">
            <form action="login.html" className={` m-1t ${styles.form}`}>
              <h3 className={` m-5 ${styles.auntHeading}`}>Get Started With Your Account</h3>

              <label for="aunth-input" className="label m-1t">
                {" "}
                First Name*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="text"
                placeholder="supriya"
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Last Name*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="Sk"
              />
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
              <label for="aunth-input" className="label m-1t">
                {" "}
                Confirm Password*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="supriya"
              />

              <button className={`m-5  btn-padding ${styles.loginBtn}`}>
                CREATE AN ACCOUNT
              </button>

              <Link
                to="/login"
                className={`m-5  logout icon-color ${styles.externallink}`}
              >
                Already have an account? Log in!
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
export { Signup };
