// Add event listener to nav links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        console.log('Nav link clicked');
    });
});