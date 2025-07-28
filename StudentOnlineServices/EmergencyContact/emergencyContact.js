const studentEmergencyContactsData = {
    "123456": {
        name: "Bart Simpson",
        father: "Homer Simpson 0826554321",
        mother: "Marge Simpson 0827439970",
        insurance: "Health Insure Co. 0304162700",
        alternate: "Lisa Simpson 0815546541"
    },
    "654321": {
        name: "Homer Simpson",
        father: "Abraham Simpson 0675462700",
        mother: "Mona Simpson 0674445490",
        insurance: "Better Health Inc. 0306721180",
        alternate: "Maggie Simpson 0827881020"
    },
};

function populateTable() {
    const tbody = document.querySelector("section.wrapper-main table tbody");
    const params = new URLSearchParams(window.location.search);
    const studentNumber = params.get("studentNumber");

    // Get emergency contacts data for the current student
    const emergencyContact = studentEmergencyContactsData[studentNumber] || {};

    // Clear existing rows in the table
    tbody.innerHTML = '';

    // Create a new row with the emergency contact data
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${emergencyContact.name || 'N/A'}</td>
        <td>${emergencyContact.father || 'N/A'}</td>
        <td>${emergencyContact.mother || 'N/A'}</td>
        <td>${emergencyContact.insurance || 'N/A'}</td>
        <td>${emergencyContact.alternate || 'N/A'}</td>
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
