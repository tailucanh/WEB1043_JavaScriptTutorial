
//! bài 4 lab 5
var windows = null
function openWindow(){
    windows =  window.open("",'Cửa sổ mới','toolbar=yes,menubar=yes,width=150,height=150');
    return false;
}

 function closeWindow(){
     windows.close();
    return false;
    
 }
 
 function checkWindow(){
     if(!windows){
        alert("Cửa sổ chưa được mở lần đầu!");
     }
    if(windows.closed){
        alert("Cửa sổ đã được đóng!");
    }else{
        alert("Cửa sổ chưa được đóng!");
    }

 }