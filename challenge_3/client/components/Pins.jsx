import React, { useState, useEffect } from 'react';
import ReactDom from 'react-dom'
import '../style.css';
const Pins = () => {

  const makeRow1 = () => {
    return (<table id="row1"><tbody><tr id="row1"><td id="pin1">*</td></tr></tbody> </table>)
  }
  const makeRow2 = () => {
    return (<table id="row2"><tbody><tr id="row2"><td id="pin2">*</td><td id="pin3">*</td></tr> </tbody></table>)
  }
  const makeRow3 = () => {
    return (<table id="row3"><tbody><tr id="row3"><td id="pin4">*</td><td id="pin5">*</td><td id="pin6">*</td></tr></tbody></table>)
  }
  const makeRow4 = () => {
    return (<table id="row4"><tbody><tr><td id="pin7">*</td><td id="pin8">*</td><td id="pin9">*</td><td id="pin10">*</td></tr></tbody></table>)
  }

  const createRows = (rows) => {
    return (<div id="allRows">
                {makeRow4()}
                {makeRow3()}
                {makeRow2()}
                {makeRow1()}
          </div>)
  }
    return (
      <div>{createRows()}</div>
    )

}

export default Pins