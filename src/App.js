// import React from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {

  state = {
    count: '0'
  }

  Handle = (digit) => {
    debugger
    const { count } = this.state
    this.setState({
      count: count ==='0' ? String(digit) : count + digit

    })
  }





  addDot = () => {
    const { count } = this.state
    if (count.indexOf('.') === -1) {
      this.setState({
        count: count + '.'
      })
    }
  }




  reset = () => {
    const { count } = this.state
    this.setState({
      count: '0'
    })
  }


  Calculate = () => {
    const { count } = this.state
    this.setState({
      count: eval(count)
    })
  }

  render() {
    return (
      <div><center>
        <input value={this.state.count} />
        <button onClick={() => this.reset()}>C</button><br/>
        <button onClick={() => this.Handle(1)}>1</button>
        <button onClick={() => this.Handle(2)}>2</button>
        <button onClick={() => this.Handle(3)}>3</button><br />
        <button onClick={() => this.Handle(4)}>4</button>
        <button onClick={() => this.Handle(5)}>5</button>
        <button onClick={() => this.Handle(6)}>6</button><br />
        <button onClick={() => this.Handle(7)}>7</button>
        <button onClick={() => this.Handle(8)}>8</button>
        <button onClick={() => this.Handle(9)}>9</button><br />
        <center> <button onClick={() => this.Handle(0)}>0</button><br /></center>
        <button onClick={() => this.Handle('+')}>+</button>
        <button onClick={() => this.Handle('-')}>-</button>
        <button onClick={() => this.Handle('*')}>*</button><br />
        <button onClick={() => this.Handle('/')}>/</button>
        <button onClick={() => this.Calculate()}>=</button>
        <button onClick={() => this.addDot('.')}>.</button><br />

      </center>
      </div >
    );
  }
}

export default App;
