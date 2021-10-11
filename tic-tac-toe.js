// display the 3X3 grid game board
window.onload = function(){
var blocks = document.getElementById("board").childNodes;
blocks.forEach(childparam => {childparam.className = "square";} )

const statusDisplay = document.getElementById("status");
const btn = document.getElementById("New Game");

const boxes = [];
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
        e.target.classList.remove('hover'); }); 
    });
//Check for winner and update status
 // blocks.forEach(elem =>{elem.addEventListener('click', playerWon)  
    
  const playerWon = () => {
      if (boxes[0]=== playerTurn){
        if (boxes[1]=== playerTurn && boxes[2] ===playerTurn){
          console.log(`Congratulations! ${playerTurn} wins top`);
          return true;
        }
        if (boxes[3]=== playerTurn && boxes[6] === playerTurn){
          console.log(`Congratulations! ${playerTurn} wins left`);
          return true;
        }
        if (boxes[4]=== playerTurn && boxes[8] === playerTurn){
          console.log(`Congratulations! ${playerTurn} wins diagonally`);
          return true;
        }  
      }
      if (boxes[8]=== playerTurn){
        if (boxes[2]=== playerTurn && boxes[5] === playerTurn){
          console.log(`Congratulations! ${playerTurn} wins right`);
          return true;
          }
        if (boxes[6]=== playerTurn && boxes[7] === playerTurn){
          console.log(`Congratulations! ${playerTurn} wins bottom`);
          return true;
          }
        }
      if (boxes[4]===playerTurn){
        if (boxes[1]=== playerTurn && boxes[7] === playerTurn){
          console.log(`Congratulations! ${playerTurn} wins vertically in middle`);
          return true;
          }
        if (boxes[3]=== playerTurn && boxes[5] === playerTurn){
          console.log(`Congratulations! ${playerTurn} wins horizontally in middle`);
            return true;
          }
        if (boxes[2]=== playerTurn && boxes[6] === playerTurn){
          console.log(`Congratulations! ${playerTurn} wins diagionally`);
            return true;
          }  
        if (playerWon()){
           statusDisplay.innerHTML = `Congratulations! ${playerTurn} is the Winner!`;
           NewGame();
           return; }
    }
    };
 
   const NewGame =() => {
      boxes.forEach((space, i) =>{ 
        boxes[i] = null;
       });
       blocks.forEach((block) => { 
         block.innerHTML = '';
       });
       statusDisplay.innerHTML = "Move your mouse over a square and click to play an X or an O.";
     ;
   }
    //btn.addEventListener('click', NewGame);
    NewGame();
  };