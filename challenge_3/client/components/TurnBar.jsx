import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import '../style.css';
const TurnBar = () => {



    var makeTurnBoxes = () => {
      var turnBoxes = []
      for (var i = 0; i < 10; i++) {
        turnBoxes.push(<div class='turnBox'>
                        <div class='firstTurnBox'>2</div>
                        <div class='secondTurnBox'>/</div>
                        <div class='scoreBox'> 27</div>
                      </div>)
      }
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