
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

class ClassComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count:0,
      title : "Counter"
    }
  }
  increment = ()=>{
    this.setState({count : this.state.count+1});
  }
  decrement = ()=>{
    this.setState({count : this.state.count-1});
  }
  reset = ()=>{
    this.setState({count : 0});
  }
  changeTitle = ()=>{
    this.setState({title:"Counting"});
  }
  incrementBythree = ()=>{
    this.setState({count : this.state.count+3});
  }
  dynamicIncrement = (n)=>{
    this.setState({count : this.state.count+n});
  }
  
  render(){
    return (<>
      <h1> {this.state.title} : {this.state.count} </h1>
            <button onClick={this.increment}>Increment</button>
            <button onClick={()=>{this.incrementBythree()}}>Increment by Three</button>
            <button onClick={()=>{this.dynamicIncrement(100)}}>Dynamic Increment</button>
           
            <button onClick={()=>{this.decrement()}}>Decrement</button>
            <button onClick={this.reset}>Reset</button>
          <button onClick={this.changeTitle}>change title</button>
    </>);
  }
}

createRoot(document.getElementById("root")).render(<ClassComponent/>);

