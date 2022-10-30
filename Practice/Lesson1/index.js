alert("I love Tai smile");   // cảnh báo của trang web lên thanh tìm kiếm


console.log("I am Smile");     // hiển thị cảnh báo của trang web vào bảng điều kiển

//const- hằng số

var age = 18;  //Khai báo biến
var myName = "lục Anh Tài";
var online = true;  //false
var whatever = null; //không gán giá trị
//whatever = 32;

age = age + 1;  //Cộng giá trị,nối chuỗi

console.log("Age:",age);
console.log("My name is:",myName);
console.log("Are you online:",online);
console.log(whatever);

//-----------------------------------------------//

/* Toán tử + - * / %
+= , -=, *=, /=, %=,**= (luỹ thừa)

*/

//Cảnh báo nhập dữ liệu

//var name1 = window.prompt("Nhập tên của bạn.");
//console.log("Hello ",name1);

/* Chuyển đổi kiểu dữ liệu cho nhau
    var = myVar;
    myVar = Number("3.24");
    myvar = String(3.14);
    myVar = Boolean("Pizza");

    console.log(typeof myVar); - kiểm tra kiểu dữ liệu
    console.log(myvar);
*/


//Tham chiếu đến dữ liệu HTML
document.getElementById("mybutton").onclick = function(){

    var Name = document.getElementById("myName").value;  //Xuất giá trị nhập từ HTML vào console
    console.log("Hello ",Name);
} 

console.log("----------- Hàm ----------");

//!--------------Hàm - funcitons-------------------//

var name2 = "Smile";  //biến toàn cục

function sayHello(name, age){  //TODO: truyền đối số cho hàm
    console.log("Hello", name);  //TODO: truy cập biến toàn cục
    console.log("You are ",age,"year old. ");

};
sayHello("Tai",21);


function tinhToan(f){
    var result = (f*2) + (f/4);
    return result;

    //TODO: return (f*2) + (f/4);
};
var x = tinhToan(30);
console.log("Kết quả: ",x);

function nhietDo(c){    //TODO: Hàm đổi độ C sang F
    return (c * 9/5) + 32;
};
var y = nhietDo(20.7);
console.log("Đổi từ độ C sang F:",y,"*C");
console.log("----------Các đối tượng-----------");

//!--------------Các đối tưỢng - Objects-------------------//
var human ={
    name3 : "Tài",          //TODO: Khai báo thông tin
    tuoi: 18,
            
    eat : function(){          
        console.log("Tài thích ăn cá.");
    },

    drink : function(){                        //TODO: Khai báo các hàm thông tin về đối tượng
        console.log("Tài thích uống cà phê.");
    },

    sleep: function(){
        console.log("Tài ngủ lúc 12h đêm.");
    }

};
//?ruy cập từng thuộc tính
//?human.name3; hoặc human['name3'];
//?Truy cập thông tin chính
console.log(human.name3);  
console.log(human.tuoi);  
//Truy cập thông tin phụ
human.eat();
human.drink();
human.sleep();

//--------------Mảng - Arrays-------------------//
console.log("----------Mảng-----------");

var cars = ["Lambo", "foreRand", "Ronrol"];

cars.push("Tesla");  //Thêm phần tử trong mảng 
cars.pop();         //xoá phẩn tử cuối cùng trong mảng
var number = cars.length;      //Số lượng phần tử trong mảng

//cars = cars.sort();        //Xắp xếp phần tử theo thứ tự chữ cái hoặc số
//cars = cars.reverse();    //Xắp xếp ngược 1 mảng

var last = cars[cars.length-1];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log("Có ",number,"phàn tử trong mảng");
console.log(cars);
console.log("Phần tử cuối trong mảng là: ",last);

//--------------if - else-------------------//
console.log("----------Điều kiện - If-----------");

var age2 = 65;
if(age2 >= 18 && age2 <= 65){
    console.log("Bạn đã trưởng thành");
}else if(age2 < 18 && age2 > 0){
    console.log("Bạn là con nít");
}else if(age2 > 65){
    console.log("Bạn đã già.");
}else{
    console.log("Bạn chưa được sinh ra.");
}
var online1 = true;
if(online1){
    console.log("Bạn đang online.");
}else{
    console.log("Bạn đang offline.")
}

/* toán tử == kiểm tra giá trị của tham số mà không kiểm tra kiểu dữ liệu
          === kiểm tra cả hai thứ.*/
console.log("--------Vòng lặp----------");
//---------------- Vòng lặp WHILE--------------------//
/*
var numberPhone = window.prompt("Nhập số điện thoại của bạn: ");
while (numberPhone == ""){
    numberPhone = window.prompt("Nhập số điện thoại của bạn: ");
}
 */

/*do{
  var numberPhone = window.prompt("Nhập số điện thoại của bạn: ");
}while(numberPhone == "");
*/

console.log("Cảm ơn bạn đã nhập.");

//---------------- Vòng lặp for--------------------//

for(let i = 0; i < 3; i++){
    console.log(i);
}

//--------------Vòng lặp for trong mảng-------------//
var letters =["a","b","c"];
/*
for(let i = 0; i < letters.length;i++){
    console.log(letters[i]);
}
*/ //cách rút gọn
for (let i in letters){
    console.log(letters[i]);
}

//--------------Vòng lặp for lồng nhau------------//
//var input = window.prompt("Nhập kí tự");
//var rows = window.prompt("Nhập số hàng");
//var columns = window.prompt("NhậP số cột");

/*
for(let i = 0; i< rows;i++){
    for(let j = 0; j < columns;j++){
       // console.log(input);
       document.getElementById("myFor").innerHTML += input;  //hiện lên trang HTML
    }
    document.getElementById("myFor").innerHTML += "<br>##";  //Ngắt dòng theo hàng cột#

} */
console.log("------Hàm toán học---------");
//--------------Hàm toán học-----------//

/* 
 Math.round(3.5); - làm tròn theo 5
 Math.floor(3.9); - làm tròn xuống
 Math.celi(3.2); - làm tròn lên
 Math.pow(3, 4); - luỹ thừa
 Math.sqrt(43); - căn bậc hai
 Math.abs(-2); - trị tuyệt đối
 Math.min or max(1,5,8,43,6);
 Math.PI; - số Pi
 Math.E; - số E 
*/


var a = 4;
var b = 5;
var c;
c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
console.log("C = ", c);

