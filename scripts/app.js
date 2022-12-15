// import {initializeApp} from "firebase/app";
// import {collection,} from "firebase/auth"
// const firebaseConfig = {
//     apiKey: "AIzaSyCjyFxy8rFsU65og-sxgt9RPx8FEneTv9g",
//     authDomain: "portifolio-85003.firebaseapp.com",
//     projectId: "portifolio-85003",
//     storageBucket: "portifolio-85003.appspot.com",
//     messagingSenderId: "832942212654",
//     appId: "1:832942212654:web:5e81c7657010fc4dc481bf"
//   };

//   initializeApp(firebaseConfig);




// scroll change background
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

const nameRegex = '/[a-zA-Z]/g';
const passwordRegex= "/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/";
const emailRegex = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";


// contact Form validation
const contactForm = document.querySelector("#contact-form");
const nameError = document.querySelector('.nameError');
const emailError = document.querySelector('.emailError');
const messageError = document.querySelector('.messageError')
contactForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    console.log(contactForm)
    const name=contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.querySelector('.message').value;
    const mail = {name,message,email};
    localStorage.setItem('mail',JSON.stringify(mail));
    const nameTest = name.search(/[a-zA-Z]/g);
    // name validation
    if (nameTest == -1||name == ""){
        nameError.innerHTML = 'Please enter only letters in this field.';
    }
    else{
        nameError.style.visibility="hidden";
    }

    // emaill validation
    if(email.search() || email==""){
        emailError.innerHTML = "please enter the email";
    }
    else{
        emailError.style.visibility = "hidden"
    }

    if(message==""){
        messageError.innerHTML = "please enter the goals";
    }
})


// signup-form validation
const signupForm = document.querySelector('.signup-form');
signupForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const name = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    const user = {name,email,password};
    localStorage.setItem("user",JSON.stringify(user));
    alert("Your account have been created");
    // if(name=='' || password==''){
    //     alert("please fill all fields");
    // }
    // if(!emailRegex.test(email)){
    //     alert("enter valid email")
    // }
    // if(!passwordRegex.test(password)){
    //     alert("password is invalid")
    // }
    // if(!nameRegex.test(name)){
    //     alert("please enter valid name")
    // }
});


// login-form validation
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const name = loginForm.username.value;
    const password = loginForm.password.value;
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        if( name== user.name && password == user.password){
            window.location.replace('dashboard.html')
        }
    }
    else{
        alert('invalid credentials') 
    }
    // if(name=='' || password==''){
    //     alert("please fill all fields");
    // }
    // if(!passwordRegex.test(password)){
    //     alert("password is invalid")
    // }
    // if(!nameRegex.test(name)){
    //     alert("please enter valid name")
    // }
})

