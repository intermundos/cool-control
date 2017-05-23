import React from 'react'


export default props => {

  return (
    <button onClick={ props.onClick } className={`control-btn ${ props.buttonType }`}>
      { props.children }
    </button>
  )
}