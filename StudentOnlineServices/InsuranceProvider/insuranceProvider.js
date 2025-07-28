const studentInsuranceData = {
    "123456": {
        studentNumber: "123456",
        provider: "Health Insure Co.",
        insuranceNumber: "INS12345",
        address: "123 Health St, Cityville"
    },
    "654321": {
        studentNumber: "654321",
        provider: "Better Health Inc.",
        insuranceNumber: "INS67890",
        address: "456 Wellness Rd, Townsville"
    },
};

function populateTable() {
    const tbody = document.querySelector("section.wrapper-main table tbody");
    const params = new URLSearchParams(window.location.search);
    const studentNumber = params.get("studentNumber");

    // Get insurance data for the current student
    const insuranceData = studentInsuranceData[studentNumber] || {};

    // Clear existing rows in the table
    tbody.innerHTML = '';

    // Create a new row with the insurance data
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${insuranceData.studentNumber || 'N/A'}</td>
        <td>${insuranceData.provider || 'N/A'}</td>
        <td>${insuranceData.insuranceNumber || 'N/A'}</td>
        <td>${insuranceData.address || 'N/A'}</td>
    `;
    tbody.appendChild(row);
}

// Populate the table when the page loads
document.addEventListener("DOMContentLoaded", populateTable);

// Function to get the student's name based on the student number
function getStudentName(studentNumber) {
    const studentData = {
        '123456': 'Welcome Bart Simpson',
        '654321': 'Welcome Homer Simpson',
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
