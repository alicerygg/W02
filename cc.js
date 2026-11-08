// Create the character object
const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image: "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

    // Reduce health by 20 when attacked
    attacked() {
        if (this.health === 0) {
            return;
        }

        this.health -= 20;

        if (this.health <= 0) {
            this.health = 0;
            alert(`${this.name} has died!`);
        }

        displayCharacter();
    },

    // Increase level by 1
    levelUp() {
        this.level += 1;
        displayCharacter();
    }
};

// Display the character information on the page
function displayCharacter() {
    document.querySelector("#character-name").textContent = character.name;
    document.querySelector("#character-class").textContent = `Class: ${character.class}`;
    document.querySelector("#character-level").textContent = `Level: ${character.level}`;
    document.querySelector("#character-health").textContent = `Health: ${character.health}`;
    document.querySelector("#character-image").src = character.image;
}

// Connect the buttons to the object methods
document.querySelector("#attack-button").addEventListener("click", () => {
    character.attacked();
});

document.querySelector("#level-button").addEventListener("click", () => {
    character.levelUp();
});

// Display the character when the page loads
displayCharacter();