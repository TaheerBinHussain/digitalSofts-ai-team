// script.js

// Add event listener to the dark mode toggle button
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
let isDarkMode = localStorage.getItem('dark-mode') === 'true';


// Enable dark mode on click
const enableDarkMode = () => {
  isDarkMode = true;
  body.classList.add('dark-mode');
  localStorage.setItem('dark-mode', 'true');
};


// Disable dark mode on click
const disableDarkMode = () => {
  isDarkMode = false;
  body.classList.remove('dark-mode');
  localStorage.setItem('dark-mode', 'false');
};


// Add event listener to dark mode toggle button
// when clicked, it toggles dark mode
// and also triggers the button click



// Add event listener to dark mode toggle button
// when clicked, it toggles dark mode
// and also triggers the button click




// Add event listener to window on load
// When page is loaded we check if we can use local storage
// If yes, we check if we have saved the state of dark mode
// and switch dark mode on/off accordingly

window.onload = () => {
  if (window.localStorage) {
    isDarkMode = localStorage.getItem('dark-mode') === 'true';
  }
  if (isDarkMode) {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};