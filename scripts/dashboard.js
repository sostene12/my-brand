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


// logout
const logout = document.querySelector('.logout');
logout.addEventListener('click',() =>{
    localStorage.removeItem('user');
    window.location.replace('index.html');
});

const getUser = () =>{
    const user = JSON.parse(localStorage.getItem('user'));
    const name = document.querySelector('.name');
    name.innerHTML = user.name
    console.log(user)
}

getUser();


const allUsers = JSON.parse(localStorage.getItem('users'));
const allMails = JSON.parse(localStorage.getItem('mails'));
const allPosts = JSON.parse(localStorage.getItem('blogs'));
document.querySelector('.users-count').innerHTML = allUsers.length;
document.querySelector('.count-emails').innerHTML = allMails.length;
document.querySelector('.blogs-count').innerHTML = allPosts.length;


const mailContents = document.querySelector('.contacts');
console.log(mailContents)
const getContacts = () =>{
    allMails.forEach((mail,index) => {
        const name = mail.name;
        const email = mail.email;
        const msg = mail.message;
        let row = mailContents.insertRow(-1)
         // Create table cells
         let c1 = row.insertCell(0);
         let c2 = row.insertCell(1);
         let c3 = row.insertCell(2);
         let c4 = row.insertCell(3);
         let c5 = row.insertCell(4);
         c1.innerText = index+2;
         c2.innerText = name;
         c3.innerText = email;
         c4.innerText = msg;
         c5.innerHTML = `
         <button>
         <i class="fa-solid fa-trash"></i>
     </button>
     <button>
         <i class="fa-solid fa-pen-to-square"></i>
     </button>
         `;
    });
}

getContacts();

const usersContents = document.querySelector('.all-users');
const users = JSON.parse(localStorage.getItem('users'));
console.log(usersContents)
const getUsers = () =>{
    users.forEach((user,index) => {
        const name = user.name;
        const email = user.email;
        let row = usersContents.insertRow(-1)
         // Create table cells
         let c1 = row.insertCell(0);
         let c2 = row.insertCell(1);
         let c3 = row.insertCell(2);
         let c4 = row.insertCell(3);
         c1.innerText = index+2;
         c2.innerText = name;
         c3.innerText = email;
         c4.innerHTML = `
         <button>
            <i class="fa-solid fa-trash"></i>
        </button>
        <button>
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
         `;
    });
}

getUsers();




