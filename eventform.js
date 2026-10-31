const typeSelect = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const studentGuestInfo = document.querySelector("#studentGuestInfo");

const ticketForm = document.querySelector("#ticketForm");
const errors = document.querySelector("#errors");
const ticketInfo = document.querySelector("#ticketInfo");
const eventDate = document.querySelector("#event");

// Show the correct input when the user selects Student or Guest
typeSelect.addEventListener("change", function () {
    if (typeSelect.value === "student") {
        extraField.hidden = false;
        extraLabel.textContent = "Student I#";
        studentGuestInfo.value = "";
        studentGuestInfo.required = true;
    } else if (typeSelect.value === "guest") {
        extraField.hidden = false;
        extraLabel.textContent = "Access Code";
        studentGuestInfo.value = "";
        studentGuestInfo.required = true;
    } else {
        extraField.hidden = true;
        studentGuestInfo.value = "";
        studentGuestInfo.required = false;
    }
});

// Require an event date later than today
function setMinimumDate() {
    const today = new Date();
    today.setMinutes(today.getMinutes() - today.getTimezoneOffset());

    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    eventDate.min = tomorrow.toISOString().split("T")[0];
}

setMinimumDate();

// Validate the form when submitted
ticketForm.addEventListener("submit", function (event) {
    event.preventDefault();

    errors.innerHTML = "";
    ticketInfo.innerHTML = "";

    const errorMessages = [];

    // Validate the event date
    const selectedDate = eventDate.value;

    if (!selectedDate) {
        errorMessages.push("Please select an event date.");
    } else {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const chosenDate = new Date(selectedDate + "T00:00:00");

        if (chosenDate <= today) {
            errorMessages.push("Event date must be later than today.");
        }
    }

    // Validate the Student I# or Guest access code
    if (typeSelect.value === "student") {
        if (!/^\d{9}$/.test(studentGuestInfo.value.trim())) {
            errorMessages.push("Student I# must contain exactly 9 digits.");
        }
    } else if (typeSelect.value === "guest") {
        if (studentGuestInfo.value.trim() !== "EVENT131") {
            errorMessages.push("Guest access code must be EVENT131.");
        }
    }

    // Display errors if any validation fails
    if (errorMessages.length > 0) {
        const errorHeading = document.createElement("h2");
        errorHeading.textContent = "Please fix the following errors:";
        errors.appendChild(errorHeading);

        const errorList = document.createElement("ul");

        errorMessages.forEach(function (message) {
            const listItem = document.createElement("li");
            listItem.textContent = message;
            errorList.appendChild(listItem);
        });

        errors.appendChild(errorList);
        return;
    }

    // Display ticket information after successful validation
    const ticketHeading = document.createElement("h2");
    ticketHeading.textContent = "Your Event Ticket";
    ticketInfo.appendChild(ticketHeading);

    const ticketMessage = document.createElement("p");
    ticketMessage.textContent =
        `Thank you, ${document.querySelector("#fname").value} ${document.querySelector("#lname").value}!`;
    ticketInfo.appendChild(ticketMessage);

    const ticketEmail = document.createElement("p");
    ticketEmail.textContent =
        `Email: ${document.querySelector("#email").value}`;
    ticketInfo.appendChild(ticketEmail);

    const ticketDate = document.createElement("p");
    ticketDate.textContent = `Event Date: ${eventDate.value}`;
    ticketInfo.appendChild(ticketDate);

    const ticketType = document.createElement("p");
    ticketType.textContent =
        `Ticket Type: ${typeSelect.options[typeSelect.selectedIndex].text}`;
    ticketInfo.appendChild(ticketType);

    const confirmation = document.createElement("p");
    confirmation.textContent =
        "Your ticket request has been submitted successfully!";
    ticketInfo.appendChild(confirmation);
});