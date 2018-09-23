import React from 'react'

function IncrementButton (props) {
  return (
    <div className='increment-button'
      onClick={props.onClick}
      style={{
        ...style,
        background: types[props.type].background
      }}>
      <div
        style={{
          transform: 'translate(-50%, -50%)',
          position: 'absolute',
          left: '50%',
          color: types[props.type].foreground,
          top: props.label === '-' ? '40%' : '50%'
        }}>
        {props.label}
      </div>
    </div>
  )
}

const noselect = {
  webkitTouchCallout: 'none', /* iOS Safari */
  webkitUserSelect: 'none', /* Safari */
  khtmlUserSelect: 'none', /* Konqueror HTML */
  mozUserSelect: 'none', /* Firefox */
  msUserSelect: 'none', /* Internet Explorer/Edge */
  userSelect: 'none' /* Non-prefixed version, currently supported by Chrome and Opera */
}

const style = {
  ...noselect,
  width: '50px',
  height: '50px',
  margin: '3px',
  borderRadius: '5px',
  position: 'relative',
  display: 'inline-block',
  fontFamily: "'Arial Black', Arial-BoldMT, roboto, 'sans-serif'",
  fontSize: '3rem'
}

const types = {
  base: {
    background: 'yellow',
    foreground: 'black'
  },
  skill: {
    background: 'green',
    foreground: 'white'
  },
  gear: {
    background: 'black',
    foreground: 'white'
  }
}

export default IncrementButton
