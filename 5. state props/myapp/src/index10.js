
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

class ClassComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sum:0,
      a :10,
      b : 20,
      title : "Addition"
    }
  }
  add = ()=>{
    this.setState({sum : this.state.a+this.state.b});
  }
  
  render(){
    return (<>
      <h1> {this.state.title} : {this.state.sum} </h1>
            <button onClick={this.add}>Add</button>
               </>);
  }
}

createRoot(document.getElementById("root")).render(<ClassComponent/>);

