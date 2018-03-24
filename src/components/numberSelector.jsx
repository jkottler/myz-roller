import React, { Component } from 'react';
// import { render } from 'react-dom';

const buttonStyle = {
  width: '50px',
  height: '50px',
  margin: '3px',
  'border-radius': '5px',
  position: 'relative',
  background: 'lightBlue',
};

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

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
        <span>
          <div style={buttonStyle}>
            <div style={style2}>-</div>
          </div>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <div style={buttonStyle}>
            <div style={style2}>+</div>
          </div>
        </span>
      </div>
    );
  }
}

export default NumberSelector;
