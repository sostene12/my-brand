const manageContacts = () =>{
    const contactForm = document.querySelector("#contact-form");
    const nameError = document.querySelector('.nameError');
    const emailError = document.querySelector('.emailError');
    const messageError = document.querySelector('.messageError')
    contactForm.addEventListener('submit',(e) =>{
        e.preventDefault();
        console.log(contactForm)
        const name=contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.querySelector('.message').value;
        atpos = email.indexOf("@");
        dotpos = email.lastIndexOf(".");
        if(name == ''){
            nameError.innerHTML = 'Please enter only letters in this field.';
            contactForm.name.focus();
        } else if((atpos < 1 || dotpos - atpos < 2) && email == ""){
            emailError.innerHTML = "Invalid email!"
            contactForm.email.focus();
        }
        else if(message ==""){
            messageError.innerHTML = "Enter the mesage"
            contactForm.message.focus();
        }
        else{
            nameError.style.visibility="hidden";
           messageError.style.visibility = "hidden";
            emailError.style.visibility = "hidden";
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
        contactForm.name.value = '';
        contactForm.email.value = '';
        contactForm.message.value = '';
    })
};

manageContacts();