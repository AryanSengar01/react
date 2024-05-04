
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import jsonData from "./app.json";

function MyFun(){
  return(<>
    <table border='1'>
      <tr>
        <th>UserId</th>
        <th>Id</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
        {
          jsonData.map((obj)=>{
            return (<tr>
              <td>{obj.userId}</td>
              <td>{obj.id}</td>
              <td>{obj.title}</td>
              <td>{obj.body}</td>
            </tr>)
          })
        }
        {/* {
          jsonData.forEach(function(obj){
            <tr>
              <td>{obj.userId}</td>
              <td>{obj.id}</td>
              <td>{obj.title}</td>
              <td>{obj.body}</td>
            </tr>
          })
        } */}
    </table>
    </>);
}
createRoot(document.getElementById("root")).render(<MyFun/>);