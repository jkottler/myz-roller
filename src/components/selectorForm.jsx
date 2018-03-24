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
  }

  render() {
    return (
      <div>
        <form>
          <NumberSelector label="standard" />
          <NumberSelector label="skill" />
          <NumberSelector label="gear" />
        </form>
      </div>
    );
  }
}

export default SelectorForm;
