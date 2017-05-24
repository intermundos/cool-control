import './Button.scss'
import React from 'react'


const ControlButton = props => {

  return (
    <button onClick={ props.onClick } className={`control-btn ${ props.buttonType }`} style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}>
      { props.children }
    </button>
  )
}

export default ControlButton