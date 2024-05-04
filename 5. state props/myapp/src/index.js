import React,{ useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"
import Display from "./Display";

 class Form extends React.Component{
  
  state = {
    user:{},
    arr:[]
  }

  getData = (event)=>{
    this.setState({ user:{
      ...this.state.user,
      [event.target.name]:event.target.value
    }});
  }
  setData = (event)=>{
    this.setState({arr:[...this.state.arr,this.state.user]}); 
    var obj = {
      name : '',
      email:'',
      password:'',
      address:''
    }
    this.setState({user:obj});
    
  }

  render(){
  return(<>
    <div id="form">
    <center><h2>Fill Details</h2></center>
    <center>
      <input required value={this.state.user.name} type="text" placeholder="Enter Name" name="name" onChange={this.getData}/>
      <br/><br/>
      <input required type="email" placeholder="Enter Email" name="email" onChange={this.getData}/>
      <br/><br/>
      <input required type="password" placeholder="Enter Password" name="password" onChange={this.getData}/>
      <br/><br/>
      <input required type="text" placeholder="Enter Address" name="address" onChange={this.getData}/>
      <br/><br/>
      <input onClick={this.setData} type="submit" value="Submit"/>
    </center>
  </div>
  <div id="list">
      <Display data={this.state.arr}/>
  </div>
  </>
  );
}
}

createRoot(document.getElementById("root")).render(<Form/>);