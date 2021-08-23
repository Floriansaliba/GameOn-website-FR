

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

//////////////////////////////////////////////////////////////////////////////////////////////  validation du formulaire 

//DOM elements
// span "error"
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");
const error4 = document.getElementById("error4");
const error5 = document.getElementById("error5");
const error6 = document.getElementById("error6");
const error7 = document.getElementById("error7");

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



// EVENT VALIDATION FORM 

const form = document.querySelector("#formula")
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  let count =0; 

  // CLEAR ALL ERROR MESSAGES

  error1.textContent="";
  error2.textContent="";
  error3.textContent="";
  error4.textContent="";
  error5.textContent="";
  error6.textContent="";
  error7.textContent="";

  

  // FIRST NAME VALIDATION
 
  if(!first.value){
    error1.textContent= "Veuillez entrer votre prénom";
  }

  else{
    count++;
  }
  

   // LAST NAME VALIDATION

  if(!last.value){
    error2.textContent= "Veuillez entre votre nom";
  }

  else{
    count++;
  }

  // EMAIL VALIDATION

  if(!email.value){
    error3.textContent= "Veuillez entre votre e-mail";
  }

  else{
    count++;
  }

  // BIRTHDAY DATE VALIDATION

  if(!birth.value){
      error4.textContent= "Veuillez entrer votre date de naissance";

  }

  else{
    count++;
  }

  // NUMBER OF TOURNAMENTS VALIDATION
  
  if(!quantity.value){
      error5.textContent = "Veuillez entrer un nombre";
  }

  else{
    count++;
  }


  // CITY VALIDATION

  if(!newYork.checked && !seatle.checked && !chicago.checked && !boston.checked && !portland.checked ) {
    error6.textContent = "Veuillez sélèctionner une ville";
  }

  else{
    count++;
  }

  // CONDITIONS VALIDATION

  if(!conditions.checked) {
    error7.textContent = "Veuillez accepter les conditions d'utilisation";
  }

  else{
    count++;
  }

  // DON'T APPLY THE PREVENT DEFAULT IF ALL PREVIOUS CONDITIONS ARE VALIDATED

  if(count===7){
   
  // Replace the submit button text
    const submitBtn = document.getElementsByClassName("btn-submit")[0]
    submitBtn.value = "Fermer"

 
  

  // Insert the validation text
    const confirm = document.createElement("p")
    confirm.textContent = "Merci d'avoir soumis vos détails d'enregistrement"
    form.appendChild(confirm)

  // Put the validation text before the button
    form.insertBefore(confirm, submitBtn)

  //delete inputs 
    const inputs = document.querySelectorAll(".formData")
    const label = document.getElementsByClassName("text-label")[0]

    inputs[0].style.display = "none"
    inputs[1].style.display = "none"
    inputs[2].style.display = "none"
    inputs[3].style.display = "none"
    inputs[4].style.display = "none"
    inputs[5].style.display = "none"
    inputs[6].style.display = "none"
    label.style.display = "none"

  // Keep the height of the modal and ajust elements inside
    const content = document.getElementsByClassName("content")[0]
    content.style.height = "605.750px"
    confirm.style.height = "496px"
    confirm.style.textAlign = "center"
    confirm.style.paddingTop = "100px"

    

 // close modal if user click on "close" button
  submitBtn.addEventListener('click', closeModal);
  }
})



  


