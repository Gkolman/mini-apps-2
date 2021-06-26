import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import '../style.css';

const TurnBar = () => {

    var make10thFrame = () => {
      return (
      <div id='finalBox'>
        <div
        id="frame10AScore"
        className = "subTurnBox">
        </div>
        <div
        id="frame10BScore"
        className = "subTurnBox">
        </div>
        <div
        id="frame10CScore"
        className = "subTurnBox">
        </div>
      <div id="frame10Score" className='scoreBox'>
      </div>

    </div>
      )
    }
    var makeTurnBoxes = () => {
      var turnBoxes = []
      for (var i = 1; i <= 9; i++) {
        turnBoxes.push(
          <div id={i} className='turnBox'>
            <div
            id = {`frame${i}AScore`}
            className='firstTurnBox'
            ></div>
            <div
            id = {`frame${i}BScore`}
            className='secondTurnBox'
            ></div>
            <div id={`frame${i}Score`}className='scoreBox'></div>
            {/* <div> frame{i + 1} </div> */}
          </div>)
      }
      turnBoxes.push(make10thFrame())
      return(
        <div id="allTurnBoxes">
          {turnBoxes}
        </div>
      )
    }
    return (
      <div>
        {makeTurnBoxes()}
      </div>
    )

}

export default TurnBar