
//! Lab 4 bài 1


let listItems = [];
let itemCoffe = {
    name: "Cream Cheese Coffee", 
    model: "Coffe",
    cost: "30000 vnd",
    quantity: 4
};
let itemIceBlended = {
    name: "Ice Blended Matcha", 
    model: "Ice Blended",
    cost: "40000 vnd",
    quantity: 2
};
let itemSmoothies = {
    name: "Avocado Smoothies", 
    model: "Smoothies",
    cost: "45000 vnd",
    quantity: 1
};

listItems[0] = itemCoffe;                //TODO:  thêm object vào mảng
listItems[1] = itemIceBlended;
listItems[2] = itemSmoothies;

console.log(listItems);     //TODO: Xuất mảng ra console
for(let items of listItems){  //TODO: Xuất mảng ra console bằng for
    console.log(items);
}              

console.log("Quantity of item 3 is: "+listItems.pop().quantity); //TODO: Truy xuất quantity element của item thứ 3 

console.log("Name of item  is: "+listItems.shift().name);  //TODO: Lấy phần tử đầu tiên



 


