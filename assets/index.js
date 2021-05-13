

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard;
let lockBoard;
let firstCard, secondCard;
let moves;
let remainingCards = 12;
let counter = document.querySelector(".moves");

const stars = document.querySelectorAll(".fa-stars");

let starsList = document.querySelectorAll(".stars li");

/** start new game */

document.body.onload = resetGame();

/** card flipping */

function flipCard() {

    if (lockBoard) return;
    if ( this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        moveCounter();
    } else {
        secondCard = this;
        checkforMatch();
    }
}

/**move counter /timer/stars */

function moveCounter() {
    moves++;
    counter.innerHTML = moves;

    if (moves == 1) {
        second = 0;
        minute = 0;
        hour = 0;
        startTimer();
    }

    if (moves > 8 && moves < 12) {
        for (i = 0; i < 3; i++) {
            if (i > 1) {
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 13) {
        for (i = 0; i < 3; i++) {
            if (i > 0) {
                stars[i].style.visibility = "collapse";
            }
        }
    }
}

/** timer clock */

var second = 0, minute = 0; hour =0;
var timer = document.querySelector(".timer");
var interval;
function startTimer() {
    interval = setInterval(function () {
       if (remainingCards == 0) {
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
/**check for matching pair */


function checkforMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {

        disableCards();
    } else {
        unflipCards();
    }
}

/**unclickable */

function disableCards() {
    remainingCards -=2;

    firstCard.remove.EventListener('click', flipCard);
    secondCard.remove.EventListener('click', flipCard);

    resetBoard();
    if (remainingCards == 0) {
        congratulations();
    }
}

/**cards dont match */

function unflipCards() {

    lockBoard = true;

    setTimeout (() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];


}
/**cards being shuffled into new position */

function shuffle () {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}

/**well done modal */

function congratulations() {
  
    document.getElementById("popup1").classList.add("show");
    
    var starRating = document.querySelector(".stars").innerHTML;

    document.getElementById("finalMove").innerHTML = moves;
    document.getElementById("starRating").innerHTML = starRating;
    document.getElementById("totalTime").innerHTML = minute + "m " + second + "s ";
}

/**close icon */

function closeModal() {
    document.getElementById("popup1").classList.remove("show");
}

/** users to play again */

function playAgain() {
    document.getElementById("popup1").classList.remove("show");
    resetGame();

}

function resetGame() {
    hasFlippedCard = false;
    lockBoard = false;
    firstCard = null;
    secondCard = null;
    remainingCards = 12;

    cards.forEach(card => {
        card.classList.remove('flip');
    })

    shuffle();

    moves = 0;
    counter.innerHTML = moves;

    for (var i = 0; i < stars.length; i++){
        stars[i].style.color = "#";
        stars[i].style.visibility = "visible"; 
    }

    second = 0;
    minute = 0;
    hour = 0;
    var timer = document.querySelector(".timer");
    timer.innerHTML = "0 mins 0 secs";
    clearInterval(interval);
    cards.forEach(card => card.addEventListener('click' ,flipCard));

}
