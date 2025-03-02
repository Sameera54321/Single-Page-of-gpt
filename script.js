const facts = [
    "Honey never spoils.",
    "A group of flamingos is called a 'flamboyance'.",
    "Bananas are berries, but strawberries aren't.",
    "Octopuses have three hearts.",
    "Wombat poop is cube-shaped.",
    "A day on Venus is longer than a year on Venus."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').textContent = facts[randomIndex];
});