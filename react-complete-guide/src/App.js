import React, { Component } from 'react';
import logo from './logo.svg';
import Person from './person/person' 
import './App.css';

class App extends Component {

  state =  {

    persons : [
      {name :'MAX', age :28},
      {name : 'debashish' ,age :29},
      {name : 'Puspanjali' ,age :29}


    ],

    dob : 90,
    showPerson:false
  }

  
  submitNameHandler = (newName ) =>  {
    this.setState({
      persons:[
        {name :newName, age :28},
        {name : newName ,age :4},
        {name : 'land' ,age :29}

      ]
    })
  }


  toggleHandler = () =>  {
    const showPerson=this.state.showPerson;
    this.setState({showPerson:!showPerson})
      
  }
  render() {

    let persons=null

    if(this.state.showPerson===true){

      persons = (
       <div>
        <Person  name={this.state.persons[0].name} age={this.state.persons[0].age} dob={this.state.dob}>
        </Person>
        <Person click={this.submitNameHandler.bind(this,'DHruv')} name={this.state.persons[1].name} age={this.state.persons[1].age} dob={this.state.dob}> 
        my dob is :02/07/1984</Person>
        <Person name={this.state.persons[2].name}  age={this.state.persons[2].age} > 
        </Person>
        </div>
       
      );
    }


    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.toggleHandler} name='submit'>Swich Name</button> 
       
      {persons}

      </div>
      
    );
  }
}

export default App;
