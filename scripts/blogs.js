import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {getFirestore,collection,addDoc, getDocs} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";
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
const colblogs = collection(db,'blogs');

// editor
tinymce.init({
    selector: 'textarea',
    plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
    toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
    tinycomments_mode: 'embedded',
    tinycomments_author: 'Author name',
    mergetags_list: [
      { value: 'First.Name', title: 'First Name' },
      { value: 'Email', title: 'Email' },
    ]
  });

const blogForm = document.querySelector('.add-blog form');
const file = document.querySelector('#image-file');
const blogTitleError = document.querySelector('.blog-title-error')
blogForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    createBlogs();
})

const createBlogs = () =>{
    const message = blogForm.contents.value;
    const title = blogForm.title;
     // Convert image to a data URL
     const imageLink =  file.files
     const reader =  new FileReader();
     reader.readAsDataURL(imageLink[0])
     reader.addEventListener("load",()=>{
      let  finalImage = reader.result;
        let blogs = [];
        // if(!localStorage.getItem('blogs')){
        //     blogs = [];
        // } else{
        //     blogs = JSON.parse(localStorage.getItem('blogs'));
        // }

        let blog = {
            title:title.value,
            message:message,
            img:finalImage
        };

        addDoc(colblogs,blog).then(() => {
            blogForm.reset();
            console.log("Blog created")
        }).catch(error => console.log(error.message))

        // console.log(blog)
        // blogs.push(blog);
        // localStorage.setItem('blogs',JSON.stringify(blogs));
     });
};

window.addEventListener('DOMContentLoaded',() =>{
    getAllBlogs();
})


let allBlogs = []

const getAllBlogs = () => {
    getDocs(colblogs).then(snapshot =>{
        snapshot.docs.forEach(doc => {
            allBlogs.push({...doc.data(),id:doc.id});
            console.log(allBlogs)
            renderBlogs(allBlogs);
            document.querySelector('.blogs-count').innerHTML = allBlogs.length;
        })
    })
}


// const allBlogs = JSON.parse(localStorage.getItem('blogs'));
const blogContents = document.querySelector('.allblogs');
const deleteBlog = document.querySelector('.deleteblog');

const renderBlogs = (blogs) =>{
    blogs.forEach((blog,index) => {
        const title = blog.title;
        const message = blog.message;
        const image = blog.img;
        let row = blogContents.insertRow(-1)
         // Create table cells
         let c1 = row.insertCell(0);
         let c2 = row.insertCell(1);
         let c3 = row.insertCell(2);
         let c4 = row.insertCell(3);
         c1.innerText = index+2;
         c2.innerText = title;
         c3.innerHTML = message;
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

deleteBlog.addEventListener('click',() =>{
    
});



