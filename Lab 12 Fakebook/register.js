import user from './User.js';
const btn = document.querySelector('#submit');
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector('#password2')
const email = document.querySelector("#email");
const usererror = document.querySelector('#usererror');
const emailerror = document.querySelector('#emailerror')
const passerror = document.querySelector('#passworderror')
const passerror2 = document.querySelector('#passworderror2')


username.addEventListener('keyup', function validUsername() {
  if(!username.value.match(/^[A-Z][a-z]*/g)){
    usererror.style.display = 'block';
    username.style.border = '1px solid red';
    usererror.innerText = 'Please enter valid username.';
    return false;
  }else{
    usererror.style.display = 'none';
    username.style.border = '1px solid white';
    return true;
  }
});

email.addEventListener('keyup', function validEmail() {
  if(!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
    emailerror.style.display = 'block';
    email.style.border = '1px solid red';
    emailerror.innerText = 'Please enter valid email address.';
    return false;
  }else{
    emailerror.style.display = 'none';
    email.style.border = '1px solid white';
    return true;
  }
});

password.addEventListener('keyup', function validPass() {
  if(!password.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm)){
    passerror.style.display = 'block';
    password.style.border = '1px solid red';
    passerror.innerText = 'Please enter valid password.';
    return false;
  }else{
    passerror.style.display = 'none';
    password.style.border = '1px solid white';
    return true;
  }
});

password2.addEventListener('keyup', function validPass2() {
  if(!password2.value.match(password == password2)){
    passerror2.style.display = 'block';
    password2.style.border = '1px solid red';
    passerror2.innerText = 'Passwords do not match.';
    return true;
  }else{
    passerror2.style.display = 'none';
    password2.style.border = '1px solid white';
    return false;
  }
});

function getId() {
  let id
  if (localStorage.getItem('students') == null) {
    id = 1;
  } else {
    let studentsID = JSON.parse(localStorage.getItem('students'));
    id = studentsID.length
  }
  return id;
}

let arr = [];
btn.addEventListener('click', register)
function register() {
  let id = getId();
  let Students = new user(id, username.value, password.value, email.value);
  saveLocalStorage(Students);
  window.location.href = 'login.html';
}

function saveLocalStorage(arg) {
  arr.push(arg);
  if (localStorage.getItem('students') == null) {
    localStorage.setItem('students', JSON.stringify(arr));
  } else {
    let newarr = JSON.parse(localStorage.getItem('students'))
    newarr.push(arg)
    localStorage.setItem('students', JSON.stringify(newarr));
  }
}
