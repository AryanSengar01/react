import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

function FunctionalComponent(props){
  return (<>
    <h1>This is Functional Component</h1>
    <h3>Hello {props.obj.name}, your age is {props.obj.age}</h3>
  </>)
}
class ClassComponent extends React.Component{
  render(){
    return(<>
        <h1>This is Class Component</h1>
        <h3>Hello {this.props.obj.name}, your age is {this.props.obj.age}</h3>    
    </>);
  }
}
function MainComponent(){
  return(<>
        <FunctionalComponent obj={{name:"Andrew",age:50}}/>
        <ClassComponent obj={{name:"Andrew",age:50}}/>
  </>)
}
createRoot(document.getElementById('root')).render(<MainComponent />);

