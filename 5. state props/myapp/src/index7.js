
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function FunctionalComponent(props){
  return(<>
      <h1>Book : {props.data.title}</h1>
      <h2>Author : {props.data.author}</h2>
  </>);
}
class ClassComponent extends React.Component{
  render(){
    return (<>
      <h1>Book : {this.props.data.title}</h1>
      <h2>Author : {this.props.data.author}</h2>    
    </>);
  }
}

const bookDetails = {
  title : "Programming in C",
  author : "Dennis Ritchie"
}
function MainComponent(){
  return (<React.Fragment>
      <FunctionalComponent data = {bookDetails}/>
      <ClassComponent data={bookDetails}/>
  </React.Fragment>)
}
createRoot(document.getElementById("root")).render(<MainComponent/>);

/*
props = {
  data : {
    title: ,
    author : 
  }
}
*/