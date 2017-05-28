import "./TouchPanel.scss"
import React, { Component } from "react"

class TouchPanel extends Component {

  state = {}

  //track mouse
  trackMouse = (e) => {
    let start = this.state.clickPoint
    let currentPosition = e.pageY
    let delta = start - currentPosition
    delta % 6 === 0 && delta !== 0 ? this.updateState(delta) : null
    // console.log('mouse position Y', e.pageY)

  }

  updateState = (dist) => {
    const { increaseTemp, decreaseTemp } = this.props
    console.log(dist)
    let currentDist = 0;
    currentDist > dist ? decreaseTemp() : increaseTemp()

  }

  mouseDown = (e) => {
    console.log('mouse down', e.pageY)

    this.setState({
      clickPoint: e.pageY
    })

  }

  mouseUp = (e) => {
    console.log('mouse up', e.pageY)
    this.setState({
      clickPoint: 0
    })
  }




  render() {

    return (
      <div className="touch-panel"
           onMouseDown={ this.mouseDown }
           onMouseUp={ this.mouseUp }
           onMouseMove={ this.state.clickPoint > 0 ? this.trackMouse : null }

      >
        { this.props.children }
      </div>
    )

  }
}

export default TouchPanel