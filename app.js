document.addEventListener("DOMContentLoaded", () => {

// Array of background image URLs
let images = [
    'url("image1.jpg")',
    'url("image2.jpg")',
    'url("image3.jpg")',
    'url("image4.jpg")',
    'url("image6.jpg")'
];

// Function to set a random background image
function setRandomBackground() {
    let randomIndex = Math.floor(Math.random() * images.length); // Get a random index
    document.body.style.backgroundImage = images[randomIndex];   // Set the background image
}

// Call the function when the page loads
window.onload = setRandomBackground;

})