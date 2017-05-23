import '../static/styles/styles.scss'
import './App.scss'
import React from 'react'

import UnitControl from '../components/ControlUnit/ControlUnit'


const App = () => {
  return (
    <div className="app">
      <UnitControl id="unit-1" config={{ temp: 25, maxT: 28, minT: 16, units: 'celsius' }}/>
    </div>
  )
}

export default App