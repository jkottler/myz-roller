import React, { Component } from 'react';
// import { render } from 'react-dom';

class NumberSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || 0,
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="label">{this.props.label}</div>
        <div className="row">
          <div className="col s8">
            <a className="waves-effect waves-light btn col s1 ">-</a>
            <div className="input-field col s6 col s4 offset-s1">
              <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </div>
            <a className="waves-effect waves-light btn col s1 offset-s7">+</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NumberSelector;
