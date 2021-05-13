

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard;
let lockBoard;
let firstCard, secondCard;
let moves;
let remainingCards = 12;
let counter = document.querySelector(".moves");

const stars = document.querySelectorAll(".fa-star");

let starsList = document.querySelectorAll(".stars li");

/** Starts a new game */

document.body.onload = resetGame();


function flipCard() {

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classlist.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        moveCounter();

    } else {

        secondCard = this;
        checkForMatch();
    }
}

/** Move counter  timer */

 function moveCounter() {
     moves++;
     counter.innerHTML = moves;

     if (moves ==1) {
         second = 0;
         minute = 0;
         hour = 0 ;
         startTimer();
     } 

    if (moves > 8 && moves < 12) {
        for (i = 0; i < 3; i++) {
         if (i > i) {
             stars[i].style.visibility = "collapse";
         }
        }
    }

    else if (moves > 13) {
        for (i = 0; < 3; i++) {
            if (i > 0) {
               stars[i].style.visibility = "collapse"; 
            }
        }
    }
 } 

 /** timer and clock */

 var second = 0, minute = 0; hour = 0;
 var timer = document.querySelector(".timer");
 var interval;
 function startTimer() {
     interval = setInterval(function () {
         if (remainingCards ==0) {
             return;
         }
         timer.innerHTML = minute + "mins " + second + "secs";
         second++;
         if (second == 60) {
             minute++;
             second = 0;
         }
         if (minute == 60) {
             hour++;
             minute = 0;
         }
     }, 1000) ; 
 }

 /** two cards flipping over **/

 function checkForMatch() {

    if (firstCard.dataset.framework === secondCard.dataset.framework) {

        disableCards();
    } else {
        unflipCards(); 
    }
 }

 /** unclickable matched cards */

 function disableCards() {
     remainingCards -= 2;
      
     firstCard.removeEventListener('click' , flipCard);
     secondCard.removeEventListener('click',flipcard);
     
     resetBoard();
     if (remainingCards == 0) {
         Well Done();

     }
 }

 /**cards that do not match */

 function unflipCards() {

    lockBoard = true;

    setTimeout(() => {
        firstCard.classlist.remove('flip');
        secondCard.classlist.remove('flip');

        resetBoard();

    }, 1500);
 }

 function resetBoard() {
     [hasFlippedCard, lockBoard] = [false, false];
     [firstCard, secondCard] = [null, null];
 }

 /** cards being shuffled int new position */


 function shuffle() {
     cards.forEach(card =>) {
         let randomPos = Math.floor(Math.random()  * 12);
         card.style.order = randomPos;
     });
 } 

 /**Well done modal */

 function Well done () {
     
    document.getElementById("popup1").classlist.add("show");

    var starRating = document.querySelector(".stars").innerHTML;

    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("starRating").innerHTML = starRating;
    document.getElementById(totalTime).innerHTML = minute + "m " + second + "s ";

 }


 /**close the modal**/
 
 function closeModal () {
     document.getElementById("popup1").classlist.remove("show");
 } 
 