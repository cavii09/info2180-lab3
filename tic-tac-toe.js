//document.querySelector("div").classList.add("square");
window.onload = function(){
var box = document.getElementById("board").childNodes;
box.forEach(childparam => {childparam.className = "square";} )
}