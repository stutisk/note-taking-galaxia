import React from "react";
import {Navbar} from "../components/Navbar";
import Hero from  "../assests/hero.svg"
import styles from "./Home.module.css";
import { Link } from "react-router-dom";


const Home =() =>{
  return (
    <div>
    <Navbar />
    <main >
        <div className="hero">
            <img  src={Hero} className={styles.hero} alt="hero" />
          </div>
            <div className="head m-a">
                Start Your Journey !
            </div>
            <div className=" sub-head head m-a">
                Every big step start with small step.
                <br></br>
                Note your first idea and start your journey
            </div>
            <div className=" head m-a">
            <button className={styles.btn}><Link className={styles.btn} to="./MainPage">Join Now</Link></button>
            </div>    
        </main>
  </div>
  );
}
export {Home}