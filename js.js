var button = document.querySelector('button');
var box = document.getElementById('farve-box');

button.onclick = function changeColor(){
    if(box.style.background == 'red'){
     box.style.background = 'blue'
    }else{
     box.style.background = 'red'
    }
}