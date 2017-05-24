import './TouchPanel.scss'
import React, { Component } from 'react'


class TouchPanel extends Component {

  render() {

    return (
      <div className="touch-panel" onMouseDown={ this.props.onClick }>
        { this.props.children }
      </div>
    )

  }
}

export default TouchPanel