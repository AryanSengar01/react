
import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

function FunctionalComponent(){
    const [num,setNumber] = useState(0);
    const [title,setTitle] = useState("Counter");

    const increment = ()=>{
      setNumber(num+1);
    }
    const decrement = ()=>{
      if(num==0)
        setNumber(0);
      else
        setNumber(num-1);
    }
    const reset = ()=>{
      setNumber(0);
    }
    const changeTitle = ()=>{
      setTitle("Counting");
    }

return (<>
      <h1>{title} : {num} </h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={changeTitle}>changeTitle</button>

    </>);
  }

createRoot(document.getElementById("root")).render(<FunctionalComponent/>);

