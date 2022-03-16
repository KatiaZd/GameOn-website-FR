/* AFFECTATION DES CONSTANTES AU DOM */

const modalbg = document.querySelector(".bground");           // Modale formulaire
const modalBtn = document.querySelectorAll(".modal-btn");     // Bouton "Je m'inscrit"
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelector(".close");          // Fermeture de la modale
const firstName = document.querySelector("input[name=first]");
const lastName = document.querySelector("input[name=last]");
const email = document.querySelector("input[name=email]");
const birthdate = document.querySelector("input[name=birthdate]");
const quantity = document.querySelector("input[name=quantity]");
const city = document.querySelector("input[type=radio]");       
const user = document.querySelector("input[type=checkbox]");
const modalMessageThanks = document.querySelector("#messageThanks");  // Modale finale de remerciement
const closeThanks = document.querySelector(".closeThanksBtn");
//const formData = document.querySelectorAll(".formData");


/* ECOUTE DES EVENEMENTS */

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  // Ouverture de la modale
closeModal.addEventListener("click", closeFormModal); // Fermeture de la modale au click
firstName.addEventListener("input", firstNameValidation);
lastName.addEventListener("input", lastNameValidation);
email.addEventListener("input", emailValidation);
birthdate.addEventListener("input", birthdateValidation);
quantity.addEventListener("input", quantityValidation);
city.addEventListener("radio", cityValidation);
user.addEventListener("input", userValidation);
modalMessageThanks.addEventListener("click", modalThanks);


/* FONCTIONS OUVERTURE/FERMETURE DE LA MODALE */

// fonction ouverture de la modale
function launchModal() {
  modalbg.style.display = "block";
  modalMessageThanks.style.display = "none";  //Modale de remerciement n'apparait pas en dessous du formulaire
}

// fonction fermeture de la modale
function closeFormModal() {
  modalbg.style.display = "none";
}


/* RESPONSIVE, MENU BURGER */
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/* FONCTIONS DES INPUTS */

// fonction firstName
function firstNameValidation() {
  let regexName = /^[A-Za-zÀ-ÿ-']{2,20}$/;

  if (firstName.value >=2 ) {
    firstName.classList.add("input-error");
    firstName.classList.remove("input-validate");
    firstNameError.innerHTML = "Veuillez saisir 2 caractères minimum";
    return false;
  } 
  else if (regexName.test(firstName.value) === false) { 
    firstName.classList.add("input-error");
    firstName.classList.remove("input-validate");
    firstNameError.innerHTML = "Format incorrect";
    return false;
  } 
  else {
    firstName.classList.remove("input-error");
    firstName.classList.add("input-validate");
    firstNameError.innerHTML = "";
    return true;
  }
}

// fonction lastName 
function lastNameValidation() {
  let regexName = /^[A-Za-zÀ-ÿ-']{2,20}$/;

  if (lastName.value >=2) {
    lastName.classList.add("input-error");
    lastName.classList.remove("input-validate");
    lastNameError.innerHTML = "Veuillez saisir 2 caractères minimum";
    return false;
  } 
  else if (regexName.test(lastName.value) === false) {    
    lastName.classList.add("input-error");
    lastName.classList.remove("input-validate");
    lastNameError.innerHTML = "Format incorrect";
    return false;
  } 
  else {
    lastName.classList.remove("input-error");
    lastName.classList.add("input-validate");
    lastNameError.innerHTML = "";
    return true;
  }
}

// fonction email
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

// fonction birthdate
function birthdateValidation() {
  const date = new Date("1940-01-01");
  const date1 = new Date("2020-01-01");
  const birthdateUser =  new Date(birthdate.value)
  if (birthdateUser <= date) {  
    birthdate.classList.add("input-error");
    birthdate.classList.remove("input-validate");
    birthdateError.innerHTML = "Veuillez saisir une date valide";
    return false;
  }

  else {
    birthdate.classList.remove("input-error");
    birthdate.classList.add("input-validate");
    birthdateError.innerHTML = "";
    return true;  
  }
}

// fonction quantity
function quantityValidation() {
  if (((quantity.value === "") != quantity.value <0) !=quantity.value > 99) {
    quantity.classList.add("input-error");
    quantity.classList.remove("input-validate");
    quantityError.innerHTML = "Veuillez choisir un nombre de 0 à 99.";    //Ligne 118 HTML
    return false; 
  }
  else {
    quantity.classList.remove("input-error");
    quantity.classList.add("input-validate");
    quantityError.innerHTML = "";
    return true;
  }
}


// fonction city
function cityValidation () {
  console.log(city.value);
  var checked = false
  for (let i = 0; i < city.length; i++) {
    if (city[i].checked) {
      checked = true;
      cityError.innerHTML = "Vous avez choisi" + city[i].value;
    }
  }
  if (checked == false); {     
    cityError.innerHTML = "Veuillez choisir une ville";
  
  }
}


// fonction conditions d'utilisation
function userValidation (){
  if (!user.checked) {
    checkedConditionError.innerHTML = "Pour participer au tournois, veuillez accepter les conditions d'utilisation.";
    return false;
  }
  else {
    checkedConditionError.innerHTML = "";
    return true;
  }
}

// fonction formulaire si tout est ok

function validate() {
  let validate = true;

  if (!firstNameValidation()||!lastNameValidation()||!emailValidation()||
  !birthdateValidation()||!quantityValidation()||cityValidation()||!userValidation()) { 
    validation = false;
  }

  if (validation === true) {
    formError.innerHTML = "";
    form.reset();
    form.style.display = "none";
    modalThanks();
  } 
  else{
    formError.innerHTML = "Veuillez renseigner tous les champs";
  }
  return false;
}

/* Affichage de la modale finale */
function modalThanks() {
  modalMessageThanks.style.display = "block";
} 

