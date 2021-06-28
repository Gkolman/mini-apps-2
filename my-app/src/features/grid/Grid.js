import React, {useState, useEffect} from 'react'
import style from './style.css'
import {useSelector, useDispatch} from 'react-redux';
import {createGrid, plantBombs} from './gridSlice.js'
var Grid = () => {

  const dispatch = useDispatch()
  const state = useState()
  const grid = useSelector(state => state.grid)

  useEffect(async () => {
    // Update the document title using the browser API
    // document.title = `You clicked ${count} times`;
    dispatch(createGrid(state))
    dispatch(plantBombs(state))
  }, []);

  var createTable = () => {
    var table = []
    for (var row = 0; row < 10; row++) {
      var newRow = []
      for (var col = 0; col < 10; col++) {
        var id = `${row}${col}`
        var columnData = (<td key={`${row}${col}`} className="box">{id}</td>)
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
