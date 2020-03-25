var formEl = document.querySelector('form');
var submitBtn = document.querySelector('button[type="submit"]');
var inputEl = document.querySelectorAll('input');
var errorMsgEl = document.querySelectorAll('.error-msg');

var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formEl.addEventListener('submit', e => {
    e.preventDefault();

    inputEl.forEach(input => {

        var spanError = document.createElement('span');
        var placeholderValue = input.placeholder;
        spanError.textContent = `${placeholderValue} cannot be empty`;
 
        if (input.value.length == 0 && !input.classList.contains("error"))  { 
            spanError.setAttribute("class", "error-msg");
            input.parentNode.insertBefore(spanError, input.nextSibling);
            input.classList.add("error");
        }
        else if (input.value.length > 0) {
        
            if (input.classList.contains("error")) {
                input.classList.remove("error");
                input.nextSibling.remove(spanError);
            }
            if (input.classList.contains("email-field")) {
                if (!input.value.match(mailFormat)) {
                    var spanErrorEmail = document.createElement('span');
                    spanErrorEmail.textContent = 'Looks like this is not an email';
                    spanErrorEmail.setAttribute("class", "error-msg");
                    input.parentNode.insertBefore(spanErrorEmail, input.nextSibling);
                    input.classList.add("error");
                }
            }

        } 

    })
    
})


