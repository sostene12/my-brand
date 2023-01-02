const manageContacts = () =>{
    const contactForm = document.querySelector("#contact-form");
    const contactNameError = document.querySelector('.nameError');
    const contactEmailError = document.querySelector('.emailError');
    const contactMessageError = document.querySelector('.messageError');
    contactForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        console.log(contactForm)
        const name=contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.querySelector('.message').value;
        let atpos = email.indexOf("@");
        let dotpos = email.lastIndexOf(".");
        if(name == ''){
            contactNameError.innerHTML = 'Please enter only letters in this field.';
            contactForm.name.focus();
        } else if((atpos < 1 || dotpos - atpos < 2) && email == ""){
            contactEmailError.innerHTML = "Invalid email!"
            contactForm.email.focus();
        }
        else if(message == ""){
            contactMessageError.innerHTML = "Enter the mesage"
            contactForm.message.focus();
        }
        else{
            contactNameError.style.visibility="hidden";
            contactMessageError.style.visibility = "hidden";
           contactEmailError.style.visibility = "hidden";
        }
        

        let mail = {name,email,message}
        let mails = [];
        if(!localStorage.getItem('mails')){
            mails=[]
        } else{
            mails = JSON.parse(localStorage.getItem("mails"))
        }
        mails.push(mail);
        localStorage.setItem('mails',JSON.stringify(mails));
        contactForm.reset();
        alert("your message have been recieved!")
    })
};

manageContacts();