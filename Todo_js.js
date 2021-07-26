var btn = document.getElementById('button');
var input = document.getElementById('input');
var list = document.getElementById('list');
var cnt=1;

btn.addEventListener('click',clickbtn);

function clickbtn(){
    var tmp = document.createElement('li');
    tmp.innerHTML = input.value;
    list.appendChild(tmp);
    cnt++;
}
