import React, { Component } from 'react';

import NumberSelector from './numberSelector';

const style = {
  'margin-left': '4px',
  'margin-right': '4px',
};
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
        [type + 'Count']: count,
      });
    };

    this.handleRoll = e => {
      this.props.handleRoll(this.state);
    };

    this.handlePush = e => {
      this.props.handlePush();
    };
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
          <a
            style={style}
            className="waves-effect waves-light btn"
            onClick={this.handleRoll}>
            roll
          </a>
          <a
            style={style}
            className={
              'waves-effect waves-light btn ' + this.props.pushDisabled
            }
            onClick={this.handlePush}>
            push
          </a>
        </span>
      </form>
    );
  }
}

export default SelectorForm;
