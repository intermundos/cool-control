import './ControlUnit.scss'
import React, { Component } from 'react'
import TouchPanel from './TouchPanel'
import TempView from './TempView'
import ControlButton from './Button'



const increase = (state, props) => ({ temp: state.temp + props.step })
const decrease = (state, props) => ({ temp: state.temp - props.step })

class ControlUnit extends Component {

  state = { ...this.props.config }

  increaseTemp = () => {
    this.state.temp < this.state.maxT ? this.setState( increase({ temp: this.state.temp}, { step: 1 }) ) : false
  }

  decreaseTemp = () => {
    this.state.temp > this.state.minT ? this.setState( decrease({ temp: this.state.temp}, { step: 1 }) ) : false
  }




  render() {

    const { temp, maxT, minT } = this.state

    return (
      <div className="control-unit"
           style={{ background: `linear-gradient(45deg, rgb(51, ${ 255 - temp * 8 }, 255) 30%, rgb(0, 50, ${ 255 - temp * 8 }) 100%)` }}
      >

        <TouchPanel increaseTemp={ this.increaseTemp } decreaseTemp={ this.decreaseTemp }>

          <ControlButton onClick={ this.increaseTemp } isVisible={ !(temp === maxT) } value="+"/>

          <TempView temp={ this.state.temp }/>

          <ControlButton onClick={ this.decreaseTemp } isVisible={ !(temp === minT) } value="-"/>

        </TouchPanel>
      </div>
    )
  }
}

export default ControlUnit