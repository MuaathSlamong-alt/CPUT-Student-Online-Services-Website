const contactDetailsData = {
    "22100": [
        {
            studentcellphonenumber: "0610688312",
            personalemail: "JohnnyBins@gmail.com",
            emergencycontact: "0815518971",
        }
    ],
    "22200": [
        {
            studentcellphonenumber: "0814560610",
            personalemail: "MikenIkes@gmail.com",
            emergencycontact: "0680714523",
        },
    ],
};

function renderContactTable() {
    const params = new URL(window.location.href).searchParams;
    const studentNumber = params.get("studentNumber");
    
    const tbody = document.querySelector("table tbody");
    tbody.textContent = ''; // Clear existing rows

    const contactDetails = contactDetailsData[studentNumber] || [];

    for (let contact of contactDetails) {
        const tr = document.createElement("tr");

        const tdCell = document.createElement("td");
        tdCell.textContent = contact.studentcellphonenumber || 'N/A';

        const tdEmail = document.createElement("td");
        tdEmail.textContent = contact.personalemail || 'N/A';

        const tdEmergency = document.createElement("td");
        tdEmergency.textContent = contact.emergencycontact || 'N/A';

        tr.append(tdCell, tdEmail, tdEmergency);
        tbody.appendChild(tr);
    }
}

document.addEventListener("DOMContentLoaded", renderContactTable);
