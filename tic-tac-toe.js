window.onload = function(){
var blocks = document.getElementById("board").childNodes;
blocks.forEach(childparam => {childparam.className = "square";} )

const spaces = [];
const classO = 'O';
const classX = 'X';
let playerTurn = classX;

blocks.forEach(elem =>{elem.addEventListener('click', boxClicked)
})
function boxClicked(e){
    const space = e.target;
    space.innerHTML = playerTurn;
    space.classList.add('X');
    console.log('box clicked');
  playerTurn = playerTurn === classO ? classX : classO;
    }

blocks.forEach(function(elem, index, list) {
    elem.addEventListener('mouseover', function(e){
        e.target.classList.add('hover');
    });

    elem.addEventListener('mouseout', function(e){
        e.target.classList.remove('hover');
    })
}); 

};

