
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

class ClassComponent extends React.Component{

  state = {
    name:"",
    email:"",
    password:"",
    userDetails:''
  }
  setData = ()=>{
    const name = this.state.name;
    const email = this.state.email;
    const password = this.state.password;
    const obj = {name,email,password};
    this.setState({userDetails:obj})
  }
  render(){
    return (<>
    <center>
      <form>
      <input type="text"
            onChange={(event)=>{
//                console.log(event.constructor.name)
                this.setState({name : event.target.value})
            }}
            placeholder='Enter Name'
            /> <br/><br/>
        <input type="email"
            onChange={(event)=>{
                this.setState({email : event.target.value})
            }}
            placeholder='Enter Email'
            /> <br/><br/>
        <input type="password"
            onChange={(event)=>{
                this.setState({password : event.target.value})
            }}
            placeholder='Enter Password'
            /> <br/><br/>
        <button onClick={this.setData}>Print Data</button>
      </form>
      <br/><br/>

            <h1>{this.state.userDetails ? "Name : "+this.state.userDetails.name : ''}</h1>
            <h1>{this.state.userDetails ? "Email : "+this.state.userDetails.email : ''}</h1>
            <h1>{this.state.userDetails ? "Password : "+this.state.userDetails.password : ''}</h1>

    </center>
    </>)
  }
}

createRoot(document.getElementById("root")).render(<ClassComponent/>);