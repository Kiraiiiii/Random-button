var b = document.querySelector("#movingbutton");
b.addEventListener("click",change);

function change()
{
let i = Math.floor(Math.random()*500)+1;
let j = Math.floor(Math.random()*500)+1;
    b.style.left = i+'px';
    b.style.top = j + "px";
}