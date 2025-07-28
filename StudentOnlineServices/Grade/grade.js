// Data for student grades with names included
const studentData = {
    "123456": {
        name: "Bart Simpson",
        grades: [
            { date: "2024-06-12", subject: "Business Practice", status: "Marked", mark: "89", result: "Passed with distinction" },
            { date: "2024-06-14", subject: "Applications Development", status: "Marked", mark: "78", result: "Passed with distinction" },
            { date: "2024-06-17", subject: "Communications Network Foundations", status: "Marked", mark: "66", result: "Passed" },
            { date: "2024-06-18", subject: "Elective", status: "Marked", mark: "76", result: "Passed with distinction" },
            { date: "2024-06-21", subject: "ICF Fundamentals", status: "Marked", mark: "87", result: "Passed with distinction" }
        ]
    },
    "654321": {
        name: "Homer Simpson",
        grades: [
            { date: "2024-06-12", subject: "Business Practice", status: "Marked", mark: "45", result: "Failed" },
            { date: "2024-06-14", subject: "Applications Development", status: "Marked", mark: "65", result: "Passed" },
            { date: "2024-06-17", subject: "Communications Network Foundations", status: "Marked", mark: "75", result: "Passed with distinction" },
            { date: "2024-06-18", subject: "Elective", status: "Marked", mark: "68", result: "Passed" },
            { date: "2024-06-21", subject: "ICF Fundamentals", status: "Marked", mark: "56", result: "Passed" }
        ]
    }
};

// Initialize the page on load
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the student number from session storage
    const studentNumber = sessionStorage.getItem('studentNumber');

    // Check if student number exists in sessionStorage
    if (studentNumber && studentData[studentNumber]) {
        const student = studentData[studentNumber]; // Fetch student data based on student number

        // Update header with the student's name
        document.getElementById("studentName").textContent = `Welcome ${student.name}`;

        // Populate table with student grade data
        const grades = student.grades || [];
        document.querySelector("section.wrapper-main1 table tbody").innerHTML = grades.map(grade => `
            <tr>
                <td>${grade.date}</td>
                <td>${grade.subject}</td>
                <td>${grade.status}</td>
                <td>${grade.mark}</td>
                <td>${grade.result}</td>
            </tr>
        `).join('') || '<tr><td colspan="5">No data available for this student</td></tr>';
    } else {
        console.log("No student number found in sessionStorage or invalid student number.");
        window.location.href = 'login.html'; // Redirect to login if student number is not found
    }
});

