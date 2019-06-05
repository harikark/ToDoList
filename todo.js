var buttonAdd = document.getElementById('but1');
var buttonRemove = document.getElementById('but2');

var ul = document.getElementById('myUl');

function addLi() {
var newLi = document.createElement('li');
var removeThis = document.createElement('button');
var textInput = document.getElementById('inputText').value;
if(textInput === ""){
 alert('Add text');
}else{
newLi.innerHTML = textInput;
newLi.appendChild(removeThis);
removeThis.innerHTML = "X";
removeThis.setAttribute("onClick", "removeMe(this);");
ul.appendChild(newLi);
 }  
}

buttonAdd.onclick = function() {
 addLi(); 
};

buttonRemove.onclick = function() {
 ul.innerHTML = "";
};

function removeMe(item){
  var parent = item.parentElement;
  parent.parentElement.removeChild(parent);
}

removeThis.onclick = removeMe;
