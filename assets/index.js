

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

    if (moves > 8 && moves < 12) {
        for (i = 0; i < 3; i++) {
         if (i > i) {
             stars[i].style.visibility = "collapse";
         }
        }
    }
}