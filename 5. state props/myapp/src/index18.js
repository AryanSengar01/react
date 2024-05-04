
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function FunctionalComponent(){
var userDetails = {};
const [user,setUser] = useState({});
const showDetails=()=>{
  setUser(userDetails)
}
return(<>
        <input 
        name="username"
        onChange={(event)=>{
          userDetails = {...userDetails,[event.target.name]:event.target.value}
        }}
        placeholder='Enter username'
        />
        <input 
        name="email"
        onChange={(event)=>{
          userDetails = {...userDetails,[event.target.name]:event.target.value}
        }}
        placeholder='Enter Email'
        />
        <input 
        name="password"
        onChange={(event)=>{
          userDetails = {...userDetails,[event.target.name]:event.target.value}
        }}
        placeholder='Enter Password'
        />
        <input 
          type='submit'
          onClick={showDetails}
        />
        {user.username}
    </>);
  }

createRoot(document.getElementById("root")).render(<FunctionalComponent/>);