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
const colcontacts = collection(db,'mails');

let allUsers = [];
let allMails = [];
let allPosts = [];

const getAllUsers = () =>{
  getDocs(colusers).then(snapshot =>{
    snapshot.docs.forEach(doc => {
      allUsers.push({...doc.data(),id:doc.id});
      document.querySelector('.users-count').innerHTML = allUsers.length;
      getUsers(allUsers)
    })
  }).catch(error => console.log(error.message))
}

const getAllMails = () =>{
    getDocs(colcontacts).then(snapshot => {
        snapshot.docs.forEach(doc =>{
            allMails.push({...doc.data(),id:doc.id});
            document.querySelector('.count-emails').innerHTML = allMails.length;
            console.log("mails",allMails)
            getContacts(allMails);
        })
    }).catch(error => {
        console.log(error.message)
    })
}

window.addEventListener('DOMContentLoaded',() =>{
    getAllUsers();
    getAllMails();
});

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
    localStorage.removeItem('loggedUser');
    window.location.replace('index.html');
});

const getStoredUser = () =>{
    const user = JSON.parse(localStorage.getItem('loggedUser'));
    const name = document.querySelector('.name');
    name.innerHTML = user.username;
}
getStoredUser();



// const allUsers = JSON.parse(localStorage.getItem('users'));
// const allMails = JSON.parse(localStorage.getItem('mails'));
// const allPosts = JSON.parse(localStorage.getItem('blogs'));



const mailContents = document.querySelector('.contacts');
console.log(mailContents)
const getContacts = (mails) =>{
    mails.forEach((mail,index) => {
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
         c1.innerText = index+1;
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

// getContacts();

const usersContents = document.querySelector('.all-users');
// const users = JSON.parse(localStorage.getItem('users'));
console.log(usersContents)
const getUsers = (users) =>{
    users.forEach((user,index) => {
        const name = user.username;
        const email = user.email;
        let row = usersContents.insertRow(-1)
         // Create table cells
         const c1 = row.insertCell(0);
         const c2 = row.insertCell(1);
         const c3 = row.insertCell(2);
         const c4 = row.insertCell(3);
         c1.innerText = index + 1;
         c2.innerText = name;
         c3.innerText = email;
         c4.innerHTML = `
         <button class="delete-user" onclick="myFunction()">
            <i class="fa-solid fa-trash"></i>
        </button>
        <button class="edit">
            <i class="fa-solid fa-pen-to-square"></i>
        </button>
         `;
    });
}



// getUsers();

const deleteUser = document.querySelector('tr');
console.log("delete",deleteUser)
deleteUser.addEventListener('click',(e) =>{
    console.log(e.target)
});


const barIcon = document.querySelector('.icon-bars');
console.log("Icon",barIcon);


console.log("DASHBOARD")




