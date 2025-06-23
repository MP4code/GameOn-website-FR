function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

//validate
function validate(e) {
  e.preventDefault();

  // Récupération des éléments du formulaire 
  const firstName = document.querySelector("#first");
  const lastName = document.querySelector("#last");
  const email = document.querySelector("#email");
  const birthdate = document.querySelector("#birthdate");
  const quantity = document.querySelector("#quantity");
  const selectedLocation = document.querySelector("#location");
  const checkbox = document.querySelector("#checkbox");

  if (firstName.value.trim() === "") {
    firstName.parentElement.setAttribute("data-error", "Le prénom est requis");
    firstName.parentElement.setAttribute("data-error-visible", "true");
  } else {
    firstName.parentElement.removeAttribute("data-error");
    firstName.parentElement.setAttribute("data-error-visible", "false");
  }


  if (lastName.value.trim() === "") {
    lastName.parentElement.setAttribute("data-error", "Le nom est requis");
    lastName.parentElement.setAttribute("data-error-visible", "true");
  } else {
    lastName.parentElement.removeAttribute("data-error");
    lastName.parentElement.setAttribute("data-error-visible", "false");
  }

}
