import React from "react";
import { createRoot } from "react-dom/client";
import Registration from "./components/RegistrationComponent.js";
import Login from "./components/LoginComponent.js";
import './style.css';
function MainComponent(){
    return <div>
        <div id="demo1">
            <Registration/>
        </div>
        <div id="demo2">
            <Login/>
        </div>
    </div>;
}
createRoot(document.getElementById("demo")).render(<MainComponent/>);