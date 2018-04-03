import React, { Component } from 'react';

import NumberSelector from './numberSelector';

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
  }

  render() {
    return (
      <div className="row">
        <div className="col s8">
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
            <a
              className="waves-effect waves-light btn"
              onClick={this.handleRoll}>
              roll
            </a>
          </form>
        </div>
      </div>
    );
  }
}

export default SelectorForm;
