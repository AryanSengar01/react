
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

class ClassComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name : "Andrew",
      age: 20
    }
  }
  changeName = ()=>{
    this.setState({name : "Mathew"});
  }
  changeAge = ()=>{
    this.setState({age : 26});
  }
  
  render(){
    return (<>
      <h1> name : {this.state.name} </h1>
            <button onClick={this.changeName}>Change Name</button>
           <h1> age : {this.state.age} </h1>
            <button onClick={this.changeAge}>Change age</button>
        </>);
  }
}

createRoot(document.getElementById("root")).render(<ClassComponent/>);

