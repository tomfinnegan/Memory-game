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


