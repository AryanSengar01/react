import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";

class Header extends React.Component{
    render() {
    return <>
        <h1>Header Component</h1>
        <p>This is Header component</p>
    </>;
    }
}
class Navbar extends React.Component{
    render() {
    return <>
        <h1>Navbar Component</h1>
        <p>This is Navbar component</p>
    </>;
    }
}
class Section extends React.Component{
    render() {
    return <>
        <h1>Section Component</h1>
        <p>This is Section component</p>
    </>;
    }
}
class Footer extends React.Component{
    render() {
    return <>
        <h1>Footer Component</h1>
        <p>This is Footer component</p>
    </>;
    }
}
class MainComponent extends React.Component{
    render() {
    return <>
        <Header/>
        <Navbar/>
        <Section/>
        <Footer/>
    </>;
    }
}
createRoot(document.getElementById("demo")).render(<MainComponent/>);
