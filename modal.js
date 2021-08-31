// DOM Elements
// Arrière plan de la modale
const modalbg = document.querySelector(".bground");
// Bouton d'ouverture de la modale
const modalBtn = document.querySelectorAll(".modal-btn");
// Données de la modale
const formData = document.querySelectorAll(".formData");
// Bouton de fermeture de la modale
const closeBtn = document.getElementsByClassName('close');



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = 'none';
}
closeBtn[0].addEventListener('click', closeModal);

//Changer le nom de la classe de la barre de navigation sur version smartphone
function editNav() {
var x = document.getElementById("myTopnav");
  if (modalbg.style.display === "block"){
    x.className === "topnav"; 
    return 0;
  }
  
  else if(x.className === "topnav"){
    x.className += " responsive";
  } 
  
  else {
    x.className = "topnav";
  }
}

///////////////////////////////////////////////////////////////  validation du formulaire 

//DOM elements

//Modal form
const form = document.querySelector("#formula");

// formula inputs
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const newYork = document.getElementById("location1");
const seatle = document.getElementById("location2");
const chicago = document.getElementById("location3");
const boston = document.getElementById("location4");
const portland = document.getElementById("location5");
const conditions = document.getElementById("checkbox1");
const informed = document.getElementById("checkbox2");
const send = document.getElementById("send-formula");
const submitBtn = document.getElementsByClassName("btn-submit")[0]

// Table of error message
const tableErrors =[
  "Veuillez entrer votre Prénom",
  "Veuillez entrer au minimum deux caractères",
  "Veuillez entrer votre nom",
  "Veuillez entrer votre e-mail",
  "Veuillez entrer un e-mail valide",
  "Veuillez entrer votre date de naissance",
  "Veuillez entrer une date de naissance valide : jj / mm / aaaa",
  "Veuillez entrer un nombre",
  "Veuillez sélèctionner une ville",
  "Veuillez accepter les conditions d'utilisation"
]


// Inject span error into the form 

function createErrorMessage(errorMessage, parentNode){
  let spanError = document.createElement("span")
  spanError.classList.add("error")
  spanError.textContent = errorMessage
  parentNode.appendChild(spanError)
}

// Delete Error Messages function

function clearErrorMessages(parentNode){
  let spans = parentNode.getElementsByClassName("error")
  if (spans){
    for(let i=0; i< spans.length; i++){
      parentNode.removeChild(spans[i]);
    }
  }
  else{
    console.log ("validé")
  }

}

// Inputs table 
let inputsTable =[first,last,email,birth,quantity]
let checkBoxesTable =[newYork, seatle, chicago, boston, portland, conditions, informed]




// ELEMENTS OF VALIDATION MESSAGE BLOCk
const validation = document.getElementsByClassName("bground2")[0]
const closeConfirmation = document.getElementById("close-btn-confirmation")
const spanConfirmation = document.getElementsByClassName("close-confirmation")

// EVENT VALIDATION FORM 


form.addEventListener("submit", (e)=>{
  e.preventDefault()
  let count =0; 

  // Clean all error Messages
 for (let i=0; i<formData.length; i++){
  clearErrorMessages(formData[i])
 }

  // FIRST NAME VALIDATION
 
  if(!first.value){
    createErrorMessage(tableErrors[0], formData[0])
  }

  else if(first.value.length < 2){
    createErrorMessage(tableErrors[1], formData[0])
  }

  else {
    clearErrorMessages(formData[0])
    count ++;
  }

  

   // LAST NAME VALIDATION

  if(!last.value){
    createErrorMessage(tableErrors[2], formData[1])
  }

  else if(last.value.length < 2){
    createErrorMessage(tableErrors[1], formData[1])
  }

  else{
    clearErrorMessages(formData[1])
    count++;
  }

  // EMAIL VALIDATION

  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 

  if(!email.value){
    createErrorMessage(tableErrors[3], formData[2])
  }

  else if(!email.value.match(regexEmail)){
    createErrorMessage(tableErrors[4], formData[2])
  }

  else{
    clearErrorMessages(formData[2])
    count++;
  }


  // BIRTHDAY DATE VALIDATION
  const regexBirth = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  if(!birth.value){
    createErrorMessage(tableErrors[5], formData[3])

  }

  else if(!birth.value.match(regexBirth)){
    createErrorMessage(tableErrors[6], formData[3])
  }

  else{
    clearErrorMessages(formData[3])
    count++;
  }

  // NUMBER OF TOURNAMENTS VALIDATION
  
  if(!quantity.value){
    createErrorMessage(tableErrors[7], formData[4])
  }

  else{
    clearErrorMessages(formData[4])
    count++;
  }


  // CITY VALIDATION

  if(!newYork.checked && !seatle.checked && !chicago.checked && !boston.checked && !portland.checked ) {
    createErrorMessage(tableErrors[8], formData[5])
  }

  else{
    clearErrorMessages(formData[5])
    count++;
  }

  // CONDITIONS VALIDATION

  if(!conditions.checked) {
    createErrorMessage(tableErrors[9], formData[6])
  }

  else{
    clearErrorMessages(formData[6])
    count++;
  }

  // DON'T APPLY THE PREVENT DEFAULT IF ALL PREVIOUS CONDITIONS ARE VALIDATED

  if(count===7){
  validation.style.display = "block";
  closeModal();

  for (let i=0; i< inputsTable.length; i++){
    inputsTable[i].value = "";
  }

  for (let i=0; i< checkBoxesTable.length; i++){
    checkBoxesTable[i].checked = false;
  }
  }

})


 //////////////// CLOSE THE VALIDATION MESSAGE SECTION 

 function closeValidation() {
  validation.style.display = 'none';
}
closeConfirmation.addEventListener('click', closeValidation);
spanConfirmation[0].addEventListener('click', closeValidation);

  


