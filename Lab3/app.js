
//! LAB 3 bài 1

function lab3_1() {
    try {
        var check = true;
        do {
            let a = prompt(" Nhập số a: ");
            let b = prompt(" Nhập số b: ");
            let o = prompt(" Nhập toán tử: ");


            if(a == "" || b == "" || o == ""){
                alert("Hãy nhập dữ liệu !");
            }else if(isNaN(a) || isNaN(b)){
                alert("Hãy nhập dữ liệu là số!");
            }else{
                a = Number(a);
                b = Number(b);
                switch (o) {
                    case "+":
                        alert(" Tổng hai số "+a+" và "+b+" là: "+ Number(a + b).toFixed(2));
                        break;
                    case "-":
                        alert(" Hiệu hai số "+a+" và "+b+" là: "+ Number(a - b).toFixed(2));
                        break;
                       
                    case "*":
                        alert(" Tích hai số "+a+" và "+b+" là: "+ Number(a * b).toFixed(2));
                        break;    
                    case "/":
                        alert(" Thương hai số "+a+" và "+b+" là: "+ Number(a / b).toFixed(2));
                        break;
                    default:
                        alert(o+" Không phải là toán tử ! Hãy nhập lại! ")
                        break;  
                }

            }
        
            let enter = confirm("Bạn có muốn nhập tiếp không ? Y/N: ");
            if(enter == true){
                check = true;
            }else{
                check = false;
            }
        } while (check);

    } catch (error) {
        alert("Error!");
       
    }
}
//! -------------------------------------------------------

//! LAB 3 bài 2  
function bangCuuChuong(n) {
    for(let i = 0; i <= 10; i++){
        alert(n +" * "+ i +" = "+ (n * i));
    }
   
}
function lab3_2() {
    try {
        var check = true;
        do {
            let n = prompt(" Nhập số từ 1 đến 10: ");

            if(n == "" ){
                alert("Hãy nhập dữ liệu !");
            }else if(isNaN(n)){
                alert("Hãy nhập dữ liệu là số!");
            }else if(Number(n) < 1 || Number(n) > 10){
                alert(n+" không thuộc khoảng [1,10]! Hãy nhập lại !")
                
            }else{
                n = Number(n);

                switch (n) {
                    case 1:
                        bangCuuChuong(n);
                        break;
                    case 2:
                        bangCuuChuong(n);
                        break;
                       
                    case 3:
                        bangCuuChuong(n);
                        break;    
                    case 4:
                        bangCuuChuong(n);
                        break;
                    case 5:
                        bangCuuChuong(n);
                        break;
                    case 6:
                        bangCuuChuong(n);
                        break;
                    case 7:
                        bangCuuChuong(n);
                        break;
                    case 8:
                        bangCuuChuong(n);
                        break;
                    case 9:
                        bangCuuChuong(n);
                        break;
                    case 10:
                        bangCuuChuong(n);
                        break;
                    default:
                        alert(n+" không thuộc khoảng [1,10]! Hãy nhập lại !")
                        break;  
                }

            }
        
            let enter = confirm("Bạn có muốn nhập tiếp không ? Y/N: ");
            if(enter == true){
                check = true;
            }else{
                check = false;
            }
        } while (check);

    } catch (error) {
        alert("Error!");
       
    }
}
//! -------------------------------------------------------
//! LAB 3 bài 3  

var a = null, b = null , o = null;
function thucHien() {
    switch (o) {
        case '+':
            var c = a +b;
            document.getElementById("output").innerHTML = "= "+c.toFixed(2);
            document.getElementById("hienThi").innerHTML = a + " + " + b;   
            resetData();
            break;
        case '-':
            var c = a - b;
            document.getElementById("output").innerHTML = "= "+c.toFixed(2);
            document.getElementById("hienThi").innerHTML = a + " - " + b;
            resetData();
            break;
        case 'x':
            var c = a * b;
            document.getElementById("output").innerHTML = "= "+c.toFixed(2);
            document.getElementById("hienThi").innerHTML = a + " x " + b;
            resetData();
            break;
        case '/':
            var c = a / b;
            if(b === 0){
                alert("Không có phép chia cho 0 !");
            }else{
                document.getElementById("output").innerHTML = "= "+c.toFixed(2);
                document.getElementById("hienThi").innerHTML = a + " / " + b;
                resetData();
            }

            break;    
        default:
            alert(o +" Không phải là toán tử")
            break;
    }
}

function toanHang(x){
    if(a == null){
        a = x;
        document.getElementById("hienThi").innerHTML = x;
    }else {
        b = x;
        document.getElementById("hienThi").innerHTML = x;
    }
}
function toanTu(x) {
    o = x;
    document.getElementById("hienThi").innerHTML = x;
}
function reset(){
    a = null;
    b = null;
    o = null;
   document.getElementById("output").innerHTML = "0.0";
   document.getElementById("hienThi").innerHTML = "";
}
function resetData(){
    a = null;
    b = null;
    o = null;
}


//! Lab 3 bài 4


function sprGame(yourChoise){

    var arr = ['Rock','Paper','Scissors']; 
    var computerRandom = arr[Math.floor(Math.random() * arr.length)];
    
    switch (yourChoise) {
        case 'rock':
            document.getElementById("yourchoise").innerHTML = "Rock";
            if(computerRandom === arr[0]){
                document.getElementById("computerChoise").innerHTML = "Rock";       
                document.getElementById("kq").innerHTML = "Hòa !";  
            }else if(computerRandom === arr[1]){
                document.getElementById("computerChoise").innerHTML = "Paper";
                document.getElementById("kq").innerHTML = "Bạn thắng !";  
            }else{
                document.getElementById("computerChoise").innerHTML = "Scissors";
                document.getElementById("kq").innerHTML = "Bạn thua !"; 
            }
            break;
        case 'paper':
             document.getElementById("yourchoise").innerHTML = "Paper";
            if(computerRandom === arr[0]){
                if(computerRandom === arr[0]){
                    document.getElementById("computerChoise").innerHTML = "Rock";       
                    document.getElementById("kq").innerHTML = "Bạn thua !";                         
                }else if(computerRandom === arr[1]){
                    document.getElementById("computerChoise").innerHTML = "Paper";       
                    document.getElementById("kq").innerHTML = "Hòa !";  
                   
                }else{
                    document.getElementById("computerChoise").innerHTML = "Scissors";
                    document.getElementById("kq").innerHTML = "Bạn thắng !"; 
                }
            }
                break;    
        case 'scissors':
            document.getElementById("yourchoise").innerHTML = "Scissors";
            if(computerRandom === arr[0]){
                document.getElementById("computerChoise").innerHTML = "Rock";       
                document.getElementById("kq").innerHTML = "Bạn thua !";    
                             
            }else if(computerRandom === arr[1]){
                document.getElementById("computerChoise").innerHTML = "Paper";       
                document.getElementById("kq").innerHTML = "Bạn thắng !";  
                
            }else{
                document.getElementById("computerChoise").innerHTML = "Scissors";
                document.getElementById("kq").innerHTML = "Hòa !"; 
                
            }
            break;    
            
        default:
            alert("Error!!!!");
            break;
    }
}


