import React from "react";
import Header from "./HeaderComponent.js";
import Navbar from "./NavbarComponent.js";
import Section from "./SectionComponent.js";
import Footer from "./FooterComponent.js";

class MainComponent extends React.Component{
    render(){
        return <>
            <Header/>
            <Navbar/>
            <Section/>
            <Footer/>
        </>
    }
}

export default MainComponent;