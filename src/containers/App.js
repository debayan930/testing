import React, { Component } from 'react';
import './App.css';
import 'tachyons';

class App extends Component {
  constructor(){
    super();
    this.state = {
      isLoggedIn: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn
    }));
  }

  render(){
    const { isLoggedIn } = this.state;
    return isLoggedIn?
    (
      <div className='tc'>
        <h1>Yay, you are logged in!</h1>
        <button
          onClick={this.handleClick}
        >
          Logout
        </button>
      </div>
    ):
    (
      <div className='tc'>
        <h1>Nooo, you are logged out!</h1>
        <button
          onClick={this.handleClick}
        >
          Login
        </button>
      </div>
    );
  }
}

export default App;
