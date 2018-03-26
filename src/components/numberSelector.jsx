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
      <div class="input-field">
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

  //   render() {
  //     return (
  //       <div>
  //         <div className="row">
  //           <div class="input-field col s6">
  //             <input
  //               placeholder="Standard"
  //               id="standard"
  //               type="text"
  //               class="validate"
  //             />
  //             <label for="standard">Standard Dice</label>
  //           </div>
  //           <div className="col s8">
  //             <a className="waves-effect waves-light btn col s1 ">-</a>
  //             <div className="input-field col s6 col s4 offset-s1">
  //               <input
  //                 type="text"
  //                 value={this.state.value}
  //                 onChange={this.handleChange}
  //               />
  //             </div>
  //             <a className="waves-effect waves-light btn col s1 offset-s7">+</a>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
}

export default NumberSelector;
