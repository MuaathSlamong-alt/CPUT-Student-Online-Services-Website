// Data for student years with names included
const studentData = {
    "123456": {
        name: "Bart Simpson",
        years: [
            { subjectCode: "BPR125SO1", subject: "Business Practice", year: "2024", block: "JAN-NOV" },
            { subjectCode: "ADF125SO1", subject: "Applications Development", year: "2024", block: "JAN-NOV" },
            { subjectCode: "CNF125SO1", subject: "Communications Network Foundations", year: "2024", block: "JAN-NOV" },
            { subjectCode: "ICE125SO1", subject: "Elective", year: "2024", block: "JAN-NOV" },
            { subjectCode: "ICF125SO1", subject: "ICF Fundamentals", year: "2024", block: "JAN-NOV" }
        ]
    },
    "654321": {
        name: "Homer Simpson",
        years: [
            { subjectCode: "BPR125SO1", subject: "Business Practice", year: "2024", block: "JAN-NOV" },
            { subjectCode: "ADF125SO1", subject: "Applications Development", year: "2024", block: "JAN-NOV" },
            { subjectCode: "CNF125SO1", subject: "Communications Network Foundations", year: "2024", block: "JAN-NOV" },
            { subjectCode: "ICE125SO1", subject: "Elective", year: "2024", block: "JAN-NOV" },
            { subjectCode: "ICF125SO1", subject: "ICF Fundamentals", year: "2024", block: "JAN-NOV" }
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
        const years = student.years || [];
        document.querySelector("section.wrapper-main table tbody").innerHTML = years.map(year => `
            <tr>
                <td>${year.subjectCode}</td>
                <td>${year.subject}</td>
                <td>${year.year}</td>
                <td>${year.block}</td>
            </tr>
        `).join('') || '<tr><td colspan="4">No data available for this student</td></tr>';
    } else {
        console.log("No student number found in sessionStorage or invalid student number.");
        window.location.href = 'login.html'; // Redirect to login if student number is not found
    }
});
