document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const studentNumber = document.getElementById('studentNumber').value;
        const password = document.getElementById('password').value;

        // Define correct credentials
        const validCredentials = [
            { studentNumber: '123456', password: 'password123' },
            { studentNumber: '654321', password: 'password123' }
        ];

        // Check if the entered credentials match any valid credentials
        const isValid = validCredentials.some(cred => 
            cred.studentNumber === studentNumber && cred.password === password
        );

        if (isValid) {
            // Store student number in session storage
            sessionStorage.setItem('studentNumber', studentNumber);
            
            // Redirect to the appropriate page
            window.location.href = '../HomePage/home page.html?studentNumber=' + studentNumber;
        } else {
            alert('Invalid student number or password.');
        }
    });
});
