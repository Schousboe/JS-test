var button = document.querySelector('button');
var box = document.getElementById('farve-box');

button.onclick = function changeColor(){
    if(box.style.background == 'red'){
        box.style.background = 'blue';
    }else if(box.style.background == 'blue'){
        box.style.background = 'green';
    }else if(box.style.background == 'green'){
        box.style.background = 'black';
    }else {
        box.style.background = 'red';
    }
}
