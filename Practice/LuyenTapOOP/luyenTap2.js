
    
function showData(){
    let timkiemNc = document.getElementById("show");
    console.log(timkiemNc);
    let select = document.getElementById("select");
    console.log(select);

    let text = timkiemNc.innerHTML;
    if(text == 'Tìm kiếm nâng cao'){
        select.style.display = "block";
        timkiemNc.innerHTML = "Bỏ tìm kiếm nâg cao";
    }else {
        select.style.display = "none";
        timkiemNc.innerHTML = "Tìm kiếm nâng cao";
    }

}

