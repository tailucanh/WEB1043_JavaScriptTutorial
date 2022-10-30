//! Tính cạnh huyền của tam giác bằng định lý Pythago.
function hypotenuse() {
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = Math.sqrt(a*a + b*b);
    alert("Hypotenuse equal to: "+ c.toFixed(2));
}


//!Tạo biến chứa giá trị mà mét vuông, chuyển đổi giá trị đó sang đơn vị sào, ha(hecta), mẫu
function convertUnit() {
    let m = document.getElementById("m").value;
    let sao = m / 360;
    document.getElementById("sao").innerHTML = sao.toFixed(2);
    let mau = m / 3600;
    document.getElementById("mau").innerHTML = mau.toFixed(2);
    let ha = m / 3600;
    document.getElementById("ha").innerHTML = ha.toFixed(2);
   
}
//! Bài 3 (2 điểm): Tính chỉ số BMI (kg/m2)
function caculateBMI(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let BMI = weight / (height*height);

    if(BMI < 18.5){
        alert(" Bạn đang thiếu cân !");
    }else if(BMI >= 18.5 && BMI < 25){
        alert(" Bạn rất bình thường !");
    }
    else if(BMI >= 25 && BMI < 30){
        alert(" Bạn đang thừa cân !");
    }else{
        alert(" Bạn đang bị béo phì !");
    }
}

//! Bài 4
const theList = ['Lauren', 'Kevin',true,35,null,undefined,'one', 'two'];
    console.log(theList);
    theList.splice(0,1);                     //? Xóa pt đầu tiên
    theList.pop();                          //? Xóa pt cuối cùng
    console.log(theList);
    theList.splice(0,0,"FIRST");             //? thêm vào đầu chuỗi
    console.log(theList); 
    theList.splice(3,0,"hello world");          //? thêm vào vị trí thứ 4
    console.log(theList); 
    theList.splice(2,0,"middle");              //? thêm vào vị trí thứ 3
    console.log(theList); 
    theList.push("LAST");                   //? thêm vào cuối mảng
    console.log(theList);  

let arr1 = [1,2,3];
let arr2 = [1,4,7];
let arr3 = arr1.concat(arr2);
console.log(arr3);





















