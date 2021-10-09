

window.onload = function(){
var blocks = document.getElementById("board").childNodes;
blocks.forEach(childparam => {childparam.className = "square";} )

const spaces =[];
const classX ='x';
const classO = "o";
let circlePlayer = classO;

blocks.forEach(elem =>{elem.addEventListener('click', isClick)
})
function isClick(e){
    const space = e.target;
    space.textContent = 'X'; 
    space.classList.add('X');
    console.log('button clicked');
}

blocks.forEach(function(elem, index, list) {
    elem.addEventListener('mouseover', function(e){
        e.target.classList.add('hover');
    });

    elem.addEventListener('mouseout', function(e){
        e.target.classList.remove('hover');
    })
}) 
}


