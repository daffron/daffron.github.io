document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board ={
  cells: []
};



function startGame () {
  createBoard(prompt("how many rows?"))

  for (var i = 0; i < board.cells.length; i++){
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  lib.initBoard()
  document.getElementById('gameboard').addEventListener('click', function(){
  checkForWin();
  checkLose();
})
  document.getElementById('gameboard').addEventListener('contextMenu', function(){
checkForWin();
checkLose();

})
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].isMarked) {
      return
    } else if (board.cells[i].hidden && !board.cells[i].isMine) {
      return
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
  lib.displayMessage('You win!')
  setTimeout(function() {restart(); }, 2500);

}
function checkLose () {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine && !board.cells[i].hidden)
    setTimeout(function() {restart(); }, 2500);
  }
}
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//

// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  //
  var count = 0;
  for (var i = 0; i < surrounding.length; i++){
    if (surrounding[i].isMine){
      count ++;
    }
  }
  return count;
}

function createBoard (x){


  for (var i = 0; i < x*x; i++){
    board.cells[i] = {
      row: Math.floor(i/x),
      col: i %  x,
      isMine: Math.random() < 0.25 ? true : false,
      isMarked: false,
      hidden: true
    }
  }

}





function restart() {
  var one = document.getElementById('gameboard')
  one.classList.add('hide');
  var two = document.getElementById('restart')
  two.classList.remove('hide')
}
window.onload=function(){

document.getElementById('play').addEventListener('click',function(){
  Play()
})
document.getElementById('noplay').addEventListener('click',function(){
  noPlay()
})
}
function Play (){
    window.location.reload();
    console.log("test")

}
function play (){
  var y = document.getElementById('restart')
  y.classList.add('hide')
  var x = document.getElementById('gameboard')
  x.classList.remove('hide')
}
function noPlay(){
  var y = document.getElementById('restart')
  y.classList.add('hide')
  var x = document.getElementById('gameboard')
  x.classList.remove('hide')
}
