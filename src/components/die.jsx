import React from 'react';

import radWhite from './radioactive-white.svg';
import radBlack from './radioactive-black.svg';
import crash from './corner-explosion.svg';
import bio from './biohazard.svg';

function Die(props) {
  return (
    <div
      style={{
        ...style,
        background: dieTypes[props.type].background,

        fontFamily: "'Arial Black', Arial-BoldMT, Gadget, 'sans-serif'",
        fontSize: 'xx-large',
      }}>
      <div style={{ ...style2, color: dieTypes[props.type].foreground }}>
        {show(props.type, props.value)}
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
};

const dieTypes = {
  base: {
    background: 'yellow',
    foreground: 'black',
    one: bio,
    six: radBlack,
  },
  skill: {
    background: 'green',
    foreground: 'white',
    six: radWhite,
  },
  gear: {
    background: 'black',
    foreground: 'white',
    one: crash,
    six: radWhite,
  },
};

const show = (type, value) => {
  let v = parseInt(value, 10);
  if (v === 6) {
    return (
      <img
        height="40"
        width="40"
        border-radius="5px"
        src={dieTypes[type].six}
        style={style2}
        alt={dieTypes[type].six}
      />
    );
  }
  if (v === 1 && type !== 'skill') {
    return (
      <img
        height="40"
        width="40"
        border-radius="5px"
        src={dieTypes[type].one}
        style={style2}
        alt={dieTypes[type].one}
      />
    );
  }
  return v;
};

export default Die;
