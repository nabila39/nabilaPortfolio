const hamburger = document.getElementById('hamburger'); 
const menu = document.querySelector('.menu'); 

hamburger.addEventListener('click', function () { 
	const hamIcon = this.querySelector('.hamburger-icon'); 
	const crossIcon = this.querySelector('.cross-icon'); 
	if (hamIcon.style.display === "none") { 
		hamIcon.style.display = "inline-block"
		menu.style.display = "none"
		crossIcon.style.display = "none"
	} 
	else { 
		crossIcon.style.display = "inline-block"
		hamIcon.style.display = "none"
		menu.style.display = "block"
	} 
});

function validateForm() {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var isValid = true;

    if (nameInput.value.trim() == '') {
        nameInput.classList.add('error');
        isValid = false;
    } else {
        nameInput.classList.remove('error');
    }

    if (emailInput.value.trim() == '') {
        emailInput.classList.add('error');
        isValid = false;
    } else if (!validateEmail(emailInput.value)) {
        emailInput.classList.add('error');
        isValid = false;
    } else {
        emailInput.classList.remove('error');
    }

    if (messageInput.value.trim() == '') {
        messageInput.classList.add('error');
        isValid = false;
    } else {
        messageInput.classList.remove('error');
    }

    if (!isValid) {
        document.getElementById('error-message').textContent = 'Please fill out all fields correctly.';
    } else {
        document.getElementById('error-message').textContent = '';
    }

    return isValid;
}

function validateEmail(email) {
    // Your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
}
