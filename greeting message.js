document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('header');
    // Adding greeting message based on the time of day
    const now = new Date();
    const hours = now.getHours();

    const greeting = document.createElement('p');
    if (hours >= 6 && hours < 12) {
        greeting.textContent = "Good Morning! Welcome to our website!";
    } else if (hours >= 12 && hours < 18) {
        greeting.textContent = "Good Afternoon! Thanks for stopping by!";
    } else {
        greeting.textContent = "Good Evening! Enjoy your visit!";
    }

    // Style for the greeting message
    greeting.style.color = "white";
    greeting.style.fontSize = "1.2rem";
    greeting.style.marginTop = "10px";
    greeting.style.textAlign = "center";

    // Inserting the greeting message after the logo
    const logo = header.querySelector('img'); 
    logo.insertAdjacentElement('afterend', greeting);
});
