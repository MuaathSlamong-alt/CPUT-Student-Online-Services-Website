

// Function to get the student's name based on the student number
function getStudentName(studentNumber) {
    const studentData = {
        '123456': 'Welcome Bart Simpson',
        '654321': 'Welcome Hommer Simpson',
        // Add more student numbers and names as needed
    };

    return studentData[studentNumber] || 'Student';
}

// Function to update the name next to the icon in the header
function updateHeaderName() {
    const studentNumber = sessionStorage.getItem('studentNumber');
    const studentName = getStudentName(studentNumber);
    document.getElementById('studentName').textContent = studentName;
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateHeaderName);