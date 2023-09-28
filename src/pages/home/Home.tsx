import React from "react";
import maglogo from "../../images/mag-logo.png"
import "./Home.css";
import { SignInButton } from "../../components/SignInButton";

const Home = () => {


    return(
        <div>
            <div className="welcomeText">
            Welcome to MAG Aerospace's Chat Application
            </div>
            <div className="logoContainer">
            <img className="logo" alt="Mag Logo" src={maglogo}/>
            </div>
            {/* <div className="mt-5">
                < SignInButton />
            </div> */}
        </div>
    );
}

export default Home;