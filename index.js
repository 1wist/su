document.addEventListener('DOMContentLoaded', () => {
    const wordDisplay = document.getElementById('wordDisplay');
    const newWordBtn = document.getElementById('newWordBtn');

    // Our "database" of words/phrases
    const words = [
        "Jump Rope",
        "Firefighter",
        "Telescope",
        "Basketball",
        "Butterfly",
        "Photographer",
        // Add more words/phrases as desired
    ];

    function getNewWord() {
        const randomIndex = Math.floor(Math.random() * words.length);
        wordDisplay.textContent = words[randomIndex];
    }

    newWordBtn.addEventListener('click', getNewWord);

    // Optionally, get a new word at the start
    getNewWord();
});
