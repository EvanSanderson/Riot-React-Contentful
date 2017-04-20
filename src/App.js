import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
   super();
   this.state = {
     items: []
   }
 }
  render() {
    return (
      <div className="App">
        <p> my react container </p>
      </div>
    );
  }
}

export default App;
