import './TouchPanel.scss'
import React, { Component } from 'react'


class TouchPanel extends Component {

  render() {

    const { onMouseDown, onMouseMove, onMouseUp } = this.props

    return (
      <div className="touch-panel"
           onMouseDown={ onMouseDown }
           onMouseUp={ onMouseUp }
           onMouseMove={ onMouseMove }
      >
        { this.props.children }
      </div>
    )

  }
}

export default TouchPanel