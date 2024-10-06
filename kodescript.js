function validateForm(event) {
    event.preventDefault();

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(function(element) {
      element.textContent = '';
    });

    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var preference = document.getElementById('preference').value;

    // Full Name validation (minimum 3 characters)
    if (fullName.length < 3) {
      document.getElementById('fullNameError').textContent = 'Full Name must be at least 3 characters long';
      return;
    }

    // Email validation (valid email format)
    if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address';
      return;
    }

    // Phone Number validation (valid phone number format)
    if (!validatePhoneNumber(phoneNumber)) {
      document.getElementById('phoneNumberError').textContent = 'Please enter a valid phone number';
      return;
    }

    // Preference validation (should be selected)
    if (preference === '') {
      document.getElementById('preferenceError').textContent = 'Please select a preference';
      return;
    }

    // Form is valid, submit the form or perform further actions
    document.getElementById('contactForm').submit();
  }