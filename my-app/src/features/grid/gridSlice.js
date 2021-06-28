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
      console.log('state before create grid', state)
      const {payload} = action
      var id = 0
      console.log('creating grid')
      for ( var row = 0; row < 10; row++) {
        for (var col = 0; col < 10; col++) {
          var node = {id :`${row}${col}` ,covered: true, type: 'blank', score: 0}
          state.push(node)
          }
        }
        console.log('state after create grid', state)

      },

    plantBombs: (state, action) => {
      const {payload} = action

      console.log('planting bombs')
      var coordinates = createBombCoordinates()

      console.log('state -> ', state)

      for (var coordinate of coordinates) {
        var element = state.find(cd => cd.id === 12)
        console.log('element', element)
        // state.grid[coordinate[0]][coordinate[1]].type = 'mine'
      }

      // return state
    }
  }

})

export const {createGrid,plantBombs} = slice.actions
export default slice.reducer

/*
- create a "createBombs" function;
-  genereate 2 random numbers 0 - 9
- use bothe the numbers as coordinates;
- make sure coordinates are unque;
- check to see if the coordinates created already exist
-

*/
