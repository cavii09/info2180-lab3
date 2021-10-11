// display the 3X3 grid game board
window.onload = function(){
var blocks = document.getElementById("board").childNodes;
blocks.forEach(childparam => {childparam.className = "square";} )

const statusDisplay = document.getElementById("status");
const btn = document.getElementById("New Game");


const classO = 'O';
const classX = 'X';
let playerTurn = classX;

// Add an X or O to square when clicked
blocks.forEach(elem =>{elem.addEventListener('click', boxClicked)
})
function boxClicked(e){
    const space = e.target;
    space.innerHTML = playerTurn;
    space.classList.add('X');
    console.log('box clicked');
    playerTurn = playerTurn === classO ? classX : classO;
    }
    // change the style when you move mouse over a square
blocks.forEach(function(elem, index, list) {
    elem.addEventListener('mouseover', function(e){
        e.target.classList.add('hover');
    });

    elem.addEventListener('mouseout', function(e){
       e.target.classList.remove('hover');
    })
});
// checking for winner 
//var boxes = [ [], [], []];

function checkColumn(board,move){
  const column = [board[0][0],board[1][0], board[2][0]];
  const coulumn2 = [board[0][1],board[1][1], board[2][1]];
  const coulum3 = [board[0][2],board[1][2], board[2][2]];
  column_1_result = checkRow(column, move);
  column_2_result = checkRow(column2, move);
  column_3_result = checkRow(column3, move);
  return column_1_result || column_2_result || column_3_result;
}

function checkRow(row, move){
  for (let i=0; i<row.length; i++){
    if(row[i]!=move){
      return false;
    } 
   }
  return true; 
}
function checkDiagionally(board, move){
  const diagional = [board[0][0],board[1][1], board[2][2]];
  const diagional = [board[0][2],board[1][1], board[2][0]];
  diagionL_1_result = checkRow(column, move);
  diagional_2_result = checkRow(column2, move);
  return diagional_1_result || diagioanl_2_result;
}
function playerWon(){
  let winnerExist= false;
  if (checkColumn===''|| checkRow === '' || checkDiagionally === ''){
    continue;
  }
  if (checkColumn === checkRow && checkRow === checkDiagionally){
    winnerExist =true;
  }
}
if (winnerExist){
  statusDisplay.innerHTML =`Congratulations! ${playerTurn} is the Winner!`;
  return;
}
const NewGame =() => {
  boxes.forEach((space, i) =>{ 
    boxes[i] = null;
   });
   blocks.forEach((block) => { 
     block.innerHTML = '';
   });
   statusDisplay.innerHTML = "Move your mouse over a square and click to play an X or an O.";

}
}
