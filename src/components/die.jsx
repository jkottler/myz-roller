import React from 'react';

function Die(props) {
  return (
    <div
      style={{
        ...style,
        background: dieTypes[props.type].background,
        color: dieTypes[props.type].foreground,
      }}>
      <div style={style2}>{show(props.type, props.value)}</div>
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
  'border-radius': '5px',
  position: 'relative',
  display: 'inline-block',
};

const dieTypes = {
  base: {
    background: 'yellow',
    foreground: 'black',
    one: 'bio',
  },
  skill: {
    background: 'green',
    forground: 'white',
    one: '1',
  },
  gear: {
    background: 'black',
    foreground: 'white',
    one: 'break',
  },
};

const show = (type, value) => {
  let v = parseInt(value, 10);
  if (v === 6) {
    return 'rad';
  }
  if (v === 1) {
    return dieTypes[type].one;
  }
  return v;
};

export default Die;
