import './ControlUnit.scss'
import React, { Component } from 'react'
import TouchPanel from './TouchPanel'
import TempView from './TempView'
import ControlButton from './Button'



const increase = (state, props) => ({ temp: state.temp + props.step })
const decrease = (state, props) => ({ temp: state.temp - props.step })

class ControlUnit extends Component {

  state = {

  }

  componentWillMount = () => { this.setState({ ...this.props.config }) }

  increaseTemp = () => {
    this.state.temp < this.state.maxT ? this.setState( increase({ temp: this.state.temp}, { step: 1 }) ) : false
  }

  decreaseTemp = () => {
    this.state.temp > this.state.minT ? this.setState( decrease({ temp: this.state.temp}, { step: 1 }) ) : false
  }

  trackMouseMovement = (e) => {
    let interval = 40
    let lastMouseY = -1
    let mouseTravel = 0


  }


  mouseDown = (e) => {
    console.log('mouse clicked down', e.clientY)
    this.setState({
      trackMouse: {
        mouseStart: e.clientY
      }
    })
  }

  mouseUp = (e) => {
    console.log('mouse clicked up', e.clientY)
    this.setState({
      trackMouse: {
        mouseEnd: e.clientY
      }
    })
  }




  render() {

    const { temp, maxT, minT } = this.state

    return (
      <div className="control-unit"
           style={{ background: `linear-gradient(45deg, rgb(51, ${ 255 - temp * 7 }, 255) 30%, rgb(0, 50, ${ 255 - temp * 5 }) 100%)` }}
      >

        <TouchPanel
          onMouseDown={ this.mouseDown }
          onMouseUp={ this.mouseUp }
          onMouseMove={ this.trackMouseMovement }
        >

          <ControlButton onClick={ this.increaseTemp } isVisible={ !(temp === maxT) } >+</ControlButton>

          <TempView temp={ this.state.temp }/>

          <ControlButton onClick={ this.decreaseTemp } isVisible={ !(temp === minT) } >-</ControlButton>

        </TouchPanel>
      </div>
    )
  }
}

export default ControlUnit