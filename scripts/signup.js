const signupForm = document.querySelector('.signup-form');
const signNameError = document.querySelector('.signName-error');
const signEmailError = document.querySelector('.signEmail-error');
const signPasswordError = document.querySelector('.signPassword-error')
const msg = document.querySelector('.message-sent span');

signupForm.addEventListener('submit',(e) =>{
    e.preventDefault();
    const name = signupForm.username.value;
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(".");
    if(name == ''){
        signNameError.innerHTML = 'Please enter only letters in this field.';
        signupForm.username.focus();
    } else if((atpos < 1 || dotpos - atpos < 2) && email == ""){
        signEmailError.innerHTML = "Invalid email!"
        signupForm.email.focus();
    }
    else if(password=="") {
        signPasswordError.innerHTML = "Password field is required!"
        signupForm.password.focus();
      }
    // else if(password.length < 6) {
    //     signPasswordError.innerHTML = "Your password must have at least 8 characters!"
    //     signupForm.password.focus();
    //   }
         else{
            signNameError.style.visibility="hidden";
            signEmailError.style.visibility = "hidden";
            signPasswordError.style.visibility = "hidden";
        }
        const newUser = {name,email,password};
        let users = [];
        if(!localStorage.getItem('users')){
            users = [];
        } else{
            users = JSON.parse(localStorage.getItem('users'));
        }

        users.push(newUser);
        localStorage.setItem('users',JSON.stringify(users))
        signupForm.reset();
            msg.innerHTML =  "Your account have been created";
            msg.parentNode.style.display = 'block'
        setTimeout(() => {
            msg.innerHTML =  "Your account have been created";
            msg.parentNode.style.display = 'none'
        },2000)
});