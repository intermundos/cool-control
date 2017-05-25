import './TempView.scss'
import React from 'react'

const TempView = props => {

  return (
    <div className="temp-view">
      <div className="digits">
        { props.temp }
      </div>
    </div>
  )
}

export default TempView
