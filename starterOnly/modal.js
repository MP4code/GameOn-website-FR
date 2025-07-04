function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const form = document.querySelector('form[name="reserve"]');
const modalbg = document.querySelector(".bground");
const modalbgValidation = document.querySelector(".bgroundValidation");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalValidation = document.querySelector(".modal-validation");

const BtncloseModal = document.querySelector(".btn-submit");
BtncloseModal.addEventListener("click", validate);

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
  //informations
  const firstName = document.querySelector("#first");
  const lastName = document.querySelector('#last');
  const email = document.querySelector('#email');
  const birthdate = document.querySelector('#birthdate');
  const NbrTournoi = document.querySelector('#quantity');
  const checkbox1 = document.querySelector("#checkbox1");
  const radios = document.getElementsByName("locationTournoi");
  let checked = false;
  let formValid = true;
  // Vérification du prénom
  if (firstName.value.trim().length < 2) {
    formData[0].setAttribute("data-error-visible", "true");
    formValid = false;
  } else {
    formData[0].setAttribute("data-error-visible", "false");

  }
  // Vérification du nom
  if (lastName.value.trim().length < 2) {
    formData[1].setAttribute("data-error-visible", "true");
    formValid = false;
  }
  else {
    formData[1].setAttribute("data-error-visible", "false");
  }
  // Vérification de l'e-mail
  if (email.value.trim().length < 2) {
    formData[2].setAttribute("data-error-visible", "true");
    formValid = false;
  }
  else {
    formData[2].setAttribute("data-error-visible", "false");
  }
  // Vérification de la date de naissance 
  if (birthdate.value.trim() === "") {
    formData[3].setAttribute("data-error-visible", "true");
    formValid = false;
  }
  else {
    formData[3].setAttribute("data-error-visible", "false");
  }
  // Vérification du nombre de tournoi
  if (NbrTournoi.value.trim() === "") {
    formData[4].setAttribute("data-error-visible", "true");
    formValid = false;
  }
  else {
    formData[4].setAttribute("data-error-visible", "false");
  }
  // Vérification du Lieu du prochain tournoi
  for (let radio of radios) {
    if (radio.checked) {
      checked = true;
      break; // On sort dès qu’on en trouve un sélectionné
    }
  }

  if (checked) {
    formData[5].setAttribute("data-error-visible", "false");
    formValid = false;
  } else {
    formData[5].setAttribute("data-error-visible", "true");

  }
  // Vérification des conditions d'utilisation
  if (!checkbox1.checked) {
    formData[6].setAttribute("data-error-visible", "true");
    formValid = false;

  } else {
    formData[6].setAttribute("data-error-visible", "false");

  }

  // Afficher les informations dans la console
  console.log(firstName.value,
    lastName.value,
    email.value,
    birthdate.value,
    NbrTournoi.value,
    Array.from(radios).find(radio => radio.checked)?.value,
    checkbox1.checked);

  console.log("Validation du formulaire");

  // Afficher la modal de validation si tout est valide
  if (!formValid) {
    e.preventDefault();
    modalbg.style.display = "none";
    modalbgValidation.style.display = "block";
    modalValidation.style.display = "block";
  }
}
