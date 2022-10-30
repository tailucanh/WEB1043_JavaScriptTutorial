

//! bài 4 lab 4

setTimeout(function dateTime(){
    let now = new Date();
    let d = now.getDate();
    let m = now.getMonth() + 1; //? Vì getMonth chạy từ 0 - 11
    let y = now.getFullYear();


    let h = now.getHours();
    let p = now.getMinutes();
    let s = now.getSeconds();
    document.getElementById("kq").innerHTML = d+"/"+m+"/"+y+" << >> "+h+" giờ "+p+" phút "+s+" giây ";
    location.reload();
},1000);


