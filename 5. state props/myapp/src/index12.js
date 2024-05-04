
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

class ClassComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    a: 10,
    b:20,
    c:0
    }
  }
 swap = ()=>{
    var temp =  this.state.a;
    this.state.a = this.state.b;
    this.state.b = temp;
    
    this.setState({a:this.state.a});
    this.setState({b:this.state.b});
  }

  render(){
    return (<>
      <h1> a : {this.state.a}  b:{this.state.b} </h1>
            <button onClick={this.swap}>swap</button>
                 </>);
  }
}

createRoot(document.getElementById("root")).render(<ClassComponent/>);

