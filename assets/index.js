// Get the modal

var modal =document.getElementById("myModal");

//get the buton tah opens the modal 

var btn = document.getElementById("myBtn");

//Get the <span> elements that closes the modal

var span = document.getElementsByClassName("close")[0];

// when the user clicks the button , open modal

btn.onclick = function () {
    modal.style.display = "block";
}


