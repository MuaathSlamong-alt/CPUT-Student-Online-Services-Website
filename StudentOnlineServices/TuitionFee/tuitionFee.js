const studentTuitionFees = {
    "123456": [
        {
            date: "2024-07-01",
            code: "BPR125SO1",
            description: "Business Practice",
            amount: "R3 000.00"
        },
        {
            date: "2024-07-01",
            code: "ADF125SO1",
            description: "Applications Development",
            amount: "R3 000.00"
        },
        {
            date: "2024-07-01",
            code: "CNF125SO1",
            description: "Communications Network Foundations",
            amount: "R4 000.00"
        },
        {
            date: "2024-07-01",
            code: "ICE125SO1",
            description: "Electives",
            amount: "R1 500.00"
        },
        {
            date: "2024-07-01",
            code: "ICF125SO1",
            description: "ICF Fundamentals",
            amount: "R2 200.00"
        }

    ],
    "654321": [
        {
            date: "2024-07-15",
            code: "INM125SO1",
            description: "Information Management",
            amount: "R1 500.00"
        },
        {
            date: "2024-07-15",
            code: "ITS125SO1",
            description: "Information Systems",
            amount: "R4 000.00"
        },
        {
            date: "2024-07-15",
            code: "MAF25SO1",
            description: "Multimedia Applications Foundations",
            amount: "R3 500.00"
        },
        {
            date: "2024-08-15",
            code: "PRC125SO1",
            description: "Information Systems",
            amount: "R4 750.00"
        },
        {
            date: "2024-08-15",
            code: "ADP125SO1",
            description: "Applications Development Practice",
            amount: "R5 950.00"
        }

    ],
};
function populateTable() {
    const tbody = document.querySelector("table tbody");
    const params = new URLSearchParams(window.location.search);
    const studentNumber = params.get("studentNumber");

    // Get tuition fees for the current student
    const tuitionFees = studentTuitionFees[studentNumber] || [];

    // Clear existing rows in the table
    tbody.innerHTML = '';

    tuitionFees.forEach(fee => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${fee.date}</td>
            <td>${fee.code}</td>
            <td>${fee.description}</td>
            <td>${fee.amount}</td>
        `;

        tbody.appendChild(row);
    });
}

// Populate the table when the page loads
document.addEventListener("DOMContentLoaded", populateTable);

// Populate the table when the page loads
document.addEventListener("DOMContentLoaded", populateTable);

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