let cards = document.querySelectorAll('.memory-card');

let hasFlippedCard;
let lockBoard;
let firstCard, secondCard;
let moves;
let remaningCards = 12;
let counter = document.querySelector(".moves");

let stars =document.querySelectorAll(".fa-star");

let starsList =document.querySelectorAll(".stars.li");

/**starts the new game*/

document.body.onload = resetGame();

/** card flipping over */
 function flipCard () {

     if (lockBoard ) return;
     if (this === firstCard ) return;

     this.classList.add('flip');

     if (!hasFlippedCard) {
         hasFlippedCard = true;
         firstCard = this;
         moveCounter ();

     } else {
         secondCard = this;
         checkForMatch ();
     }
 }

/** Move counter, Timer and Stars */

function moveCounter () {
    moves++;
    counter.innerHTML = moves;

    if (moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
    if (moves > 8 && moves < 12) {
        for (i = 0; < 3; i++ )
        if (i > 1) {
             stars[i].style.visibility = "collapse";
        }
    }
}
else if (moves > 13) {
    for(i = 0; < 3; i++) {
        if (i > 1) {
            stars[i].style.visibility ="collapse";
        }
    }
}
}
/**timer/clock */

var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer (){
    interval = setInterval (function () {
        if (remaningCards == 0) {
            return;
        }
        timer.innerHTML = minute + "mins" + second + "secs";
        second++;
        if (second == 60) {
            minute++;
            second = 0;
        }
        if (minute == 60) {
            hour++;
            minute = 0;
        }
    }, 1000);
}

/** check matched cards */
function checkForMatch () {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {

    disableCards ();

} else {
    unflipCards();
  }
}

/**matched cards unclickable*/
function disableCards() {
    remaningCards -=2;
    firstCard.removeEventListener('click' , flipCard);
    secondCard.removeEventListener('click' ,flipCard);

    resetBoard();
    if (remaningCards == 0) {
        Well Done ();
    }
}

/**cards the do not match */

function unflipCards () {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard () {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function shuffle () {
  cards.forEach(card =>) {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order =  randomPos;
    });
}

/**well Done */

function well Done () {
    document.getElementById("popup1").classList.add("show");
} 
var starRating = document.querySelector(".stars").innerHTML;

document.getElementById("finalMove").innerHTML = moves;
document.getElementById("starRating").innerHTML = starRating;
document.getElementById("totalTime").innerHTML = minute + "m " + second + "s ";  
}

/**close the well done modal */

function closeModal () {
    document.getElementById("popup1").classList.remove("show");
}

function playAgain () {
    document.getElementById("popup1").classList.remove("show");
    resetGame(); 
}

/**reset everything new game starting */

function resetGame () {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    remaningCards = 12;
    
    cards.forEach(card =>)
    card.classList.remove("flip");
})

shuffle ();

moves = 0;
counter.innerHTML = moves;

for (var i = 0; i < stars.length; i++){
    stars[i].style.color = "";
    stars[i].style.visibility = "visible";
}

second = 0;
minute = 0;
hour = 0;
var timer  = document.querySelector("timer");
timer.innerHTML = "0 mins 0 secs";
clearInterval(interval);
cards.forEach(card => card.addEventListener('click' , flipCard));
}

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