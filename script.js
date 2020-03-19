var formEl = document.querySelector('form')
var submitBtn = document.querySelector('button[type="submit"]')
var inputEl = document.querySelectorAll('input')
var errorMsgEl = document.querySelectorAll('.error-msg')
var inputText = ''

var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


formEl.addEventListener('submit', e => {
    e.preventDefault();
    console.log("evento", e);

    inputEl.forEach(input => {
        
        /* empty */
        if (input.value.length == 0)  {
            input.classList.add("error")
            var spanError = document.createElement('span')
            var placeholderValue = input.placeholder;
            spanError.textContent = `${placeholderValue} cannot be empty`
            spanError.setAttribute("class", "error-msg")
            input.parentNode.insertBefore(spanError, input.nextSibling);
        }
        /* not empty */
        else if (input.value.match(mailFormat)) {
            console.log("email invalido")
            var spanErrorEmail = document.createElement('span')
            spanErrorEmail.textContent = 'Looks like this is not an email'
            console.log(spanErrorEmail)
            
        }
        else {

            input.classList.remove("error")
            /* spanError.classList.add("hidden") */
        }
        
    })
   
    
})


