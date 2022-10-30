//! Lab 5 bài 1
function display(){
    let pro = document.getElementById("pro");
    let name = pro.innerText;
    let price = pro.getAttribute("data-price");

    let qty = document.getElementById("quantity");
    let quantity = qty.value;
    
    let amount = price * quantity;
    document.getElementById("name").innerText = name;
    document.getElementById("amount").innerText = "$"+amount;

}


//!Lab 5 bài 2
function add(button){
    var row = button.parentElement.parentElement.cloneNode(true);
    var btnXoa = row.getElementsByTagName("button")[0];
    btnXoa.innerText= "Xóa";
    btnXoa.setAttribute("onclick",'remove(this)');

    document.getElementById("cart").appendChild(row); 
    sum();


}

function remove(button){
    var row2 = button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row2); 
    sum();

}
function sum() {
    var cart = document.getElementById("cart");
    var rows = cart.getElementsByTagName("tr"); 
    var tong = 0;
    for (var i = 0; i < rows.length; i++) {
     var cells = rows[i].getElementsByTagName("td");
     var price = cells[1].innerText.substr(1);
     tong += 1*price;
    } 

    document.getElementById("tong").innerText = "$"+tong; 
}
