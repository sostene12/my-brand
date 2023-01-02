const loginForm = document.querySelector(".login-form");
console.log(loginForm);
const loginNameError = document.querySelector(".loginName-Error");
const loginPasswordError = document.querySelector(".loginPassword-error");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = loginForm.username.value;
  const password = loginForm.password.value;
  if (name == "") {
    loginNameError.innerHTML = "Please enter only letters in this field.";
    loginForm.username.focus();
  } else if (password == "") {
    loginPasswordError.innerHTML = "Password field is required!";
    loginForm.password.focus();
  } else {
    loginPasswordError.style.visibility = "hidden";
    loginNameError.style.visibility = "hidden";
  }
  const users = JSON.parse(localStorage.getItem("users"));
  const user = users.find(
    (user) => user.name === name && user.password === password
  );
  if (!user){
    alert("invalid user.")
  }  else {
    let loggeduser = user;
    localStorage.setItem('loggedUser',JSON.stringify(loggeduser));
    window.location.replace("dashboard.html");
  }
});
