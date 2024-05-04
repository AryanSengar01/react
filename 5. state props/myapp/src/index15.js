
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
  render(){
    return (<>
      <h1> Name : {this.state.name} </h1>
            <input 
            onChange={(event)=>{
                this.setState({name : event.target.value})
            }}
            placeholder='Enter name'
            />
                 </>);
  }
}
function FunctionalComponent(){
 // here in functional compomnent we manage state with the help of hooks
 const [name,setName] = useState("Peter");
 return(<>
  <h1>NAME : {name}</h1>
  <input 
            onChange={(event)=>{
                setName(event.target.value)
            }}
            placeholder='Enter name'
            />  
 </>); 
}
createRoot(document.getElementById("root")).render(<>
<ClassComponent/>
<FunctionalComponent/>
</>);

