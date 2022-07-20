import React from "react";
import styles from "../AuthPage/AuthPage.module.css";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import {useRef} from "react";
import axios  from "axios";
import { useAuth } from "../../Context/AuthContext";
import { useLocation,useNavigate } from "react-router-dom";

const Signup = () => {

  const useremail = useRef();
  const userpass = useRef();
  const userfirstname=useRef();
  const userlastname=useRef();
  const navigate = useNavigate();

  const { setLogin,setError } = useAuth();

  const signupHandler = async() => {
    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userfirstname.current.value,
        lastName: userlastname.current.value,
        email: useremail.current.value,
        password: userpass.current.value,
      });
      setLogin(true);
      console.log(response);
      const userDetail = {
        Email: response.data.createdUser.email,
        name:
          response.data.createdUser.firstName +
          " " +
          response.data.createdUser.lastName,
      };
      // saving the encodedToken in the localStorage
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(userDetail));
      navigate("/mainpage");
  
    } catch (error) {
      console.log(error);
      console.log(error.response.data.errors[0]);
      setError({ error: error.response.data.errors[0] });
    }
  
  }
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
                ref={userfirstname}
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Last Name*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="Sk"
                ref={userlastname}
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Email Address*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="Sk1234@gmail.com"
                ref={useremail}
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Password*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="*******"
                ref={userpass}
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Confirm Password*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="*******"
              />

              <button onClick={signupHandler}
              className={`m-5  btn-padding ${styles.loginBtn}`}>
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
