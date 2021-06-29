import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import createBombCoordinates from './helperFunctions.js'

/*
- iterate over 10 and create state for board[r][c];
- create a function that takes two coordinates as parameters
  - updates the state of that location to hold -
  {
    covered: false:
    type: 'mine','score','empty'
    score: <= 8
  }
- ;
*/


export const slice = createSlice({
  name : 'grid',
  initialState : [],
  reducers : {
    createGrid: (state, action) => {
      const {payload} = action
      console.log('creating grid')
      var matrix = []
      for (var row = 0; row < 10; row++) {
        var newRow = []
        for (var col = 0; col < 10; col++) {
          var node = {id:`${row}${col}` ,covered: true, type: 'blank', score: 0}
          newRow.push(node)
          }
          matrix.push(newRow)
        }
        state.push(matrix)
      },

    plantBombs: (state, action) => {
      const {payload} = action
      console.log('planting bombs')
      var coordinates = createBombCoordinates()
      for (var coordinate of coordinates) {
        state[0][coordinate[0]][coordinate[1]].type = 'mine'
        var id = `${coordinate[0]}${coordinate[1]}`
        document.getElementById(id).innerHTML = 'X'
      }
    },
    assignValues: (state) => {
      for (var row = 0; row < state[0].length; row++) {
        for (var col = 0; col < state[0].length; col++) {
          let node=state[0][row][col]
          if (node.type === 'mine'){continue}
          let t,tr,tl,r,dr,d,dl,l
          if (state[0][row-1]) {t = state[0][row-1][col];tr = state[0][row-1][col+1];tl = state[0][row-1][col-1]}
          if (state[0][row+1]) {d = state[0][row+1][col];dr = state[0][row+1][col+1];dl = state[0][row+1][col-1]}
          r = state[0][row][col+1];l = state[0][row][col-1]
          var values = [t,tr,tl,dr,d,dl,r,l]
          var score = values.reduce((acc,cv) => {if (cv) {if (cv.type === 'mine') {acc+=1}}return acc},0)
          state[0][row][col].type = score
          var id = `${row}${col}`
          document.getElementById(id).innerHTML = score
        }
      }
    },

    unCover:(state, action) => {

      const {payload} = action
      var visited = []

      var alreadyVisited = (container, element) => {
        for (var item of container){if (item[0] === element[0] && item[1] === element[1]) return true}return false;
      }

      let blowUpArea = (state,row,col) => {
        row = parseInt(row)
        col = parseInt(col)
        var t,tr,tl,r,dr,d,dl,l;
        var node = state[0][row][col]
        if (!node.covered) {return} else {node.covered = false}
        console.log('making it this far')
        if (state[0][row-1]) {;t = state[0][row-1][col];tr = state[0][row-1][col+1];;tl = state[0][row-1][col-1]}
        if (state[0][row+1]) {;d = state[0][row+1][col];dr = state[0][row+1][col+1];;dl = state[0][row+1][col-1]}
        r = state[0][row][col+1]
        l = state[0][row][col-1]
        if (r) {if (r.type === 0 && !alreadyVisited(visited,[row,col+1]) ){blowUpArea(state,row,col+1)}else {r.covered = false}}
        if (dr) {if (dr.type === 0 && !alreadyVisited(visited,[row + 1,col+1]) ){blowUpArea(state,row+1,col+1)}else {dr.covered = false}}
        if (d) {if (d.type === 0 && !alreadyVisited(visited,[row+1,col]) ){blowUpArea(state,row+1, col)}else {d.covered = false}}
        if (dl) {if (dl.type === 0 && !alreadyVisited(visited,[row+1,col-1]) ){blowUpArea(state,row+1,col-1)}else {dl.covered = false}}
        if (l) {if (l.type === 0 && !alreadyVisited(visited,[row,col-1]) ){blowUpArea(state,row,col-1)}else {l.covered = false}}
        if (tl) {if (tl.type === 0 && !alreadyVisited(visited,[row-1,col-1]) ){blowUpArea(state,row-1,col-1)}else {tl.covered = false}}
        if (t) {if (t.type === 0 && !alreadyVisited(visited,[row- 1,col]) ){blowUpArea(state,row-1,col)}else {t.covered = false}}
        if (tr) {if (tr.type === 0 && !alreadyVisited(visited,[row-1,col+1])){blowUpArea(state,row-1,col+1)}else {tr.covered = false}}
        visited.push([row,col])
      }

      // console.log('state -> ', JSON.stringify(state[0]))
      var row = payload.slice(0,1)
      var col = payload.slice(1)
      var node = state[0][row][col]
      if (node.covered === false) return;
      // node.covered = false;
      if (node.type === 'mine') {
        // reveal all mines;

        for (var i = 0; i < state[0].length; i++) {
          for (var j =0; j < state[0].length; j++) {
            if (state[0][i][j].type === 'mine') {
              state[0][i][j].covered = false
              document.getElementById(`${i}${j}`).style.color = "red";
            }

          }
        }
        alert('game Over')
        // end the game

        // end the game here
      } else if (node.type === 0) {
        blowUpArea(state,row,col)
      } else {
        state[0][row][col].covered = false;
      }
      // state[0][row][col].covered = false
      // takes a coordinate,

      // checkes the values of the coorinate in the amtrix ;
      // if the value is a mine, end the game
      // if the value at the coordinate is a 0;
      // perform recursive blow up are method;
      // else uncover target value
    },


  }
})

export const selectCount = (state) => state.counter.value;

export const blowUpAreaAreaAtCoordinate = (row) => (dispatch, getState) => {
  console.log('entering blowUpAreaAreaAtCoordinate')
  const stateCopy = getState();
  dispatch(blowUpAreaArea(`${row[0]}${row[1]}`));
};

export const unCoverAtCoordinate = (row, col) => (dispatch, getState) => {
  const stateCopy = getState();
  dispatch(unCover(`${row}${col}`));
};

export const {createGrid,plantBombs,assignValues,unCover,blowUpAreaArea} = slice.actions
export default slice.reducer

/*
- create a "createBombs" function;
-  genereate 2 random numbers 0 - 9
- use bothe the numbers as coordinates;
- make sure coordinates are unque;
- check to see if the coordinates created already exist
-

*/
