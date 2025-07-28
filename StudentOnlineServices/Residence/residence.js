document.addEventListener("DOMContentLoaded", function () {
    // Residence details linked to student numbers
    const userResidences = {
        '123456': {
            residence: 'York House',
            room: 'A1',
            year: '2024',
            address: '22 Lower York Rd, Rosebank, Cape Town'
        },
        '654321': {
            residence: 'Student Republic',
            room: 'B3',
            year: '2024',
            address: '33 Salt River Rd, Salt River, Cape Town'
        }
    };

    // Get the logged-in student's number from session storage
    const studentNumber = sessionStorage.getItem('studentNumber');
    if (studentNumber && userResidences[studentNumber]) {
        // Preload the residence details for the logged-in user
        registeredResidence = userResidences[studentNumber];
        showRegistrationDetails();
    } else {
        console.log("No residence information found for this user.");
    }
});

let registeredResidence = null; // To store registration details
const residences = {
    "York House": {
        address: "22 Lower York Rd, Rosebank, Cape Town",
        rooms: ["A1", "A2", "B1", "B2", "C1", "C2"]
    },
    "Student Republic": {
        address: "33 Salt River Rd, Salt River, Cape Town",
        rooms: ["A3", "A4", "B3", "B4", "C3", "C4"]
    }
};

function showAddress() {
    const selectedResidence = document.getElementById("residence").value;
    const addressElement = document.getElementById("residenceAddress");

    if (selectedResidence) {
        addressElement.textContent = residences[selectedResidence].address;
        populateRooms(selectedResidence);
    } else {
        addressElement.textContent = "";
        document.getElementById("rooms").innerHTML = ""; // Clear rooms
    }
}

function populateRooms(residence) {
    const roomsSelect = document.getElementById("rooms");
    roomsSelect.innerHTML = ""; // Clear existing options

    residences[residence].rooms.forEach(room => {
        const option = document.createElement("option");
        option.value = room;
        option.textContent = room;
        roomsSelect.appendChild(option);
    });
}

function showRegistrationDetails() {
    const detailsElement = document.getElementById("registrationDetails");

    if (registeredResidence) {
        detailsElement.innerHTML = `
            <tr>
                <th>Residence</th>
                <th>Room</th>
                <th>Year</th>
                <th>Address</th>
            </tr>
            <tr>
                <td>${registeredResidence.residence}</td>
                <td>${registeredResidence.room}</td>
                <td>${registeredResidence.year}</td>
                <td>${registeredResidence.address}</td>
            </tr>
        `;
        $('#registrationDetailsModal').modal('show');
        document.getElementById("editButton").style.display = "inline-block";
        document.getElementById("deleteButton").style.display = "inline-block";
        document.getElementById("registerButton").style.display = "none"; // Hide the register button
    } else {
        alert("No registration found.");
    }
}

function registerResidence() {
    const selectedResidence = document.getElementById("residence").value;
    const selectedRoom = document.getElementById("rooms").value;
    const selectedYear = document.getElementById("year").value;

    if (selectedResidence && selectedRoom && selectedYear) {
        registeredResidence = {
            residence: selectedResidence,
            room: selectedRoom,
            year: selectedYear,
            address: residences[selectedResidence].address
        };
        
        // Show success message as a popup
        alert("Registration successful!");
        document.getElementById("registerButton").style.display = "none"; // Hide the register button

        // Show edit and delete buttons
        document.getElementById("editButton").style.display = "inline-block";
        document.getElementById("deleteButton").style.display = "inline-block";

        console.log("Registration completed:", registeredResidence); // Debugging line
        showRegistrationDetails(); // Display the newly registered residence details
    } else {
        alert("Please fill out all fields before registering.");
    }
}

function editDetails() {
    if (registeredResidence) {
        document.getElementById("residence").value = registeredResidence.residence;
        document.getElementById("rooms").value = registeredResidence.room;
        document.getElementById("year").value = registeredResidence.year;

        // Alert the user about updating details
        alert("Edit the details and click Update to save changes.");
        
        // Show address again
        showAddress();

        // Show the update button and hide edit button
        document.getElementById("updateButton").style.display = "inline-block";
        document.getElementById("editButton").style.display = "none";
    }
}

function updateDetails() {
    const selectedRoom = document.getElementById("rooms").value;
    const selectedYear = document.getElementById("year").value;

    if (registeredResidence) {
        registeredResidence.room = selectedRoom;
        registeredResidence.year = selectedYear;

        alert("Registration updated successfully!");
        showRegistrationDetails(); // Show updated details
    } else {
        alert("No registration found.");
    }
}

function deleteRegistration() {
    if (confirm("Are you sure you want to delete your registration?")) {
        registeredResidence = null;
        document.getElementById("registrationDetails").innerHTML = '';
        alert("Your registration has been deleted.");

        document.getElementById("editButton").style.display = "none";
        document.getElementById("deleteButton").style.display = "none";
        document.getElementById("updateButton").style.display = "none";
        document.getElementById("registerButton").style.display = "inline-block"; // Show the register button again
    }
}
