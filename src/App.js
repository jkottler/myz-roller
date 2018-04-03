import 'materialize-css/dist/css/materialize.min.css';
import React, { Component } from 'react';
import logo from './d6-6-glow.svg';
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

  // return values.map(v => types.map(t => <Die value={roll()} type={t} />));
  return [
    <Die value={1} type="base" />,
    <Die value={1} type="gear" />,
    <Die value={1} type="skill" />,
    <Die value={2} type="base" />,
    <Die value={3} type="gear" />,
    <Die value={4} type="skill" />,
    <Die value={6} type="base" />,
    <Die value={6} type="gear" />,
    <Die value={6} type="skill" />,
  ];
}

class App extends Component {
  constructor(props) {
    super(props);

    this.handleRoll = e => {
      dice(e.standardCount, e.skillCount, e.gearCount);
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <h1 className="App-title">Welcome to MYZ Roller</h1>
          </div>
        </header>

        <main>
          <div className="container">
            <div className="row">
              <div className="col s3">
                <SelectorForm
                  baseCount={this.state.baseCount}
                  skillCount={this.state.skillCount}
                  gearCount={this.state.gearCount}
                  handleRoll={this.handleRoll}
                />
              </div>
              <div className="col s9">{this.state.dice}</div>
            </div>
          </div>
        </main>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                Icons from{' '}
                <a
                  href="http://game-icons.net"
                  rel="noopener noreferrer"
                  target="_blank">
                  game-icons.net
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
