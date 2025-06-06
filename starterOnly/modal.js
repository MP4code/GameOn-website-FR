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

// Form Data 

function formDataInput() {
  let Data = {};
  const firstName = formData[0].value;
  const lastName = formData[1].value;
  const email = formData[2].value;
  const birthdate = formData[3].value;
  const quantity = formData[4].value;
  const location = formData[5].value;
  const checkbox = formData[6].checked;
  Data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    birthdate: birthdate,
    quantity: quantity,
    location: location,
    checkbox: checkbox
  };
  return Data;
}

//validate
function validate(Data) {
  alert(Data + "Merci pour votre inscription");

}
