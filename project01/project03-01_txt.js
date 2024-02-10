/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01
      
      Application to calculate total order total_cost
      Author: Shyam Prasad Reddy Musani
      Date: 2/09/2024
      
      Filename: project03-01.js
*/    


let chicken_item = 11.95;
let halibut_item = 13.95;
let hamburger_item = 10.95;
let salmon_item = 17.95;
let salad_item = 8.95;
window.onload = getform;
function getform(){
   let idc = document.getElementById('item1');
   idc.onclick = quote;
   let idh = document.getElementById('item2');
   idh.onclick = quote;
   let idb = document.getElementById('item3');
   idb.onclick = quote;
   let ids = document.getElementById('item4');
   ids.onclick = quote;
   let idsl = document.getElementById('item5');
   idsl.onclick = quote;
}

function quote() {
   let total_cost = 0;
   let chicken_call = document.getElementById('item1').checked;
   let halibut_call = document.getElementById('item2').checked;
   let hamburger_call = document.getElementById('item3').checked;
   let salmon_call = document.getElementById('item4').checked;
   let salad_call = document.getElementById('item5').checked;
   
   if(chicken_call){
         total_cost = total_cost + chicken_item;
   }

   if(halibut_call){
         total_cost = total_cost + halibut_item;
   }

   if(hamburger_call){
         total_cost = total_cost + hamburger_item;
   }

   if(salmon_call){
         total_cost = total_cost + salmon_item;
   }

   if(salad_call){
         total_cost = total_cost + salad_item;
   }
document.getElementById('billTotal').innerHTML = formatCurrency(total_cost);

}

 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }




