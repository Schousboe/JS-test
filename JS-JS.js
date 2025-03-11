var button = document.querySelector('button');
var box = document.getElementById('farve-box');
var colors = ['red','blue','green','black','purple']

button.onclick = function changeColor(){
    if(box.style.background == colors[0]){
        box.style.background = colors[1];
    }else if(box.style.background == colors[1]){
        box.style.background = colors[2];
    }else if(box.style.background == colors[2]){
        box.style.background = colors[3];
    }else if(box.style.background == colors[3]){
        box.style.background = colors[4];
    }else{
        box.style.background = colors[0];
    }
}
