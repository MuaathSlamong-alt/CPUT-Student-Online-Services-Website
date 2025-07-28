
// Your existing side menu code...

let lastOpenButton = null;

function moveNextButton(clickedButton) {
    const buttonGroup = clickedButton.parentElement;
    const nextButtonGroup = buttonGroup.nextElementSibling;
    const dropdown = buttonGroup.querySelector('.dropdown-menu');

    // Toggle the dropdown visibility
    if (dropdown) {
        dropdown.classList.toggle('show');
    }

    // Move the next button down
    if (nextButtonGroup) {
        nextButtonGroup.classList.toggle('moved-down');
    }

    // Close the previously opened dropdown if it's different from the current one
    if (lastOpenButton && lastOpenButton !== buttonGroup) {
        const lastDropdown = lastOpenButton.querySelector('.dropdown-menu');
        if (lastDropdown) {
            lastDropdown.classList.remove('show');
        }
        const lastNextButtonGroup = lastOpenButton.nextElementSibling;
        if (lastNextButtonGroup) {
            lastNextButtonGroup.classList.remove('moved-down');
        }
    }

    // Update the last opened button
    lastOpenButton = buttonGroup;
}

// Dynamically update href attributes based on studentNumber in sessionStorage
document.addEventListener("DOMContentLoaded", function() {
    const studentNumber = sessionStorage.getItem('studentNumber');
    
    if (studentNumber) {
        // Update the href for paymentHistory.html
        document.querySelectorAll('a[href*="paymentHistory.html"]').forEach(link => {
            link.href = `../PaymentHistory/paymentHistory.html?studentNumber=${studentNumber}`;
        });
        
        // Update the href for tuitionFee.html
        document.querySelectorAll('a[href*="tuitionFee.html"]').forEach(link => {
            link.href = `../TuitionFee/tuitionFee.html?studentNumber=${studentNumber}`;
        });
        
        // Update the href for financialAid.html
        document.querySelectorAll('a[href*="financialAid.html"]').forEach(link => {
            link.href = `../FinancialAid/financialAid.html?studentNumber=${studentNumber}`;
        });

        // Update the href for emergencyContact.html
        document.querySelectorAll('a[href*="emergencyContact.html"]').forEach(link => {
            link.href = `../EmergencyContact/emergencyContact.html?studentNumber=${studentNumber}`;
        });

        // Update the href for grade.html
        document.querySelectorAll('a[href*="grade.html"]').forEach(link => {
            link.href = `../Grade/grade.html?studentNumber=${studentNumber}`;
        });

        // Update the href for insuranceProvider.html
        document.querySelectorAll('a[href*="insuranceProvider.html"]').forEach(link => {
            link.href = `../InsuranceProvider/insuranceProvider.html?studentNumber=${studentNumber}`;
        });

        // Update the href for medicalHistory.html
        document.querySelectorAll('a[href*="medicalHistory.html"]').forEach(link => {
            link.href = `../MedicalHistory/medicalHistory.html?studentNumber=${studentNumber}`;
        });

        // Update the href for PersonalContactDetails.html
        document.querySelectorAll('a[href*="PersonalContactDetails.html"]').forEach(link => {
            link.href = `../PersonalContactDetails/PersonalContactDetails.html?studentNumber=${studentNumber}`;
        });

        // Update the href for PersonalInformationUpdate.html
        document.querySelectorAll('a[href*="PersonalInformationUpdate.html"]').forEach(link => {
            link.href = `../PersonalInformation/PersonalInformationUpdate.html?studentNumber=${studentNumber}`;
        });

        // Update the href for residence.html
        document.querySelectorAll('a[href*="residence.html"]').forEach(link => {
            link.href = `../Residence/residence.html?studentNumber=${studentNumber}`;
        });

        // Update the href for status.html
        document.querySelectorAll('a[href*="status.html"]').forEach(link => {
            link.href = `../Status/status.html?studentNumber=${studentNumber}`;
        });

        // Update the href for year.html
        document.querySelectorAll('a[href*="year.html"]').forEach(link => {
            link.href = `../Year/year.html?studentNumber=${studentNumber}`;
        });
    }
});





