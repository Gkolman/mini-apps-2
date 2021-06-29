import React, {useState, useEffect} from 'react'
import style from './style.css'
import {useSelector, useDispatch} from 'react-redux';
import {createGrid, plantBombs,assignValues, unCoverAtCoordinate} from './gridSlice.js'
var Grid = () => {

  const dispatch = useDispatch()
  const state = useState()
  const grid = useSelector((state) => {return state.grid})

  useEffect(() => {
    dispatch(createGrid(state))
    dispatch(plantBombs(state))
    dispatch(assignValues(state))
  }, []);

  const click = (e) => {
    e.preventDefault()
    var row = e.target.id.slice(0,1)
    var col = e.target.id.slice(1)
    dispatch(unCoverAtCoordinate(row,col))
  }

  var createTable = () => {
    console.log('state in table -> ', state[0])
    var table = []
    for (var row = 0; row < 10; row++) {
      var newRow = []
      for (var col = 0; col < 10; col++) {
        var id = `${row}${col}`
        var updatedClassName;
        if (grid[0]){updatedClassName = grid[0][row][col].covered === true ? "box covered" : "box uncovered"}
        var columnData = (
        <td
        id={`${row}${col}`}
        key={`${row}${col}`}
        className={updatedClassName}
        onClick={(e) => click(e)}
        ></td>
        )
        newRow.push(columnData)
      }
      table.push(<tr key={row}>{newRow}</tr>)
    }
    return (<table id="grid"><tbody>{table}</tbody></table>)
  }
  return (
      <div>
        {createTable()}
      </div>
  )
}

export default Grid
