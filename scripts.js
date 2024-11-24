document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Clear previous error messages
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';

    // Get form data
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Validate first name
    if (firstName === '') {
        document.getElementById('firstNameError').textContent = 'First name is required';
        isValid = false;
    }

    // Validate last name
    if (lastName === '') {
        document.getElementById('lastNameError').textContent = 'Last name is required';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === '') {
        document.getElementById('emailError').textContent = 'Email is required';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate password
    if (password === '') {
        document.getElementById('passwordError').textContent = 'Password is required';
        isValid = false;
    }

    // Validate confirm password
    if (confirmPassword === '') {
        document.getElementById('confirmPasswordError').textContent = 'Confirm password is required';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match';
        isValid = false;
    }

    // If form is valid, show success message
    if (isValid) {
        alert('Form submitted successfully!');
        // You can also perform additional actions like sending data to a server
    }
});
