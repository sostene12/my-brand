import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getFirestore,collection, getDocs} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyCjyFxy8rFsU65og-sxgt9RPx8FEneTv9g",
  authDomain: "portifolio-85003.firebaseapp.com",
  projectId: "portifolio-85003",
  storageBucket: "portifolio-85003.appspot.com",
  messagingSenderId: "832942212654",
  appId: "1:832942212654:web:5e81c7657010fc4dc481bf"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const colusers = collection(db,'users');

let allUsers = [];

console.log('Login')

const getUser = () =>{
  getDocs(colusers).then(snapshot =>{
    snapshot.docs.forEach(doc => {
      allUsers.push({...doc.data(),id:doc.id});
      console.log(allUsers)
    })
  }).catch(error => console.log(error))
}
window.addEventListener('DOMContentLoaded',() =>{
  getUser();
});

const login = () =>{

  const loginForm = document.querySelector(".login-form");
const loginNameError = document.querySelector(".loginName-Error");
const loginPasswordError = document.querySelector(".loginPassword-error");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = loginForm.username.value;
  const password = loginForm.password.value;
  if (name == "") {
    loginNameError.innerHTML = "Please enter only letters in this field.";
    loginForm.username.focus();
  } else if (password == "") {
    loginPasswordError.innerHTML = "Password field is required!";
    loginForm.password.focus();
  } else {
    loginPasswordError.style.visibility = "hidden";
    loginNameError.style.visibility = "hidden";
  }
  const user = allUsers.find(user => user.username == name && user.password == password);
  if (!user){
    alert("invalid user.")
  }  else {
    let loggeduser = user;
    localStorage.setItem('loggedUser',JSON.stringify(loggeduser));
    window.location.replace("dashboard.html");
  }
});

};

login();