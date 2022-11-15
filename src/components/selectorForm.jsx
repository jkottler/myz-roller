import React, { Component } from 'react';

import NumberSelector from './numberSelector';

const style = {
  marginLeft: '2px',
  marginRight: '2px',
  display: 'inline',
  paddingTop: '5px',
  paddingBottom: '5px'
}
class SelectorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      baseCount: this.props.baseCount || 0,
      skillCount: this.props.skillCount || 0,
      gearCount: this.props.gearCount || 0,
    };

    this.handleCountChange = (type, count) => {
      this.setState({
        [type + 'Count']: parseInt(count, 10),
      });
      props.handleDiceChange()
    };

    this.handleRoll = (e) => {
      this.props.handleRoll(this.state);
    };

    this.handlePush = (e) => {
      this.props.handlePush();
    };
  }

  rollEnabled() {
    return this.state.baseCount === 0 &&
      this.state.skillCount === 0 &&
      this.state.gearCount === 0
      ? 'disabled'
      : '';
  }

  render() {
    return (
      <form>
        <NumberSelector
          name="base"
          value={this.state.baseCount}
          onChange={this.handleCountChange}
        />
        <NumberSelector
          name="skill"
          value={this.state.skillCount}
          onChange={this.handleCountChange}
        />
        <NumberSelector
          name="gear"
          value={this.state.gearCount}
          onChange={this.handleCountChange}
        />
        <span>
          <span
            style={style}
            className={'waves-effect waves-light btn ' + this.rollEnabled()}
            onClick={this.handleRoll}>
            roll
          </span>
          <span
            style={style}
            className={
              'waves-effect waves-light btn ' + this.props.pushDisabled
            }
            onClick={this.handlePush}>
            push
          </span>
        </span>
      </form>
    );
  }
}

export default SelectorForm;
