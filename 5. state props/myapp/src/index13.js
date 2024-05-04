
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

class ClassComponent extends React.Component{
/*
  constructor(props){
    super(props);
    this.state = {
      name : "Andrew"
    }
  }
  */
  state = {
    name : "Andrew"
  }
  changeName = ()=>{
    this.setState({name:"Mathew"})
  }
  render(){
    return (<>
      <h1> Name : {this.state.name} </h1>
            <button onClick={this.changeName}>Change Name</button>
                 </>);
  }
}
function FunctionalComponent(){
 // here in functional compomnent we manage state with the help of hooks
 const [name,setName] = useState("Peter");
 const changeName = ()=>{
  setName("Jackson");
 } 
 return(<>
  <h1>NAME : {name}</h1>
  <button onClick={changeName}>Change Name</button>  
 </>); 
}
createRoot(document.getElementById("root")).render(<>
<ClassComponent/>
<FunctionalComponent/>
</>);

