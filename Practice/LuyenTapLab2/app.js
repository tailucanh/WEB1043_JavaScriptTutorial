

//! Phương trình bậc 1

function PTB1() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;

    if(a == "" || b == ""){
        alert("Vui lòng nhập dữ liệu !");
    }else if(isNaN(a) || isNaN(b)){
        alert("Hãy nhập dữ liệu là số!")
    
    }else{
      
        if(a == 0){
            if(b == 0 ){
                alert("Phương trình có vô số nghiệm !");
                document.getElementById("kq").innerHTML = " Phương trình có vô số nghiệm !";
            }else {
                alert("Phương trình vô nghiệm !");           
                document.getElementById("kq").innerHTML = " Phương trình vô nghiệm !";
            }
        }else {
            alert("Phương trình có 1 nghiệm duy nhất !");        
            document.getElementById("kq").innerHTML =  "X = " + (-b/a).toFixed(3);

        }
    }
}

//! Phương trình bậc 2 
function PTB2(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    

    if(a == "" || b == "" || c == ""){
        alert("Vui lòng nhập dữ liệu !");
    }else if(isNaN(a) || isNaN(b) || isNaN(c)){
        alert("Hãy nhập dữ liệu là số!")
    
    }else{
        if(a == 0 ){
            if(b == 0 ){
                if(c == 0 ){
                    alert("Phương trình có vô số nghiệm !");
                    document.getElementById("kq").innerHTML = " Phương trình có vô số nghiệm !";
                }else{
                    alert("Phương trình vô nghiệm !");           
                    document.getElementById("kq").innerHTML = " Phương trình vô nghiệm !";
                }              
            }else{
                alert("Phương trình có 1 nghiệm duy nhất !");        
                document.getElementById("kq").innerHTML =  "X = " + (-c/b).toFixed(3);
            }
        }else{
            let delta = Math.pow(b,2) - 4*a*c;
            if(delta > 0){
                alert("Phương trình có 2 nghiệm phân biệt !");        
                document.getElementById("kq").innerHTML =  
                    " --> X1 = " +((-b + Math.sqrt(delta))/2*a).toFixed(3) + 
                    " --> X2 = " +((-b - Math.sqrt(delta))/2*a).toFixed(3) ;
            }else if(delta == 0 ){
                alert("Phương trình có nghiệm kép !");        
                document.getElementById("kq").innerHTML = "X = " +(-b/2*a).toFixed(3);
            }else {
                alert("Phương trình vô nghiệm !");           
                document.getElementById("kq").innerHTML = " Phương trình vô nghiệm !";
            }

        }

    }

}

//! Kiểm tra số nguyên tố

function soNguyenTo() {
    let n = document.getElementById("n").value;
   

    if(n == ""){
        alert("Vui lòng nhập dữ liệu !");
    }else if(isNaN(n)){
        alert("Hãy nhập dữ liệu là số!")  
    }else{
        if(n < 2){
            alert(n +" không phải là số nguyên tố !")
            document.getElementById("kq").innerHTML = n +" không phải là số nguyên tố !";
        }else {
            let checkNumber = true;
            for(let i = 2; i <= Math.sqrt(n); i ++){
                if(n % i == 0){
                    checkNumber = false;
                    break;
                }
            }
            checkNumber ?  alert(n +" là số nguyên tố !") : alert(n +" không là số nguyên tố !");
            checkNumber ?  document.getElementById("kq").innerHTML = n +"  là số nguyên tố !" 
                        :  document.getElementById("kq").innerHTML = n +" không là số nguyên tố !";

        }
      
    }
      
}

















