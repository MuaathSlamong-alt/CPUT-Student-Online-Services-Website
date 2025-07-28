const studentFinancialAidData = {
    "123456": [
        {
            date: "2024-07-25",
            aidType: "Scholarship",
            amountAwarded: "R20 000.00",
            remainingBalance: "R10 000.00",
            status: "Approved"
        },
        {
            date: "2024-07-27",
            aidType: "Grant",
            amountAwarded: "R5 000.00",
            remainingBalance: "R5 000.00",
            status: "Pending"
        }
    ],
    "654321": [
        {
            date: "2024-08-15",
            aidType: "Bursary",
            amountAwarded: "R10 000.00",
            remainingBalance: "R5 000.00",
            status: "Approved"
        },
        {
            date: "2024-08-20",
            aidType: "Loan",
            amountAwarded: "R2 000.00",
            remainingBalance: "R3 000.00",
            status: "Approved"
        }
    ],
};

function populateTable() {
    const tbody = document.querySelector("section.wrapper-main table tbody");
    const params = new URLSearchParams(window.location.search);
    const studentNumber = params.get("studentNumber");

    // Get financial aid data for the current student
    const financialAid = studentFinancialAidData[studentNumber] || [];

    // Clear existing rows in the table
    tbody.innerHTML = '';

    financialAid.forEach(aid => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${aid.date}</td>
            <td>${aid.aidType}</td>
            <td>${aid.amountAwarded}</td>
            <td>${aid.remainingBalance}</td>
            <td>${aid.status}</td>
        `;

        tbody.appendChild(row);
    });
}

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

