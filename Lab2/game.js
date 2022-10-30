//! bài 5
var x = 10 + Math.round(5 * Math.random());     // TODO: round: làm tròn số
var a = prompt(" Mời bạn chọn số: ");
if (a == x) {
    alert(" bạn đã đoán đúng!");
}else if( a > x){
    alert(a + " lớn hơn số bí mật !");
}else{
    alert(a + " bé hơn số bí mật !");
}