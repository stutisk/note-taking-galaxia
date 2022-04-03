import React from "react";
import {Navbar} from "../../components/Navbar/Navbar";
import Hero from  "../../assests/hero.svg"
import styles from "../Home/Home.module.css";
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
            <button className={` padding1 ${styles.btn1}`}><Link className={`padding1 ${styles.btn1}`} to="./MainPage">Join Now</Link></button>
            </div>    
        </main>
  </div>
  );
}
export {Home}