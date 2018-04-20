import React from 'react';

function IncrementButton(props) {
  return (
    <div
      onClick={props.onClick}
      style={{
        ...style,
        background: types[props.type].background,
      }}>
      <div style={{ ...style2, color: types[props.type].foreground }}>
        {props.label}
      </div>
    </div>
  );
}

const style2 = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const style = {
  width: '50px',
  height: '50px',
  margin: '3px',
  borderRadius: '5px',
  position: 'relative',
  display: 'inline-block',
  fontFamily: "'Arial Black', Arial-BoldMT, roboto, 'sans-serif'",
  fontSize: '3rem',
};

const types = {
  base: {
    background: 'yellow',
    foreground: 'black',
  },
  skill: {
    background: 'green',
    foreground: 'white',
  },
  gear: {
    background: 'black',
    foreground: 'white',
  },
};

export default IncrementButton;
