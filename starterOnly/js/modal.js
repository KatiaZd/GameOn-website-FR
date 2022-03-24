/* AFFECTATION DES CONSTANTES AU DOM */

const modalbg             = document.querySelector(".bground");               // Modale formulaire
const form                = document.querySelector("form[name=reserve]");     // Corps du formulaire
const modalBtn            = document.querySelectorAll(".modal-btn");          // Bouton "Je m'inscrit"
const formData            = document.querySelectorAll(".formData");           // Data-error
const closeModal          = document.querySelector(".close");                 // Fermeture de la modale
const firstName           = document.querySelector("input[name=first]");
const lastName            = document.querySelector("input[name=last]");
const email               = document.querySelector("input[name=email]");
const birthdate           = document.querySelector("input[name=birthdate]");
const quantity            = document.querySelector("input[name=quantity]");
const city                = document.querySelector("input[type=radio]");       
const user                = document.querySelector("input[type=checkbox]");
const modalMessageThanks  = document.querySelector("#messageThanks");           // Modale finale de remerciement
const closeThanks         = document.querySelector(".closeThanksBtn");          // Bouton "Fermer", modale final




/* ECOUTE DES EVENEMENTS */

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  // Ouverture de la modale
closeModal.addEventListener("click", closeFormModal);                   // Fermeture de la modale au click
firstName.addEventListener("input", firstNameValidation);
lastName.addEventListener("input", lastNameValidation);
email.addEventListener("input", emailValidation);
birthdate.addEventListener("input", birthdateValidation);
quantity.addEventListener("input", quantityValidation);
city.addEventListener("radio", cityValidation);
user.addEventListener("input", userValidation);
closeThanks.addEventListener("click", closeFormModal);



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

  if (firstName.value <=1 ) {
    firstName.classList.add("inputError");
    firstName.classList.remove("inputValidate");
    firstNameError.innerHTML = "Veuillez saisir 2 caractères minimum";
    return false;
  } 
  else if (regexName.test(firstName.value) === false) { 
    firstName.classList.add("inputError");
    firstName.classList.remove("inputValidate");
    firstNameError.innerHTML = "Veuillez saisir 2 caractères minimum";
    return false;
  } 
  else {
    firstName.classList.remove("inputError");
    firstName.classList.add("inputValidate");
    firstNameError.innerHTML = "";
    return true;
  }
}

// fonction lastName 
function lastNameValidation() {
  let regexName = /^[A-Za-zÀ-ÿ-']{2,20}$/;

  if (lastName.value <=1) {
    lastName.classList.add("inputError");
    lastName.classList.remove("inputValidate");
    lastNameError.innerHTML = "Veuillez saisir 2 caractères minimum";
    return false;
  } 
  else if (regexName.test(lastName.value) === false) { 
    lastName.classList.add("inputError");
    lastName.classList.remove("inputValidate");   
    lastNameError.innerHTML = "Format incorrect";
    return false;
  } 
  else {
    lastName.classList.remove("inputError");
    lastName.classList.add("inputValidate");
    lastNameError.innerHTML = "";
    return true;
  }
}

// fonction email
function emailValidation() {
  let regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (email.value.trim() === "") {
    email.classList.add("inputError");
    email.classList.remove("inputValidate");
    emailError.innerHTML = "Veuillez saisir votre adresse mail";
    return false;
  } 
  else if (regexMail.test(email.value) == false) {
    email.classList.add("inputError");
    email.classList.remove("inputValidate");
    emailError.innerHTML = "Format incorrect";
    return false;
  } 
  else {
    email.classList.remove("inputError");
    email.classList.add("inputValidate");
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
    birthdate.classList.add("inputError");
    birthdate.classList.remove("inputValidate");
    birthdateError.innerHTML = "Veuillez saisir une date valide";
    return false;
  }

  else {
    birthdate.classList.remove("inputError");
    birthdate.classList.add("inputValidate");
    birthdateError.innerHTML = "";
    return true;  
  }
}

// fonction quantity
function quantityValidation() {
  if (((quantity.value === "") != quantity.value <0) !=quantity.value > 99) {
    quantity.classList.add("inputError");
    quantity.classList.remove("inputValidate");
    quantityError.innerHTML = "Veuillez choisir un nombre de 0 à 99.";    
    return false; 
  }
  else {
    quantity.classList.remove("inputError");
    quantity.classList.add("inputValidate");
    quantityError.innerHTML = "";
    return true;
  }
}


// fonction city
function cityValidation() {
  var checked = false;
  for (let i = 0; i < city.length; i++) {
    if (city[i].checked) {
      checked = true;
    }
  }
  if (checked == false) {     
    cityError.innerHTML = "Veuillez choisir une ville";
  
  }
}

// fonction conditions d'utilisation
function userValidation(){
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
  var validation = true;

  if (!firstNameValidation()||!lastNameValidation()||!emailValidation()||
  !birthdateValidation()||!quantityValidation()||cityValidation()||!userValidation()) { 
    validation = false;
  }

  if (validation === true) {
    formError.innerHTML = "";           // Validation du form. = pas de message d'erreur
    form.reset();                       // Le form. se réinitialise (= s'efface)
    form.style.display = "none";        // Fermeture de la modale
    modalThanks();                      // Modale de remerciement s'affiche
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

