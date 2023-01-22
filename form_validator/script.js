const username = document.querySelector('#username')
const pass = document.querySelector('#password')
const pass2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const btnClear = document.querySelector('.btn-clear')
const btnSend = document.querySelector('.btn-send')
const btnClose = document.querySelector('.btn-close')
const popup = document.querySelector('.pop-up')

const showError = (input, msg) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.error-text')

    formBox.classList.add('error')
    errorMsg.textContent = msg
}

const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
}

const checkForm = input => {
    input.forEach(el => {
       if (el.value === '') {
        showError(el, el.placeholder)
       } else {
        clearError(el)
       }
    })
}

const checkLength = (input, min) => {
    if(input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} składa się z min ${min} znaków`)
    }
}

const checkPassword = (pass1, pass2) => {
    if (pass1.value != pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują')
    }
}

const checkEmail = email => {
    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (emailRegex.test(email.value)) {
        clearError(email)
      } else {
        showError(email, 'E-mail jest niepoprawny')
      }
}

const checkErrors = () => {
    
    const allInputs = document.querySelectorAll('.form-box')
    let errorCount = 0
    
    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount ++
        }
    })

    if (errorCount === 0) {
        popup.classList.add('show-popup')
      }
}

const closePopup = e => {
    popup.classList.remove('show-popup')
}

btnSend.addEventListener('click', e => {
    e.preventDefault()

    checkForm([username, pass, pass2, email])
    checkLength(username, 3)
    checkLength(pass, 8)
    checkPassword(pass, pass2)
    checkEmail(email)
    checkErrors()
    
})

btnClear.addEventListener('click', e => {
    e.preventDefault()

    const arrayForm = [username, pass, pass2, email].forEach(el => {
        el.value = ''

        clearError(el)
    })
})

btnClose.addEventListener('click', e => {
    e.preventDefault()
    closePopup()
    const arrayForm = [username, pass, pass2, email].forEach(el => {
        el.value = ''

        clearError(el)
    })
})