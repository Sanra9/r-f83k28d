import React, { Component } from 'react';
import './App.css';

class App extends Component {


  constructor(){
    super()
    this.state = {
      count: 0,
    }
  }

incrementNum = () => {
  console.log(this.state)
  this.setState((state) => ({ count: state.count + 1}))
}

decrementNum = () => {
  this.setState((state) => ({ count: state.count - 1}))
}

  render() {
    const { count } = this.state
    return (
      <div>
        <span className="value">{count}</span>
        <button id="inc" onClick={this.incrementNum}>Incrementa</button>
        <button id="inc" onClick={this.decrementNum}>Decrementa</button>
      </div>
    );
  }
}



export default App;
