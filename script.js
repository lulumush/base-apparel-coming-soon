//mail regex
let formEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const userEmail = document.getElementById("email")
let errorMessage = document.querySelector(".email-error-msg")

//actions when user click on submit button
const btn = document.querySelector('.email-form-button')
btn.addEventListener('click', (e) => {
    e.preventDefault()
    checkEmail()
})

//check if email is valid and if not display an error message
function checkEmail(){
    if (!formEmail.test(userEmail.value)){
        errorMessage.classList.add('active')
    }
    else{
        errorMessage.classList.remove('active')
    }
}


