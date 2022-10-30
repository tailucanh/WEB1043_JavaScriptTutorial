//! Lab 4 bài 2

        let sv = {};
        sv.name = prompt("Nhập tên : ");
        sv.point = prompt("Nhập điểm : ");
       
        if(sv.name == "" || sv.point ==""){
            alert("Hãy nhập họ tên và điểm!")
            
        }else if(isNaN(sv.point)){               
            alert("Hãy nhập điểm là số !")
                
        }else {     

            sv.hienThi = function(){  
                document.getElementById("kq_name").innerHTML = "- Họ và tên: "+this.name;
                document.getElementById("kq_point").innerHTML = "- Điểm: "+this.point;
                if(this.point < 5){
                    this.hocLuc = " Trượt !"
                    document.getElementById("kq_hocLuc").innerHTML = "- Học lực: "+this.hocLuc;
                }else{
                    this.hocLuc = " Đậu !"
                    document.getElementById("kq_hocLuc").innerHTML = "- Học lực: "+this.hocLuc;
                }
            }
            
                  
        }
            
   



