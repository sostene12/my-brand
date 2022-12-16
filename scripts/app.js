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

const manageSignup = () => {
    const signupForm = document.querySelector('.signup-form');
    signupForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        const name = signupForm.username.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;
        const user = {name,email,password};
        let userlocal = localStorage.getItem('user');
        if(userlocal){
            userlocal.push(user)
        } else{
            localStorage.setItem("user",JSON.stringify(user));
        }

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
}

manageSignup();

const manageLogin = () =>{
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
    });
};

manageLogin();



