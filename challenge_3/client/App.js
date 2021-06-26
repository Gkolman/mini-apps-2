import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import Pins from './components/Pins.jsx'
import TurnBar from './components/TurnBar.jsx'
import TurnInput from './components/TurnInput.jsx'


const root = document.getElementById('root')

var ex = <div> client is rendering </div>
const App = () => {
  return (
    <div id="main">
      <TurnBar/>
      <Pins/>
      <TurnInput/>
    </div>
  )
}



ReactDom.render(<App/>,root)

