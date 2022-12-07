window.onscroll = function(event){
    let navbar = document.getElementsByClassName("nav-container");
    if((window.innerHeight + window.scrollY) > window.innerHeight){
        navbar[0].classList.add("scroll");
        console.log(navbar.classList)
    }
    else{
        navbar[0].classList.remove('scroll')
    }
};


const bars = document.querySelector('.burger');

