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


const bars = document.querySelector('.burger');

