const createBombCoordinates = () => {
  function randomNum(min, max) {return Math.floor(Math.random() * (max - min)) + min}
  var allCoordinates = []
  for ( var i = 0; i < 10; i ++) {
    var duplicate = false;
    var num1 = randomNum(0,9)
    var num2 = randomNum(0,9)
    var coordinates = [num1,num2]

    for (var coordinate of allCoordinates) {
      if (coordinate[0] === coordinates[0] && coordinate[1] === coordinates[1]) duplicate = true
    }
    if (duplicate) i-=1
    else {allCoordinates.push(coordinates)}
  }
  return allCoordinates
}

export default createBombCoordinates
