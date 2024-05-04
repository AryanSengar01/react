import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

function Header(){
    return <>
        <h1>Header Component</h1>
        <p>This is Header component</p>
    </>;
}
function Navbar(){
    return <>
        <h1>Navbar Component</h1>
        <p>This is Navbar component</p>
    </>;
}
function Section(){
    return <>
        <h1>Section Component</h1>
        <p>This is Section component</p>
    </>;
}
function Footer(){
    return <>
        <h1>Footer Component</h1>
        <p>This is Footer component</p>
    </>;
}

function MainComponent(){
    return <>
        <Header/>  
        <Navbar/>  
        <Section/>  
        <Footer/>  
    </>;
}
createRoot(document.getElementById("demo")).render(<MainComponent/>);
