const studentData = {
    "22100": [
        {
            year: "2024",
            residency: "CPUT Belville Dormitory",
            contact: "22100@mycput.ac.za",
            id: "0407215312080",
        }
    ],
    "22200": [
        {
            year: "2024",
            residency: "CPUT Cape Town Dormitory",
            contact: "22200@mycput.ac.za",
            id: "080514691012345",
        },
    ],
};

function renderTable() {
    const params = new URL(window.location.href).searchParams;
    const studentNumber = params.get("studentNumber");
    
    const tbody = document.querySelector("table tbody");
    tbody.textContent = ''; // Clear existing rows

    const studentInfo = studentData[studentNumber] || [];

    for (let info of studentInfo) {
        const tr = document.createElement("tr");

        const tdYear = document.createElement("td");
        tdYear.textContent = info.year || 'N/A';

        const tdResidency = document.createElement("td");
        tdResidency.textContent = info.residency || 'N/A';

        const tdContact = document.createElement("td");
        tdContact.textContent = info.contact || 'N/A';

        const tdId = document.createElement("td");
        tdId.textContent = info.id || 'N/A';

        tr.append(tdYear, tdResidency, tdContact, tdId);
        tbody.appendChild(tr);
    }
}

document.addEventListener("DOMContentLoaded", renderTable);
