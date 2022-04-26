const button = document.querySelector('#submit-btn');
const input = document.querySelector('#input-field');
const iconError = document.querySelector('#error');

button.addEventListener('click', validateEmail);

function validateEmail(event){
    
    event.preventDefault(); 
    const formatMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(!input.value){
        iconError.style.display = 'unset';
        return; 
    }

    if(input.value.match(formatMail)){
        iconError.style.display = 'none';
        alert('Welcome to our page');
        input.focus();
        input.value ='';
    } else {
        iconError.style.display = 'unset';
        input.focus();
    }
}