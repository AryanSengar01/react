import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PropTypes from 'prop-types';

function FunctionalComponent(props){
  return (<>
    <h1>This is Functional Component</h1>
    <h3>Hello {props.name}, your age is {props.age}</h3>
  </>)
}
class ClassComponent extends React.Component{
  render(){
    return(<>
        <h1>This is Class Component</h1>
        <h3>Hello {this.props.name}, your age is {this.props.age}</h3>    
    </>);
  }
}
FunctionalComponent.propTypes={
  name : PropTypes.string.isRequired,
  age :  PropTypes.number.isRequired
}
ClassComponent.propTypes={
  name : PropTypes.string.isRequired,
  age :  PropTypes.number.isRequired
}

function MainComponent(){
  return(<>
        <FunctionalComponent name="Andrew" age="50"/>
        <FunctionalComponent name="Andrew" age={50}/>

        <ClassComponent name="Andrew" age="50"/>
        <ClassComponent name="Andrew" age={50}/>

  </>)
}
createRoot(document.getElementById('root')).render(<MainComponent />);

