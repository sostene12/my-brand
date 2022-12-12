const sidebarNavs = document.querySelector('.nav-contents');
const sidebarElements = document.querySelectorAll('.nav-contents > div');
const navData = document.querySelector('.data');
const allNavData = document.querySelectorAll('.data > div');

for(let i=0;i<sidebarElements.length;i++){
    sidebarElements[i].addEventListener('click',() =>{
        sidebarNavs.querySelector('.active').classList.remove('active');
        sidebarElements[i].classList.add('active');
        navData.querySelector('.active').classList.remove('active');
        allNavData[i].classList.add('active');
    })
}


