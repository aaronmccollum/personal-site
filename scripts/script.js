// --- MODAL JAVASCRIPT ---

// Access modal DOM nodes
const modal = document.getElementById("contact-modal");
const contactLink = document.getElementById("contact-link");
const span = document.getElementsByClassName("close")[0];

// Event listener to open modal when user clicks link
contactLink.addEventListener('click', function() {
    modal.style.display = "block";
});

// Close the modal when the user clicks on the X button
span.addEventListener('click', function() {
    modal.style.display = "none";
});
