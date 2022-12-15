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


// user
// const getUser = () =>{
//     const user = JSON.parse(localStorage.getItem('user'));
//     const name = document.querySelector('.name');
//     name.innerHTML = user.name
//     console.log(user)
// }

// getUser();

// contacts



const getContacts = () =>{
    const mails = JSON.parse(localStorage.getItem('mail'));
    console.log("mails",mails)
    const contacts = document.querySelector('.title table');
    console.log("cont",contacts)
    const row = document.createElement('tr');
    let data = `
        <td>6</td>
        <td>${mails.name}</td>
        <td>${mails.email}</td>
        <td>${mails.message}</td>
        <td>
            <button>
                <i class="fa-solid fa-trash"></i>
            </button>
            <button>
                <i class="fa-solid fa-eye"></i>
            </button>
        </td>
    `;
    row.innerHTML = data;
    contacts.appendChild(row);
}

getContacts();



// blogs


const manageBlogs = () =>{
    const blogForm = document.querySelector('.add-blog form');
    const file =  document.querySelector('#image-file');
    file.addEventListener('change',(e) =>{
        const img = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(img);
        console.log(reader.result)
        reader.addEventListener('load', () => {
            console.log(reader.result)
        });
    });

    blogForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        let title = blogForm.title.value;
        let contents = blogForm.contents.value;
        console.log(title,contents);
    })


};

manageBlogs();



