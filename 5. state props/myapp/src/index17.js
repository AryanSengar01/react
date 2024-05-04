
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function FunctionalComponent(){
  // here in functional compomnent we manage state with the help of hooks
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [obj,setObject] = useState({});

  function setDetails(){
    setObject({name,email,password})
  }
  
return(<>
  <center>
   <input 
             onChange={(event)=>{
                 setName(event.target.value)
             }}
             placeholder='Enter Name'
             /><br/><br/> 
 
   <input 
             onChange={(event)=>{
                 setEmail(event.target.value)
             }}
             placeholder='Enter Email'
            /><br/><br/> 
  
  <input 
             onChange={(event)=>{
                 setPassword(event.target.value)
             }}
             placeholder='Enter Password'
            /><br/><br/> 

  <input type="button" onClick={setDetails}/>
            <h1>{obj.name ? "Name : "+obj.name : ''}</h1>
            <h1>Email :{obj.email}</h1>
            <h1>Password :{obj.password}</h1>

    </center>
    </>);
  }

createRoot(document.getElementById("root")).render(<FunctionalComponent/>);