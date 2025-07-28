const studentAddressData = {
    "22100": [
        {
            cityPostal: "CapeTown 7764",
            state: "Western Cape",
            country: "South Africa",
            address: "11 Mery Way Athlone",
        }
    ],
    "22200": [
        {
            cityPostal: "Cape Town 7764",
            state: "Western Cape",
            country: "South Africa",
            address: "12 Ricky Lane Crawford",
        },
    ],
};

function renderAddressTable() {
    const params = new URL(window.location.href).searchParams;
    const studentNumber = params.get("studentNumber");
    
    const tbody = document.querySelector("table tbody");
    tbody.textContent = ''; // Clear existing rows

    const addressData = studentAddressData[studentNumber] || [];

    for (let address of addressData) {
        const tr = document.createElement("tr");

        const tdCityPostal = document.createElement("td");
        tdCityPostal.textContent = address.cityPostal || 'N/A';

        const tdState = document.createElement("td");
        tdState.textContent = address.state || 'N/A';

        const tdCountry = document.createElement("td");
        tdCountry.textContent = address.country || 'N/A';

        const tdStreet = document.createElement("td");
        tdStreet.textContent = address.address || 'N/A';

        tr.append(tdCityPostal, tdState, tdCountry, tdStreet);
        tbody.appendChild(tr);
    }
}

document.addEventListener("DOMContentLoaded", renderAddressTable);
