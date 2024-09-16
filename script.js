// script.ts
// Get the button and the skills section
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Add a click event listener to the button
toggleButton.addEventListener('click', function () {
    // Toggle the visibility of the skills section
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
