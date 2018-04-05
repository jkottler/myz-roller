import React, { Component } from 'react';
import Die from './die';
// import { render } from 'react-dom';

const style = {
  fontSize: 'xx-large',
};

class NumberSelector extends Component {
  constructor(props) {
    super(props);

    this.handleChange = e => {
      this.props.onChange(this.props.name, e.target.value);
    };
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <Die className="col s2" value="6" type={this.props.name} />
          <div style={style} className="valign-wrapper col s1 right">
            {this.props.value}
          </div>
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
