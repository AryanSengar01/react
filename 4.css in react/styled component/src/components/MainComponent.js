import styled from "styled-components";
import Style from "./Style.module.css";

const Paragraph = styled.p`
    background-color:red;
    color:white;
    font-size:50px;
`
function MainComponent(){
return <><Paragraph>Hello world My name is Aryan Sengar</Paragraph><span className={Style.red}>Experiment</span></>;
}

export default MainComponent;