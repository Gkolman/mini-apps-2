var getPinsInArray = () => {
  var pins = []
  for (var i = 1; i < 11; i++) {
    pins.push(document.querySelector(`#pin${i}`).innerHTML)
  }
  return [
                [pins[0]],
            [pins[1],pins[2]],
        [pins[3],pins[4],pins[5]],
      [pins[6],pins[7],pins[8],pins[9]],
  ]
}
const resetPins =() => {
  for ( var i = 1; i < 11; i++ ){
    document.querySelector(`#pin${i}`).innerHTML = '*'
  }
}
var configurePins = (updatedArray) => {
  var counter = 1
  for ( var r = 0; r < updatedArray.length; r++) {
    for ( var p = 0; p < updatedArray[r].length; p++) {
      var position = counter
      var value =  document.querySelector(`#pin${position}`)
      var updatedValue = updatedArray[r][p]
      document.querySelector(`#pin${position}`).innerHTML = updatedArray[r][p]
      counter+=1
    }
  }
}
const getNumberOfPins = (pins) => {
  return  pins.reduce((acc, cv, i, array) => {
      acc += cv.reduce((ac, v, j, ar) => {
          if (v === '*') ac +=1
          return ac
      }, 0)
      return acc
  },0)
}

var knockPins = (pins,num, startingNumberOfPins) => {
if (startingNumberOfPins === 0) return pins
    const randomNum = (min, max) => {return Math.floor(Math.random() * (max - min)) + min;}
    var counter = num;

    const decideNextPinToKnock = (pins,r,p) => {
        var numberOfPins = getNumberOfPins(pins)
        // get tnumber of pins here
        if (counter === 0) return
        var pointer = pins[r][p]
        var left = [pins[r][p - 1], r,p - 1]
        var right = [pins[r][p + 1],r,p + 1]
        var downL = pins[r + 1] ? [pins[r + 1][p],r +1 , p] :  ['']
        var downR =  pins[r + 1] ? [pins[r + 1][p + 1],r + 1,p + 1] : ['']
        var options = []

        if (left[0] === '*') options.push(left)
        if (right[0] === '*') options.push(right)
        if (downL[0] === '*') options.push(downL)
        if (downR[0] === '*') options.push(downR)

        pins[r][p] = '.'
        counter-=1
        if (options.length === 0) return
        var direction = options[randomNum(0,options.length)]

        decideNextPinToKnock(pins,direction[1], direction[2] )
    }
  var expectedRemaining = startingNumberOfPins - num < 0 ? 0 : startingNumberOfPins - num
  var actualRemaining =  getNumberOfPins(pins)
  var pinsToGo = actualRemaining - expectedRemaining

  for (var r = 0; r < pins.length; r++) {
    if (pinsToGo <= 0) { break; }
    for (var p  = 0; p < pins[r].length; p++) {
      if (pins[r][p] === '*') {
          actualRemaining = getNumberOfPins(pins)
          pinsToGo =   actualRemaining - expectedRemaining
          if (pinsToGo <= 0) { break; }
          decideNextPinToKnock(pins,r,p)
      }
    }
  }
  while (pinsToGo > expectedRemaining) {
      expectedRemaining = startingNumberOfPins - num < 0 ? 0 : startingNumberOfPins - num
      actualRemaining =  getNumberOfPins(pins)
      pinsToGo = actualRemaining - expectedRemaining
      pins = knockPins(pins, pinsToGo, actualRemaining)
  }
return pins
}

module.exports = {
  knockPins,
  getNumberOfPins,
  getPinsInArray,
  configurePins,
  resetPins,
}
