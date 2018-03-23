import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Die from './components/die';

function dice() {
  // return [
  //   <Die value="1" type="gear" />,
  //   <Die value="1" type="base" />,
  //   <Die value="1" type="skill" />,
  //   <Die value="2" type="gear" />,
  //   <Die value="6" type="gear" />,
  // ];
  let values = Array.from(new Array(6), (x, i) => i + 1);
  let types = ['base', 'gear', 'skill'];

  return values.map(v => types.map(t => <Die value={v} type={t} />));

  // return values.map(v => <Die value={v} type="gear" />);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MYZ Roller</h1>
        </header>
        <div className="App-intro">{dice()}</div>
      </div>
    );
  }
}

export default App;
