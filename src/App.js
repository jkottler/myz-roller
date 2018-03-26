import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import Random from 'random-js';

import './App.css';

import Die from './components/die';
import SelectorForm from './components/selectorForm';

// create a Mersenne Twister-19937 that is auto-seeded based on time and other random values
var engine = Random.engines.mt19937().autoSeed();
var distribution = Random.integer(1, 6);

function roll() {
  return distribution(engine);
}

function dice() {
  let values = Array.from(new Array(3), () => 0);
  let types = ['base', 'gear', 'skill'];

  return values.map(v => types.map(t => <Die value={roll()} type={t} />));
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to MYZ Roller</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col s3">
              <SelectorForm />
            </div>
            <div className="col s9">{dice()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
