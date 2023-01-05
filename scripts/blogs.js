const blogForm = document.querySelector('.add-blog form');
const file = document.querySelector('#image-file');
const message = blogForm.contents;
blogForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    createBlogs();
})

const createBlogs = () =>{
     // Convert image to a data URL
     const imageLink =  file.files
     const reader =  new FileReader();
     reader.readAsDataURL(imageLink[0])
     reader.addEventListener("load",()=>{
        finalImage = reader.result;
        let blogs = [];
        if(!localStorage.getItem('blogs')){
            blogs = [];
        } else{
            blogs = JSON.parse(localStorage.getItem('blogs'));
        }

        let blog = {
            title:title.value,
            message:message.value,
            img:finalImage
        };
        blogs.push(blog);
        localStorage.setItem('blogs',JSON.stringify(blogs));
     });
};

const allBlogs = JSON.parse(localStorage.getItem('blogs'));
const blogContents = document.querySelector('.allblogs');
const deleteBlog = document.querySelector('.deleteblog');

allBlogs.forEach((blog,index) => {
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
     c2.innerText = blog.title;
     c3.innerText = blog.message;
     c4.innerHTML = `
     <button>
     <i class="fa-solid fa-trash"></i>
 </button>
 <button>
     <i class="fa-solid fa-pen-to-square"></i>
 </button>
     `;
});

deleteBlog.addEventListener('click',() =>{
    
});



