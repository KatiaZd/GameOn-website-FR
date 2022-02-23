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
const closeModal = document.querySelector(".close");  // Fermeture de la modale
const firstName = document.querySelector("input[name=first]");
const lastName = document.querySelector("input[name=last]");
const email = document.querySelector("input[name=email]");
const birthdate = document.querySelector("input[name=birthdate]");
const quantity = document.querySelector("input[name=quantity]");



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}


// Fermeture de la modale
function closeFormModal() {
  modalbg.style.display = "none";
}
// Fermeture au click
closeModal.addEventListener("click", closeFormModal);

/* Validation formulaire */

// Validation firstName
function firstNameValidation() {
  if (firstName.value === "") {
    firstName.classList.add("input-error");
    firstName.classList.remove("input-validate");
    firstError.innerHTML = "Veuillez saisir au minimum 2 caractères";
    return false;
  } 
  else if (regexName.test(firstName.value) === false) {
    firstName.classList.add("input-error");
    firstName.classList.remove("input-validate");
    firstError.innerHTML = "Format incorrect";
    return false;
  } 
  else {
    firstName.classList.remove("input-error");
    firstName.classList.add("input-validate");
    firstError.innerHTML = "";
    return true;
  }
}

// Validation lastName 
function lastNameValidation() {
  if (lastName.value === "") {
    lastName.classList.add("input-error");
    lastName.classList.remove("input-validate");
    lastError.innerHTML = "Veuillez saisir au minimum 2 caractères";
    return false;
  } 
  else if (regexName.test(lastName.value) === false) {
    lastName.classList.add("input-error");
    lastName.classList.remove("input-validate");
    lastError.innerHTML = "Format incorrect";
    return false;
  } 
  else {
    lastName.classList.remove("input-error");
    lastName.classList.add("input-validate");
    lastError.innerHTML = "";
    return true;
  }
}

// Validation email
function emailValidation() {
  //General email regex, RFC 5322
  let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (email.value.trim() === "") {
    email.classList.add("input-error");
    email.classList.remove("input-validate");
    emailError.innerHTML = "Veuillez saisir votre adresse mail";
    return false;
  } 
  else if (regexMail.test(email.value) == false) {
    email.classList.add("input-error");
    email.classList.remove("input-validate");
    emailError.innerHTML = "Format incorrect";
    return false;
  } 
  else {
    email.classList.remove("input-error");
    email.classList.add("input-validate");
    emailError.innerHTML = "";
    return true;
  }
}

// Validation birthdate
// Validation quantity
// Validation city
// Validation case à cocher

// Validation formulaire si tout est ok


// Ouverture si formulaire ok