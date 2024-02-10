/*    JavaScript 7th Edition
      Chapter 3
      Project 03-04

      Application to write a list of customer reviews
      Author: Shyam Prasad Reddy Mu
      Date:   2/09/2024

      Filename: project03-04.js
*/

let reviewers = ["WillHa85", "GoldFry26", "Mittens41", "Tompkins8"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 2, 1, 4];
let reviewDates = ["11/18/2024", "11/17/2024", "11/15/2024", "11/10/2024"];
let reviews = [
   "I've owned all of the Dance Off games from the beginning. I have lost 6 pounds since I started playing.",
   "A so-so release of this well-established game. Where this release fails is in the choreography. Many of the moves follow predictable patterns. I hope the next release improves the choreography .",
   "The installation was buggy and kept crashing my gaming console. I spent several hours on tech support with no solution to my problem. I finally returned it and got my money back. I wish I could give it a zero star rating.",
   "The latest version of Dance Off improves upon the 8th Edition only slightly; still is one of the best dance-style games on the market.",
];
let reviewTitles = ["My Favorite Workout Game", "Poor Choreography", "Buggy with Poor Tech Support", "Nice Improvement"];

window.onload = function() {

      const arti = document.getElementsByTagName("article")[0];

      for(let i = 0; i < reviews.length; i++){

            const tbl = document.createElement("table");

            if(reviewType[i]=="P"){
                  tbl.className = "prime";
            } else if(reviewType[i]=="N"){
                  tbl.className = "new";
            }

            const caption = document.createElement("caption");
            caption.textContent = reviewTitles[i];
            tbl.appendChild(caption);

            const reviewByRow = document.createElement("tr");
            reviewByRow.innerHTML = `<th>By</th>
            <td>${reviewers[i]}</td>`;
            tbl.appendChild(reviewByRow);

            const reviewDate = document.createElement("tr");
            reviewDate.innerHTML = `<th>Review Date</th>
            <td>${reviewDates[i]}</td>`;
            tbl.appendChild(reviewDate);

            const rating = document.createElement("tr");
            rating.innerHTML = `<th>Rating</th>`;
            const starImage = document.createElement("td");
            for(let j = 0; j < stars[i]; j++){
                  
                  starImage.innerHTML += "<img src='star.png'>";
                  
            }
            rating.appendChild(starImage);
            tbl.appendChild(rating);

            const review = document.createElement("td");
            review.colSpan = 2;
            review.innerHTML = `<p>${reviews[i]}</p>`;
            tbl.appendChild(review);
            

            arti.appendChild(tbl);
      }
}
