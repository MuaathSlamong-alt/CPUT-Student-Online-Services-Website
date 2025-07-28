const studentPaymentHistories = {
    "123456": [
        {
            date: "2024-07-01",
            method: "Credit Card",
            description: "Tuition",
            amount: "R5 000.00",
            receiptNumber: "REC-2024-0818-123456"
        },
        {
            date: "2024-07-26",
            method: "Bank Transfer",
            description: "Tuition",
            amount: "R3 000.00",
            receiptNumber: "REC-2024-2018-127486"
        },
        {
            date: "2024-08-01",
            method: "Credit Card",
            description: "Tuition",
            amount: "R1 795.00",
            receiptNumber: "REC-2024-0818-55778556"
        }
    ],
    "654321": [
        {
            date: "2024-06-15",
            method: "Online Payment",
            description: "Tuition",
            amount: "R4 500.00",
            receiptNumber: "REC-2024-0818-512693"
        },
        {
            date: "2024-07-15",
            method: "Cash",
            description: "Tuition",
            amount: "R8 000.00",
            receiptNumber: "REC-2024-0818-789531"
        },
        {
            date: "2024-07-15",
            method: "Cash",
            description: "Tuition",
            amount: "R2 000.00",
            receiptNumber: "REC-2024-0818-78993"
        }
    ],
};

function populateTable() {
    const tbody = document.querySelector("table tbody");
    const params = new URLSearchParams(window.location.search);
    const studentNumber = params.get("studentNumber");

    // Get payment history for the current student
    const paymentHistory = studentPaymentHistories[studentNumber] || [];

    if (paymentHistory.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5">No payment history found.</td></tr>';
    } else {
        paymentHistory.forEach(payment => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${payment.date}</td>
                <td>${payment.method}</td>
                <td>${payment.description}</td>
                <td>${payment.amount}</td>
                <td>${payment.receiptNumber}</td>
            `;
            tbody.appendChild(row);
        });
    }
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