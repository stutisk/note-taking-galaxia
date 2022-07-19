import React from "react";
import { Mainnav } from "../../components/Navbar/Mainnav";
import styles from "../AuthPage/AuthPage.module.css";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRef, useEffect } from "react";
import { useAuth } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const useremail = useRef();
  const userpass = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLogin, setLogin, Error, setError } = useAuth();

  const loginHandler = async () => {
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: useremail.current.value,
        password: userpass.current.value,
      });

      const userDetail = {
        Email: response.data.foundUser.email,
        name:
          response.data.foundUser.firstName +
          " " +
          response.data.foundUser.lastName,
      };
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("user", JSON.stringify(userDetail));
    } catch (error) {
      console.log(error);
      console.log(error.response.data.errors[0]);
      setError({ error: error.response.data.errors[0] });
    }
  };

  const guestLogin = () => {
    useremail.current.value = "stutiKumari@gmail.com";
    userpass.current.value = "stutiSk123";
    loginHandler();
    navigate("/mainpage");
    console.log(useremail.current.value);
  };

  return (
    <div>
      <section className={styles.loginSection}>
        <div className={` m-t5 ${styles.authContainer}`} id="container">
          <div className="form-container ">
            <form action="login.html" className={` m-t ${styles.form}`}>
              <h3 className={` m-5 ${styles.auntHeading}`}>
                Good To See You Again
              </h3>

              <label for="aunth-input" className="label m-1t">
                {" "}
                Email Address*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="email"
                placeholder="supriya"
                ref={useremail}
                id="username"
              />
              <label for="aunth-input" className="label m-1t">
                {" "}
                Password*
              </label>
              <input
                className={` m-5 input-padding ${styles.aunthInput}`}
                type="password"
                placeholder="supriya"
                ref={userpass}
                id="password"
              />

              <button
                onClick={loginHandler}
                className={`m-5  btn-padding ${styles.loginBtn}`}
              >
                Login
              </button>
              <button
                onClick={guestLogin}
                className={`m-5  btn-padding ${styles.loginBtnsec}`}
              >
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
              <div className="inline-block   text-base text-red-700  p-2">
                {Error}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export { Login };
