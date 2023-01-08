import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getFirestore,collection,onSnapshot,addDoc, getDocs,doc,deleteDoc} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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
const colcontacts = collection(db,'mails')
const manageContacts = () =>{
    const contactForm = document.querySelector("#contact-form");
    const contactNameError = document.querySelector('.nameError');
    const contactEmailError = document.querySelector('.emailError');
    const contactMessageError = document.querySelector('.messageError');
    contactForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        console.log(contactForm)
        const name=contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.querySelector('.message').value;
        let atpos = email.indexOf("@");
        let dotpos = email.lastIndexOf(".");
        if(name == ''){
            contactNameError.innerHTML = 'Please enter only letters in this field.';
            contactForm.name.focus();
        } else if((atpos < 1 || dotpos - atpos < 2) && email == ""){
            contactEmailError.innerHTML = "Invalid email!"
            contactForm.email.focus();
        }
        else if(message == ""){
            contactMessageError.innerHTML = "Enter the mesage"
            contactForm.message.focus();
        }
        else{
            contactNameError.style.visibility="hidden";
            contactMessageError.style.visibility = "hidden";
           contactEmailError.style.visibility = "hidden";
        }
        

        let mail = {name,message,email}
        addDoc(colcontacts,mail).then(() =>{
            contactForm.reset();
            // alert("your message have been recieved!")
            console.log("mail submitted")
        }).catch(error =>{
            console.log(error);
        });
    })
};

manageContacts();