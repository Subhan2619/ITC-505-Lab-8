document.getElementById('secureForm').addEventListener('submit', function (event) {
    // Fetch and sanitize form values
    const fields = ['firstName', 'lastName', 'email', 'password', 'confirmPassword'];
    let sanitizedValues = {};

    fields.forEach(field => {
        const value = document.getElementById(field).value.trim();
        sanitizedValues[field] = sanitizeInput(value);

        // Check if the sanitized input differs from the original
        if (value !== sanitizedValues[field]) {
            alert(`Invalid characters detected in ${field}. Please remove them.`);
            event.preventDefault(); // Stop form submission
            return;
        }
    });

    // Validate required fields
    if (!sanitizedValues.firstName || !sanitizedValues.lastName || !sanitizedValues.email || !sanitizedValues.password || !sanitizedValues.confirmPassword) {
        alert('All fields are required.');
        event.preventDefault();
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(sanitizedValues.email)) {
        alert('Invalid email format.');
        event.preventDefault();
        return;
    }

    // Check if passwords match
    if (sanitizedValues.password !== sanitizedValues.confirmPassword) {
        alert('Passwords do not match.');
        event.preventDefault();
        return;
    }

    alert('Form submitted securely!');
});
