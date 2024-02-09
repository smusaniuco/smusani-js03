/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: 
      Date:   

      Filename: project03-01.js
*/

let menuItem = document.getElementsByClassName("menuItem");

for(let i = 0; i < menuItem.length; i++) {
     menuItem[i].onclick = updateTotal;
}

function updateTotal() {
     let orderTotal = 0;

     for(var i = 0; i < menuItem.length; i++) {
           if(menuItem[i].checked) {
              orderTotal += Number(menuItem[i].value);   
           }
     }
     document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}

 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }




