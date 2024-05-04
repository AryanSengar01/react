import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./App.css"
import Display from "./Display";

function Form(){
  const [user,setUser] = useState({});
  const [arr,setArray] = useState([]);
  
  function getData(event){
    setUser({
      ...user,
      [event.target.name]:event.target.value
    });
  }
  function setData(){
    setArray([...arr,user]); 
    var obj = {
      name : '',
      email:'',
      password:'',
      address:''
    }
    setUser(obj);
  }

  return(<>
    <div id="form">
    <center><h2>Fill Details</h2></center>
    <center>
      <input required type="text" value={user.name} placeholder="Enter Name" name="name" onChange={getData}/>
      <br/><br/>
      <input required type="email" value={user.email} placeholder="Enter Email" name="email" onChange={getData}/>
      <br/><br/>
      <input required type="password" value={user.password} placeholder="Enter Password" name="password" onChange={getData}/>
      <br/><br/>
      <input required type="text" value={user.address} placeholder="Enter Address" name="address" onChange={getData}/>
      <br/><br/>
      <input onClick={setData} type="submit" value="Submit"/>
    </center>
  </div>
  <div id="list">
      <Display data={arr}/>
  </div>
  </>
  );
}

createRoot(document.getElementById("root")).render(<Form/>);