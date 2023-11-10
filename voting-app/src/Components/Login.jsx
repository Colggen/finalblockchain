import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Welcome to our final project</h1>
            <p className="welcome-submessage">Voting website made by Artyom, Maksim, Yelkhan and Bota</p>
            <button className="login-button" onClick = {props.connectWallet}>Login Metamask</button>
            <div className="moving-background"></div>

        </div>
        
    )
}

export default Login;