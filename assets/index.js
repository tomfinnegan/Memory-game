// Get the modal

var modal =document.getElementById("myModal");

//get the buton that opens the modal 

var btn = document.getElementById("myBtn");

//Get the <span> elements that closes the modal

var span = document.getElementsByClassName("close")[0];

// when the user clicks the button , open modal

btn.onclick = function () {
    modal.style.display = "block";
}

// when the user clicks on <span> (x), close the modal

span.onclick = function (){
    modal.style.display = "none";
}

// when the user clicks anywhere outside the modal ,close it


window.onclick = function(event) {
    if(event.target == modal) {

       modal.style.display = "none";
    }
}

