import React, { Component } from 'react';
// import { render } from 'react-dom';

class NumberSelector extends Component {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      this.props.onChange(this.props.name, e.target.value);
    };
  }

  render() {
    return (
      <div className="input-field">
        <div>{this.props.name}</div>
        <input
          placeholder={this.props.name}
          id={this.props.name}
          type="number"
          min="0"
          max="20"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default NumberSelector;
