import './ControlUnit.scss'
import React, { Component } from 'react'
import TouchPanel from './TouchPanel'
import TempView from './TempView'
import ControlButton from './Button'

const increase = (state, props) => {
  return {
    temp: state.temp + props.step
  }
}
const decrease = (state, props) => {
  return {
    temp: state.temp - props.step
  }
}

class ControlUnit extends Component {

  state = {}

  componentWillMount = () => { this.setState({ ...this.props.config }) }


  increaseTemp = () => {
    this.state.temp < this.state.maxT ? this.setState( increase({ temp: this.state.temp}, { step: 1 }) ) : false
  }

  decreaseTemp = () => {
    this.state.temp > this.state.minT ? this.setState( decrease({ temp: this.state.temp}, { step: 1 }) ) : false
  }

  touchStart = (e) => {
    let startY = 0;
    let y = e.clientY


    console.log(startY + y)

  }

  render() {
    const { temp, maxT, minT } = this.state
    return (
      <div className="control-unit">

        <TouchPanel onClick={ this.touchStart }>

          <ControlButton onClick={ this.increaseTemp }
                         isVisible={ !(temp === maxT) } >
            +
          </ControlButton>

          <TempView temp={ this.state.temp }/>

          <ControlButton onClick={ this.decreaseTemp }
                         isVisible={ !(temp === minT) } >
            -
          </ControlButton>

        </TouchPanel>



      </div>
    )
  }
}

export default ControlUnit