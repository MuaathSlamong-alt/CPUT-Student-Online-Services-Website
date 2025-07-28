const studentMedicalData = { 
    "123456": {
        studentName: "Bart Simpson",
        disease: "Asthma",
        allergy: "Pollen, Dust",
        vaccination: "Covid 19, Influenza",
        medication: "None"
    },
    "654321": {
        studentName: "Homer Simpson",
        disease: "Diabetes",
        allergy: "Penicillin",
        vaccination: "Influenza",
        medication: "Metformin"
    },
    // Add more entries for other students as needed
};

function populateTable() {
    const tbody = document.querySelector("section.wrapper-main table tbody");
    const params = new URLSearchParams(window.location.search);
    const studentNumber = params.get("studentNumber");

    // Get medical data for the current student
    const medicalData = studentMedicalData[studentNumber] || {};

    // Clear existing rows in the table
    tbody.innerHTML = '';

    // Create a new row with the medical data
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${medicalData.studentName || 'N/A'}</td>
        <td>${medicalData.disease || 'N/A'}</td>
        <td>${medicalData.allergy || 'N/A'}</td>
        <td>${medicalData.vaccination || 'N/A'}</td>
        <td>${medicalData.medication || 'N/A'}</td>
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
