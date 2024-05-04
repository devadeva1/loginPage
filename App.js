const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');

//? In simple terms, preventDefault() is a function in JavaScript that stops the default behavior of an event from happening.

form.addEventListener('submit',(e)=>{
    if(!validateInputs()){
        e.preventDefault();
    }
})

function validateInputs(){
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cpasswordValue = cpassword.value.trim();

    let success = true;

    //User name validation
    if(userNameValue===''){
        success = false;
        setError(username,'***Please enter a user name');
    }else{
        setSuccess(username);
    }
    //Email id validation
    if(emailValue===''){
        success = false;
        setError(email,'***Please enter an email id');
    }else if(!validateEmail(emailValue)){
        success = false;
        setError(email,'***Enter a valid email id');
    }else{
        setSuccess(email);
    }
    //password validation
    if(passwordValue===''){
        success = false;
        setError(password,'***Please enter a password');
    }else if(passwordValue.length < 8){
        success = false;
        setError(password,'***Password should contain 8 characters');
    }else{
        setSuccess(password);
    }
    //Confirm password validation
    if(cpasswordValue===''){
          setError(cpassword,'***Please enter a password');
    }else if(cpasswordValue!==passwordValue){
        success = false;
        setError(cpassword,'***not matching to password');
    }else{
        setSuccess(cpassword);
    }
    return success;
}

//! for showing an error
function setError(element,message){
    const inputGroup = element.parentElement;
    const error = inputGroup.querySelector('.error');

    error.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

//! for removing an error 
function setSuccess(element){
    const inputGroup = element.parentElement;
    const error = inputGroup.querySelector('.error');

    error.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

//! Validate an email
// no need to memorize match() we can refer from google. 
const validateEmail =(email) => {
    return String(email).toLowerCase().match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };