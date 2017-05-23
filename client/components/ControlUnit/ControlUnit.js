import './ControlUnit.scss'
import React, { Component } from 'react'
import TempView from './TempView'
import Button from './Button'

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

  render() {
    return (
      <div className="control-unit">
        <Button onClick={ this.increaseTemp }>UP</Button>
        <TempView temp={ this.state.temp }/>
        <Button onClick={ this.decreaseTemp }>DOWN</Button>
      </div>
    )
  }
}

export default ControlUnit