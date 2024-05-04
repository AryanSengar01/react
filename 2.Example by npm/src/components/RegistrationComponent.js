import React from "react";

function RegistrationComponent(){
    return <> 
    <center>
        <h2>Registration Form</h2>
        <form action="">
            <input type="text" placeholder="Enter Username"/> 
            <br/><br/>
            <input type="email" placeholder="Enter Email"/>
            <br/><br/>
            <input type="password" placeholder="Enter Password"/> 
            <br/><br/>
            <input type="submit" value="Register"/>
        </form>
    </center>
    </>
}

export default RegistrationComponent;