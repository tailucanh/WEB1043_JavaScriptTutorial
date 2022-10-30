

function tínhToan() {
    try {
        var check = true;
        do {
            let a = prompt(" Nhập số a: ");
            let b = prompt(" Nhập số b: ");
            
            if(a == "" || b == "" ){
                alert("Hãy nhập dữ liệu !");
            }else if(isNaN(a) || isNaN(b)){
                alert("Hãy nhập dữ liệu là số!");
            }else{
                a = Number(a);
                b = Number(b);
                alert("Tổng của "+a+" và "+b+" là : "+Number(tinhTong(a,b)).toFixed(2));
                alert("Hiệu của "+a+" và "+b+" là : "+Number(tinhHieu(a,b)).toFixed(2));
                alert("Tích của "+a+" và "+b+" là : "+Number(tinhTich(a,b)).toFixed(2));
                alert("Thương của "+a+" và "+b+" là : "+Number(tinhThuong(a,b)).toFixed(2));
                alert("UCLN của "+a+" và "+b+" là : "+Number(ucln(a,b)).toFixed(2));
                alert("BCNN của "+a+" và "+b+" là : "+Number(bcnn(a,b)).toFixed(2));

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



function tinhTong(a,b) {
    return a + b;
}

function tinhHieu(a,b) {
    return a  - b;
}

function tinhTich(a,b) {
    return a * b;

}

function tinhThuong(a,b) {
    return a / b;
}
function ucln(a,b) {
    if(a < 0 || b < 0){
        return 0;
    }else {
        while(a != b){
            (a > b) ? a -= b: b -= a;
        }
        return a;
    }
}
function bcnn(a,b) {
    let temp = (a > b) ? a : b;
    while(true){
        if(temp % a == 0 && temp % b ==0){
           break; 
        }
        temp++;
    }
    return temp;
    
}
 


