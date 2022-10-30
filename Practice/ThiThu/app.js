
var arr_img = [];
function loadImg() {
    for(let i = 0; i < 4; i++){
        arr_img[i] = new Image();
        arr_img[i].src = "Imgs/anh"+i+".jpg";
        document.getElementById("title").innerHTML = (index+1)+"/"+ (arr_img.length);
    }

}
var index = 0;
var myAuto;

function auto(){
    loadImg();
    index++;
     
     if(index == arr_img.length){
        index = 0;
     }
    document.getElementById("img").src = arr_img[index].src;
    myAuto = setTimeout(auto,1000);

}
function start(){
    auto();
}
function stop(){
    clearTimeout(myAuto);
    }

//
function dangki(){
    var ten = document.getElementById("name");
    var email = document.getElementById("email");
var flag = true;

    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if(ten.value == ""){
        document.getElementById("warningTen").innerHTML = " * Hãy nhập tên";
        flag = false;
    }else{
        document.getElementById("warningTen").innerHTML = " ";
    }  
    if(email.value == ""){
        document.getElementById("warningEmail").innerHTML = " * Hãy nhập  email";
        flag = false;
    }else if(!pattern.test(email.value)){
        document.getElementById("warningEmail").innerHTML = " * Hãy nhập tên email đúng định dạng";
        flag = false;
    }else {
        document.getElementById("warningEmail").innerHTML = "";
    }
    if(flag == true){
         alert("Thành công");
         return false;
    }

    return flag;

   



}
