var {getNumberOfPins, resetPins} = require('./pinKnock.js')


var endGame = (score) => {

  alert(`Game over! you scored ${score}`)
  setTimeout(() => {resetPins()}, 5000)
}


var bowlStrike = (state, frame) => {
  alert('strike!')
  state.turn += 1
  state[frame] = 'strike'
  state[frame + 'Score'] = 10
  state[frame + 'AScore'] = 10
  setTimeout(() => {resetPins()}, 500)
  return state
}
var bowlStrikeFinal = (state, turn) => {
  alert('strike!')
  state[turn] = 'strike'
  state[turn + 'Score'] = 10
  state[turn.slice(0,7) + 'Score'] += 10
  setTimeout(() => {resetPins()}, 500)
  return state
}
var bowlSpare = (state, frame, amount) => {
  alert('spare!')
  // state[frame] = 'frame'
  state[frame] = 'spare'
  state[frame + 'BScore'] = amount
  state[frame + 'Score'] = 10
  setTimeout(() => {resetPins()}, 500)
  return state
}

var recordScore = (state,amount,before,after, numOfPinsBefore) => {


  var {turn} = state
  if (turn > 21) return state
  // FRAME 1A
  if (turn === 1){
    if (amount === 10) {state = bowlStrike(state, 'frame1')}
    else {state.frame1AScore = amount;state.frame1Score = amount}
  } else if (turn === 2){
    // check if spare
    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame1', numOfPinsBefore);alert('spare!')}
    else {state.frame1BScore = amount;state.frame1Score += amount; resetPins()}
  } else if (turn === 3){
    if (amount === 10) {state = bowlStrike(state, 'frame2')}
    else {state.frame2AScore = amount;state.frame2Score = amount}
  } else if (turn === 4){
    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame2', numOfPinsBefore);alert('spare!')}
    else {state.frame2BScore = amount; state.frame2Score += amount; resetPins()}
  } else if (turn === 5){
    if (amount === 10) {state = bowlStrike(state, 'frame3')}
    else {state.frame3AScore = amount;state.frame3Score = amount}
  } else if (turn === 6){
    // check if spare
    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame3', numOfPinsBefore);alert('spare!')}
    else {state.frame3BScore = amount; state.frame3Score += amount; resetPins()}
  } else if (turn === 7){
    if (amount === 10) {state = bowlStrike(state, 'frame4')}
    else {state.frame4AScore = amount;state.frame4Score = amount}
  } else if (turn === 8){
    // check if spare
    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame4', numOfPinsBefore);alert('spare!')}
    else {state.frame4BScore = amount; state.frame4Score += amount; resetPins()}
  }  else if (turn === 9){
    if (amount === 10) { state = bowlStrike(state, 'frame5')}
    else {state.frame5AScore = amount;state.frame5Score = amount}
  } else if (turn === 10){
    // check if spare
    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame5', numOfPinsBefore);alert('spare!')}
    else {state.frame5BScore = amount; state.frame5Score += amount; resetPins()}
  }  else if (turn === 11){
    if (amount === 10) {state = bowlStrike(state, 'frame6')}
    else {state.frame6AScore = amount;state.frame6Score = amount}
  } else if (turn === 12){
    // check if spare
    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame6', numOfPinsBefore);alert('spare!')}
    else {state.frame6BScore = amount; state.frame6Score += amount; resetPins()}
  } else if (turn === 13){
    if (amount === 10) {state = bowlStrike(state, 'frame7')}
    else {state.frame7AScore = amount;state.frame7Score = amount}
  } else if (turn === 14){
    // check if spare
    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame7', numOfPinsBefore);alert('spare!')}
    else {state.frame7BScore = amount; state.frame7Score += amount; resetPins()}
  } else if (turn === 15){
    console.log('amount',amount)

    if (amount === 10) {state = bowlStrike(state, 'frame8')}
    else {state.frame8AScore = amount;state.frame8Score = amount}
  } else if (turn === 16){
    console.log('amount',amount)

    // check if spare
    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame8', numOfPinsBefore);alert('spare!')}
    else {state.frame8BScore = amount; state.frame8Score += amount; resetPins()}
  } else if (turn === 17){
    console.log('amount',amount)
    if (amount === 10) {state = bowlStrike(state, 'frame9')}
    else {state.frame9AScore = amount;state.frame9Score = amount}
  } else if (turn === 18){
    console.log('amount',amount)

    if (amount >= numOfPinsBefore) {state = bowlSpare(state, 'frame9', numOfPinsBefore);alert('spare!')}
    else {state.frame9BScore = amount; state.frame9Score += amount; resetPins()}
  } else if (turn === 19){

    if (amount === 10) {
      state = bowlStrikeFinal(state,'frame10A')
    }
    else {state.frame10AScore = amount;state.frame10Score = amount}
  } else if (turn === 20){
    // if last game was not strike
    var isStrike = state.frame10A === 'strike' ? true : false
    //
    if (amount === 10 && isStrike === true ) {
      // if strike
      state = bowlStrikeFinal(state,'frame10B')

    } else if (amount >= numOfPinsBefore) {
      // if spare
      state = bowlSpare(state, 'frame10', amount);alert('spare!')
    } else {
      // game over here
      state.frame10BScore = amount;
      state.frame10Score += amount;
      state = calculateScore(state)
      updateScoreBoard(state)
      return state
    }
  } else if (turn === 21){
    // check if spare
    if (amount === 10) {
      state = bowlStrikeFinal(state,'frame10C')
    }
    else {state.frame10CScore = amount; state.frame10Score += amount }
    state = calculateScore(state)

    // game is over
  }
  state.turn += 1
  // state = calculateScore(state)
  updateScoreBoard(state)
  return state
}

var calculateScore = (state) => {
  console.log('state -> ', state)

  var bowlingTypes = []

  for ( var i = 1; i < 10; i++ ) {
    if (state[`frame${i}`] === 'strike') {
      bowlingTypes.push('strike')
    } else if (state[`frame${i}`] === 'spare') {
      bowlingTypes.push('spare')
    } else {
      bowlingTypes.push('regular')
    }
  }
  for (var i = 0; i < bowlingTypes.length - 2;i++) {
    var p1Strike = bowlingTypes[i] === 'strike' ? true : false
    var p2Strike = bowlingTypes[i + 1] === 'strike' ? true : false
    var p3Strike = bowlingTypes[i + 2] === 'strike' ? true : false
    if (p1Strike && p2Strike && p3Strike) {
      bowlingTypes[i] = 'turkey'
      bowlingTypes[i + 1] = 'turkey'
      bowlingTypes[i + 2] = 'turkey'
    }
  }
  console.log('bowlingTypes -> ', bowlingTypes)

  var updatedFrameScores = []
  for ( var i = 0; i < bowlingTypes.length - 2; i++) {
    if ( bowlingTypes[i] === 'turkey') {
      var currentTurnScore = state[`frame${i + 1}Score`]
      var nextTurnScore = state[`frame${i + 2}Score`]
      var nextNextTurnScore = state[`frame${i + 3}Score`]
      var total = currentTurnScore + nextTurnScore + nextNextTurnScore
      updatedFrameScores.push(total)
    } else if (bowlingTypes[i] === 'strike') {
      var currentTurnScore = state[`frame${i + 1}Score`]
      var nextTurnScore = state[`frame${i + 2}Score`]
      var total = currentTurnScore + nextTurnScore
      updatedFrameScores.push(total)
    } else if (bowlingTypes[i] === 'spare') {
      var currentTurnScore = state[`frame${i + 1}Score`]
      var nextTurnScore = state[`frame${i + 2}AScore`]
      var total = currentTurnScore + nextTurnScore
      updatedFrameScores.push(total)
    } else if (bowlingTypes[i] === 'regular') {
      var currentTurnScore = state[`frame${i + 1}Score`]
      updatedFrameScores.push(currentTurnScore)
    }
  }
  console.log('updatedFrameScores -> ', updatedFrameScores)

  updatedFrameScores.push(state.frame10AScore,state.frame10BScore,state.frame10CScore)
  var total = updatedFrameScores.reduce((acc, cv) => {
    console.log('cv -> ', cv)
    return acc + cv
  })
  if (bowlingTypes[7] === 'turkey') { state.frame8Score = 30; total += 30}
  if (bowlingTypes[8] === 'turkey') { state.frame9Score = 30; total += 30}

  for ( var i = 1; i < 9; i++) {
    state[`frame${i}Score`] = updatedFrameScores[i - 1]
  }
  console.log('frame10AScore', frame10AScore)
  console.log('frame10BScore', frame10AScore)
  console.log('frame10CScore', frame10AScore)

  state.frame10AScore = updatedFrameScores[updatedFrameScores.length -3]
  state.frame10BScore = updatedFrameScores[updatedFrameScores.length -2]
  state.frame10CScore = updatedFrameScores[updatedFrameScores.length -1]
  state.frame10Score = state.frame10AScore + state.frame10BScore + state.frame10CScore
  console.log('state -> ', state)
  state.frame10Score  = total
  document.querySelector(`#frame10AScore`).innerHTML = score
  endGame(total)
  return state
}

var updateScoreBoard = (state) => {

  for (var key in state) {
    if (key.slice(0,5) === 'frame') {
      var turn;
      var subTurn;
      var finalTurn = false;
      if (key.slice(0,7) === 'frame10') {
        finalTurn = true
        turn = key.slice(0,7)
        subTurn = key.slice(7,8)
      } else {
        turn = key.slice(0,6);subTurn = key.slice(6,7)
      }

      if (finalTurn) {
        // debugger;
        console.log('entering frame 10 conditional')
        console.log('key ->', key)
       // console.log('value ->', state[key])
        console.log('subTurn ->', subTurn)

        if (key === 'frame10AScore') {
          if (state[key] === 10) {
            console.log('got strike on frame10A')
            document.querySelector(`#${turn}AScore`).innerHTML = 'X'
          } else {
            document.querySelector(`#${key}`).innerHTML = state[key]
          }
        } else if (key === 'frame10BScore') {
          console.log('entering final turn 10B')
          if (state[turn + 'A'] !== 'strike') {
            var previousFrameScore = state[turn + 'AScore']
            var currentFrameScore = state[turn + 'BScore']
            if ((previousFrameScore + currentFrameScore) >= 10) {
              console.log('got spare on frame10B')
              document.querySelector(`#${key}`).innerHTML = '/'
            }
          } else if (state[key] === 10) {
            console.log('entering second strike in frame 10')
            document.querySelector(`#${turn}BScore`).innerHTML = 'X'
          } else {
            document.querySelector(`#${key}`).innerHTML =  state[key]
          }
        } else if (key === 'frame10CScore') {
          console.log('entering frame10C here ')
          if (state[key] === 10) {
            document.querySelector(`#${turn}CScore`).innerHTML = 'X'
          } else {
            document.querySelector(`#${key}`).innerHTML = state[key]
          }
        }
      } else {

        if (subTurn === 'A') {

            if (state[key] === 10) {
              document.querySelector(`#${turn}BScore`).innerHTML = 'X'
            } else {
              document.querySelector(`#${key}`).innerHTML = state[key]
            }

        } else if (subTurn === 'B') {
            var previousFrameScore = state[turn + 'AScore']
            var currentFrameScore = state[turn + 'BScore']

            if ((previousFrameScore + currentFrameScore) >= 10) {
              document.querySelector(`#${key}`).innerHTML = '/'
              document.querySelector(`#${key}`).innerHTML = '/'
            } else {
              document.querySelector(`#${key}`).innerHTML = state[key]
              // no spair
            }
        // if last turn plus this turn === 10
        // figure out if this is a spare;
        } else if (subTurn === 'C') {
          document.querySelector(`#${key}`).innerHTML = state[key]
        } else if (key.length !== 6 && key !== 'frame10') {
          document.querySelector(`#${key}`).innerHTML = state[key]
        }
    }
  }
}
}

  // [frame1, frame2]
  //    10       9
  // if prev turn was a split;
  // if prev turn was a strike;
  // if prev turn was a double;
  // if prev turn was a was three strikes in a row


module.exports = {
  calculateScore,
  updateScoreBoard,
  recordScore
}
