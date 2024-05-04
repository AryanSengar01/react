import React from "react";

function LoginComponent(){
    return <> 
    <center>
        <h2>Login Form</h2>
        <form action="">
            <input type="email" placeholder="Enter Email"/>
            <br/><br/>
            <input type="password" placeholder="Enter Password"/> 
            <br/><br/>
            <input type="submit" value="Register"/>
        </form>
    </center>
    </>
}

export default LoginComponent;