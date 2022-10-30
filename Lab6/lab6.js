
//!Bài 1
const menus = document.querySelectorAll(".title");
const openText = document.querySelectorAll(".myText");
menus.forEach((element) => {
    element.addEventListener("click", (e) => {
        console.log(element.nextElementSibling);
        remove();
        element.nextElementSibling.classList.toggle("active");
    })
});
function remove() {
    openText.forEach((ele)=>{
        ele.classList.remove("active");
    })
}
//!Bài 2

var flag = true;
var count = 0;

function play(btn){
    btn.innerText = flag? "X" : "O" ;
    btn.classList.add(flag ? 'xbtn': 'obtn');
    btn.setAttribute('disabled','disable');
    flag = !flag;
    
    count++; 
 
    if(count == 7){
    alert("Game over!");
    location.reload(); 
} 
}

//! bài 3
var arr_img = [];
var index = 0;

function loadImg(){
    for(let i = 0; i < 5; i++){
        arr_img[i] = new Image();
        arr_img[i].src = "imgs/anh"+i+".jpg";
    }
}


function next(){  
    index++;
    if(index >= arr_img.length) {
        index = 0 ;
    }
    var anh =  document.getElementById("showImg");
    anh.src = arr_img[index].src;
}

function back(){
    index--;

    if(index < 0){
     index  = arr_img.length -1; 
    }
     document.getElementById("showImg").src = arr_img[index].src;
}

function first(){
    index = 0;
   document.getElementById("showImg").src = arr_img[index].src;
}

function final(){
    index = arr_img.length-1;
    document.getElementById("showImg").src = arr_img[index].src;

}
//! Bài 4

var output = document.querySelector(".output");
var message = document.querySelector(".message");

message.textContent = "Press To Start";
var box = document.createElement('div');
var game = {
    timer: 0,
    start: null
};
box.classList.add("box");
output.append(box);

function ranNum(max) {
    return Math.floor(Math.random() * max);
}

function addBox() {
    message.textContent = "Click it...";
    game.start = new Date().getTime();
    box.style.display = "block";
    box.style.left = ranNum(450) + 'px';
    box.style.top = ranNum(450) + 'px';
}

box.addEventListener('click',() => {
    box.textContent = "";
    box.style.display = "none";
    game.timer = setTimeout(addBox,ranNum(3000));
    if(!game.start){
        message.textContent = "Loading...";
    }else{
        var cur = new Date().getTime();
        var dur = (cur - game.start) / 1000;
        message.textContent = `It took ${dur} seconds to click`;
    }
});