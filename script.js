document.addEventListener('DOMContentLoaded', function() {
    const chance = 100;
    const randomNumber = Math.floor(Math.random() * chance) + 1; // Generates a number between 1 and 50

    if (randomNumber === 1) {
        setTimeout(function() {
            document.getElementById('surveyPopup').style.display = 'flex'; // Display the popup after a slight delay
        }, 1000);
    }
});

function closePopup() {
    document.getElementById('surveyPopup').style.display = 'none'; // Hide the popup
}

function takeSurvey() {
    window.location.href = 'survey.html';
    closePopup();
}

