
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

class ClassComponent extends React.Component{
  /*
  constructor(){
    super();
    console.log(this);
    console.log(typeof this);
    console.log(this.props);
    console.log(typeof this.props);
  }
  */
  constructor(props){
    super(props);
    console.log(this);
    console.log(typeof this);
    console.log(this.props);
    console.log(typeof this.props);

    this.state = {
      // name : "jackson",
      name : this.props.name,
      age : 45
    }
  }
  render(){
    return (<>
      <h1>Hello {this.state.name} your age is {this.state.age}</h1>
    </>);
  }
}

createRoot(document.getElementById("root")).render(<ClassComponent name="Andrew"/>);

