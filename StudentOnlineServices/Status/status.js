const studentData = {
    "123456": {
        name: "Bart Simpson",
        status: [
        { date: "2024-06-12", subject: "Business Practice", status: "Marked", mark: "89", result: "Passed with distinction" },
        { date: "2024-06-14", subject: "Applications Development", status: "Marked", mark: "78", result: "Passed with distinction" },
        { date: "2024-06-17", subject: "Communications Network Foundations", status: "Marked", mark: "66", result: "Passed" },
        { date: "2024-06-18", subject: "Elective", status: "Marked", mark: "76", result: "Passed with distinction" },
        { date: "2024-06-21", subject: "ICF Fundamentals", status: "Marked", mark: "87", result: "Passed with distinction" }
    ]
},
    "654321": {
        name: "Homer Simpson",
        status: [
        { date: "2024-06-12", subject: "Business Practice", status: "Marked", mark: "45", result: "Failed" },
        { date: "2024-06-14", subject: "Applications Development", status: "Marked", mark: "65", result: "Passed" },
        { date: "2024-06-17", subject: "Communications Network Foundations", status: "Marked", mark: "75", result: "Passed with distinction" },
        { date: "2024-06-18", subject: "Elective", status: "Marked", mark: "68", result: "Passed" },
        { date: "2024-06-21", subject: "ICF Fundamentals", status: "Marked", mark: "56", result: "Passed" }
         ]
    }
};

// Initialize the page on load
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the student number from session storage
    const studentNumber = sessionStorage.getItem('studentNumber');

    // Check if student number exists in sessionStorage
    if (studentNumber && studentData[studentNumber]) {
        const student = studentData[studentNumber]; // Fetch student data based on student number

        // Update header with the student's name
        document.getElementById("studentName").textContent = `Welcome ${student.name}`;

        // Populate the table with the student's year data
        const status = student.status || [];
        document.querySelector("section.wrapper-main table tbody").innerHTML = status.map(status=> `
            <tr>
                <td>${status.subjectCode}</td>
                <td>${status.subject}</td>
                <td>${status.subjectCode}</td>
                <td>${status.status}</td>
                <td>${status.mark}</td>
            </tr>
        `).join('') || '<tr><td colspan="5">No data available for this student</td></tr>';
    } else {
        console.log("No student number found in sessionStorage or invalid student number.");
        window.location.href = 'login.html'; // Redirect to login if student number is not found
    }
});
