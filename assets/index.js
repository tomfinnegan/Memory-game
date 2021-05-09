// Reference w3Schools for the code for modal
///////////////////////////////////////////////


// Get the modal

var modal = document.getElementById("myModal");


// Get the button that opens the modal

var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal

var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

btn.onclick = function () {
    modal.style.display ="block";
}

// when the user clicks on <span> (x) , close the modal

span.onclick = function () {
    modal.style.display ="none"; 
}

// when the user clicks anywhere outside the modal, close it

window.onclick = function (event) {
    if (event.target == modal) {
        this.modal.style.display ="none";
    }
}
//calling cards from the html page
const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard;
let lockBoard;
let firstCard, secondCard;
let moves 
let remainingCards =12;
let counter= document.querySelectorAll(".moves");

const stars =document.querySelectorAll(".fa-stars");

let starsList = document.querySelectorAll(".stars li");


//start a new game
document.body.onload = resetGame ();

// card flipping 

function flipcard () {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flip");

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        moveCounter ();
    }else{
        secondCard = this;
        checkforMatch ();
    }
}

// move counter timer

function moveCounter () {
    moves++;
    counter.innerHTML = moves;

    if (moves ==1){
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }
    if (moves > 8 && moves < 12) {
        for (i = 0; i <3; i++){
            if (i >1) {
                stars[i].style.visibility = "collapse";

            }
        }
    }
    else if (moves >13) {
        for (i = 0; i < 3; i++){
            if (i > 0){

            }
        }
    }
}

// the timer

var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function startTimer () {
    interval = setInterval(function () {
        if (remainingCards == 0){
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
    } ,1000);
}

// check for match / two cards flipped 

function checkforMatch () {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards ();

    }else {
      unFlipCards ();
     }
    }

    function disableCards () {
        remainingCards -=2;

        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        resetBoard ();
        if (remainingCards == 0) {
            well done ();
        }
    }
//cards that don't match//

function unFlipCards () {
    lockBoard = true;

    setTimeout (() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        
        resetBoard() ;
    } , 1500) ;

}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

//cards shuffled into new place //

function shuffle () {
    cards.forEach(card => {
    let randomPos = Math.floor(Math.random()  * 12);
    card.style.order = randomPos;
    });
    }

//well done //

function well done () {
    document.getElementById("popup1") .classList.add("show");

    var starRating = document.querySelector(".stars") .innerHTML;
    
    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("starRating").innerHTML = starRating
    document.getElementById("totalTime").innerHTML = minute + "m" + second + "S";

}

function closeModal () {
    document.getElementById("popup1").classList.remove("show");
} 


function playAgain () {
    document.getElementById("popup1").classList.remove("show");
    resetGame ();
}


function resetGame () {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    remainingCards = 12;
  
    cards.forEach(card => {
        card.classList.remove("flip");
    })
}