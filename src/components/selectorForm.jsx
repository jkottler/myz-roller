import React, { Component } from 'react';

import NumberSelector from './numberSelector';

class SelectorForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      standardCount: this.props.standardCount || 0,
      skillCount: this.props.skillCount || 0,
      gearCount: this.props.gearCount || 0,
    };

    this.handleCountChange = (type, count) => {
      this.setState({
        [type + 'Count']: count,
      });
    };
  }

  render() {
    return (
      <div className="row">
        <div className="col s8">
          <form>
            <NumberSelector
              name="standard"
              value={this.state.standardCount}
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
          </form>
        </div>
      </div>
    );
  }
}

export default SelectorForm;
