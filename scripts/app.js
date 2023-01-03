import { manageContacts } from "./contacts";
import { createUser } from "./signup";
import { initializeApp } from "firebase/app";
import {
    getFirestore,collection,getDocs
} from "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCjyFxy8rFsU65og-sxgt9RPx8FEneTv9g",
    authDomain: "portifolio-85003.firebaseapp.com",
    projectId: "portifolio-85003",
    storageBucket: "portifolio-85003.appspot.com",
    messagingSenderId: "832942212654",
    appId: "1:832942212654:web:5e81c7657010fc4dc481bf"
  };
// Initialize Firebase
initializeApp(firebaseConfig);


window.addEventListener('DOMContentLoaded',(event) =>{
    console.log("Content loaded")
    getMails();
})

// initialize firestore
const db = getFirestore();
// get users
const colRef = collection(db,'mails');

const getMails = () => {
    getDocs(colRef).then((snapshot) => {
        let mails = [];
        snapshot.docs.forEach((doc) =>{
            mails.push({...doc.data(),id:doc.id})
        });
        console.log("mails",mails);
     })
     .catch(error => {
         console.log(error.message);
     });
};

// invoking the imported functions
manageContacts();
createUser();


// // scroll change background
window.onscroll = function(event){
    let navbar = document.getElementsByClassName("nav-container");
    if((window.innerHeight + window.scrollY) > window.innerHeight){
        navbar[0].classList.add("scroll");
    }
    else{
        navbar[0].classList.remove('scroll')
    }
};
// active navigation

const navItems = document.querySelectorAll('.nav-items a');
navItems.forEach(item =>{
    item.addEventListener('click',function(event){
        const activebtn = document.querySelector('.active');
        activebtn.classList.remove('active');
        event.target.classList.add('active');
    })
});

// toggle login
const loginBtn = document.querySelector('.login-btn');
const loginSection = document.querySelector('.login-section')
loginBtn.addEventListener('click',() =>{
    loginSection.style.display = 'block'
    window.scrollTo(0, 0);
});

const closeBtn = document.querySelector('.close-icon');
closeBtn.addEventListener('click',() =>{
    loginSection.style.display = 'none'
});


const bars = document.querySelector('.burger');
bars.addEventListener('click',(e) =>{
    const navLinks = document.querySelector('.nav-links');
    const navContents = document.querySelector('.nav-contents');
    navContents.appendChild(navLinks)
    navContents.style.display = "block"
    navContents.classList.toggle('open')
    bars.classList.toggle('open')
});

// tabs
const tabHeader = document.querySelector('.tab-header');
const tabHeaderElements = document.querySelectorAll('.tab-header > div');
const tabBody = document.querySelector('.tab-body');
const tabBodyElements = document.querySelectorAll('.tab-body > div');


for(let i=0;i<tabHeaderElements.length;i++){
    tabHeaderElements[i].addEventListener('click',(e) =>{
       tabHeader.querySelector('.active').classList.remove('active');
        tabHeaderElements[i].classList.add('active');
        // tabBodyElements[i]
        tabBody.querySelector('.active').classList.remove('active');
        console.log(tabBodyElements[i]);
        tabBodyElements[i].classList.add('active');
    });
}



