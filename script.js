const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please Fill Out all fields'
        messageContainer.style.backgroundColor = 'rgb(202, 116, 66)';
        return;
    }
    // See if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'rgb(63, 163, 63)';
        password2El.style.borderColor = 'rgb(63, 163, 63)';
    } else {
        passwordsMatch = false;
        message.textContent = 'Paswords do not match';
        messageContainer.style.backgroundColor = 'rgb(202, 116, 66)';
        password1El.style.borderColor = 'rgb(202, 116, 66)';
        password2El.style.borderColor = 'rgb(202, 116, 66)';
        return;
    }
    // if form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Succesfully registered';
        messageContainer.style.backgroundColor = 'rgb(71, 163, 110)';
        password1El.style.borderColor = 'rgb(63, 163, 63)';
        password2El.style.borderColor = 'rgb(63, 163, 63)';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.name.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    console.log(user)
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Eevnt listeners
form.addEventListener('submit', processFormData)