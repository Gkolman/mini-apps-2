import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import '../style.css';
import {
  knockPins, getNumberOfPins,
  getPinsInArray,
  configurePins,
  resetPins,
} from './pinKnock.js'

import {calculateScore, updateScoreBoard, recordScore } from './calculateScore.js'

const TurnInput = () => {

  var [state, setState] = useState(
    {
      turn: 1,
      score: 0
      })

  const findAndKnock = (amount) => {

    var pins = getPinsInArray().slice()
    var numOfPinsBefore = getNumberOfPins(pins)
    console.log('numOfPinsBefore -> ', numOfPinsBefore)
    var numberOfPins = getNumberOfPins(pins)
    var updatedPins = configurePins(knockPins(pins,amount, numberOfPins))
    state = recordScore(state,amount,pins,updatedPins,numOfPinsBefore)
    // updateScoreBoard(state)
    // if turn is an A turn reset the pins
    // get the html element and update the score;
    //
  }
  const createInput = () => {
    return (
    <table id="row1">
        <tbody>
        <tr id="row1">
            <td></td>
            <td id="pin10" onClick={() => {findAndKnock(10)} }>10</td>
            <td></td>
          </tr>
          <tr id="row3">
            <td id="i9" onClick={() => { findAndKnock(9)} }>9</td>
            <td id="i8" onClick={() => { findAndKnock(8)} }>8</td>
            <td id="i7" onClick={() => { findAndKnock(7)} }>7</td>
          </tr>
          <tr id="row2">
            <td id="i6" onClick={() => { findAndKnock(6)} }>6</td>
            <td id="i5" onClick={() => { findAndKnock(5)} }>5</td>
            <td id="i4" onClick={() => { findAndKnock(4)} }>4</td>
          </tr>
          <tr id="row1">
            <td id="i3" onClick={() => { findAndKnock(3)} }>3</td>
            <td id="i2" onClick={() => { findAndKnock(2)} }>2</td>
            <td id="i1" onClick={() => { findAndKnock(1)} }>1</td>
          </tr>
        </tbody>
      </table>
    )
  }

    return (<div id="input">
            {createInput()}
          </div>)

}

export default TurnInput