import './Button.scss'
import React from 'react'


const ControlButton = props => {

  return (
    <input type="button"
           onClick={ props.onClick }
           className={`control-btn ${ props.buttonType }`}
           style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}
           value={ props.value } />
  )
}

export default ControlButton