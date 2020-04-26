import React from 'react';
import './Person.css' 
var person = (props) =>{ 
    return   (<div className="Person" >  
    <p onClick={props.click}>I am person name is {props.name} and age is{props.age} and dob is {props.dob}</p>
    <p>{props.attribute}</p>                
    </div>);
}

export default person;