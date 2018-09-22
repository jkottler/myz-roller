import React, { Component } from 'react';
import Die from './die';
import IncrementButton from './incrementButton';

const style = {
  fontSize: 'xx-large',
  verticalAlign: 'top'
}

class NumberSelector extends Component {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      this.props.onChange(this.props.name, e.target.value);
    };

    this.handleIncrement = e => {
      if (this.props.value < 8) {
        this.props.onChange(
          this.props.name,
          parseInt(this.props.value, 10) + 1
        );
      }
    };

    this.handleDecrement = e => {
      if (this.props.value > 0) {
        this.props.onChange(
          this.props.name,
          parseInt(this.props.value, 10) - 1
        );
      }
    };
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <IncrementButton
            label="-"
            type={this.props.name}
            onClick={this.handleDecrement}
          />
          <span style={style}>{this.props.value}</span>
          <IncrementButton
            label="+"
            type={this.props.name}
            onClick={this.handleIncrement}
          />
          <input
            placeholder={this.props.name}
            id={this.props.name}
            type="range"
            min="0"
            max="8"
            value={this.props.value}
            onChange={this.handleChange}
          />
          
        </div>
      </div>
    );
  }
}

export default NumberSelector;
