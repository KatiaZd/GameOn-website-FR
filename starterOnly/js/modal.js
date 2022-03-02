function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* AFFECTATION DES CONSTANTES AU DOM */

const modalbg = document.querySelector(".bground");           
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


/* ECOUTE DES EVENEMENTS */

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));  // Ouverture de la modale
closeModal.addEventListener("click", closeFormModal);
firstName.addEventListener("input", firstNameValidation);
lastName.addEventListener("input", lastNameValidation);
email.addEventListener("input", emailValidation);
//birthdate.addEventListener("input", birthdateValidation);
quantity.addEventListener("input", quantityValidation);
city.addEventListener("radio", cityValidation);
user.addEventListener("input", userValidation);


/* FONCTIONS OUVERTURE/FERMETURE DE LA MODALE */

// fonction ouverture de la modale
function launchModal() {
  modalbg.style.display = "block";
}

// fonction fermeture de la modale
function closeFormModal() {
  modalbg.style.display = "none";
}


/* FONCTIONS DES INPUTS */

// fonction firstName
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

// fonction lastName 
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
  for (let i = 0; i < cityValidation.lenghth; i++) 
  if (city[i].checked) {
    cityError.innerHTML = "Vous avez choisi" + city[i].value;
    cityError.style.color = "#279e7a";
    return true;
  }
  cityError.innerHTML = "Veuillez choisir une ville";
  cityError.style.color = "#e54858";
  return false;

}

// fonction conditions d'utilisation
function userValidation (){
  if (!user.checked) {
    conditionError.innerHTML = "Veuillez accepter les conditions d'utilisation";
    return false;
  }
  else {
    conditionError.innerHTML = "";
    return true;
  }
}

// fonction formulaire si tout est ok
function validate() {
  let validate = true;
 /* if (firstNameValidation()) { 

  }*/
  return validate
}

/* 
function globalValidation (){ (Si chq champs ok)
  let validation = true;
  if (!firstNameValidation()) {
    validation = false;
  }
  if


}

*/



// Ouverture si formulaire ok - block