var formEl = document.querySelector('form')
var submitBtn = document.querySelector('button[type="submit"]')
var inputEl = document.querySelectorAll('input')
var errorMsgEl = document.querySelectorAll('.error-msg')

var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


formEl.addEventListener('submit', e => {
    e.preventDefault();
    console.log("evento", e);

    inputEl.forEach(input => {

        var spanError = document.createElement('span')
        var placeholderValue = input.placeholder;
        spanError.textContent = `${placeholderValue} cannot be empty`
        
        /* empty */
        if (input.value.length == 0 && !input.classList.contains("error"))  {
            console.log("empty e sem error")  
            spanError.setAttribute("class", "error-msg")
            input.parentNode.insertBefore(spanError, input.nextSibling);
            input.classList.add("error")
        }
       
        /* not empty */
        else if (input.value.length > 0) {
        
            if (input.classList.contains("error")) {
                console.log("not empty")
                input.classList.remove("error")
                console.log("span error", spanError)
                input.nextSibling.remove(spanError)
            }

            /* not empty, invalid email */
            if (input.classList.contains("email-field")) {
                console.log("campo de email")

                if (!input.value.match(mailFormat)) {
                    console.log("email invalido")
                    var spanErrorEmail = document.createElement('span')
                    spanErrorEmail.textContent = 'Looks like this is not an email'
                    console.log(spanErrorEmail)
                    spanErrorEmail.setAttribute("class", "error-msg")
                    input.parentNode.insertBefore(spanErrorEmail, input.nextSibling);
                    input.classList.add("error");
                }
            }
            

        } 

    })
    
})


