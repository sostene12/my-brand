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
    navContents.classList.toggle('open')
    bars.classList.toggle('open')
});

// tabs
const tab = document.querySelector('.accounts');
const tabHeader = document.querySelector('.tab-header');
const tabHeaderElements = document.querySelectorAll('.tab-header > div');
const tabBody = document.querySelector('.tab-body');
const tabBodyElements = document.querySelectorAll('.tab-Body > div');


for(let i=0;i<tabHeaderElements.length;i++){
    tabHeaderElements[i].addEventListener('click',() =>{
       tabHeader.querySelector('.active').classList.remove('active');
        tabHeaderElements[i].classList.add('active');
        tabBody.querySelector('.active').classList.remove('active');
        tabBodyElements[i].classList.add('active')
    });
}

