/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Shyam Prasad Reddy Musani
     Date:   2/09/2024

     Filename: js03.js
 */
let weekDays = ["Sunday","Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];



window.addEventListener("load", addWeekDays);
function addWeekDays(){
    let i = 0;
    let headingcells =  document.getElementsByTagName("th")
    while(i < 7) {
        headingcells[i].innerHTML = weekDays[i];
        i++;
    }
}

window.addEventListener("load", showGames);

function showGames() {
    for(let i = 0; i < gameDates.length; i++) {
        let gameInfo = "";
        switch(gameResults[i]) {
        case "W":
            gameInfo += "<p class='win'>";
            break;
        
        case "L":
            gameInfo += "<p class='lose'>";
            break;

        case "S":
            gameInfo += "<p class='suspended'>";
            break;
        
        case "P":
            gameInfo += "<p class='postponed'>";
            break;
            
         }

        


        gameInfo += gameOpponents[i] + "<br>";
        
        gameInfo += gameResults[i] + ": (" + runsScored[i] + "-" + runsAllowed[i] + ")" ;

        gameInfo += "</p>";

        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
    }
}