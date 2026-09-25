// 1. functions
function nameOfFunction(name){
    console.log("hello Functions! " + name);
    // string template
    console.log(`hello Functions! ${name}`);
}
    // call funtion, invoke, execute
    nameOfFunction("Alice Rygg");

// 2. Event listeners
    // Grab an element from the DOM to "listen" to.
let selectBox = document.querySelector("#theme-select");
        // regester an event listener on the element
        // waiting for a specific thing to happen, then run a function
selectBox.addEventListener("change", changeTheme);

function changeTheme(event) {
    console.log(event.target.value);
}
// 3. If statements

let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else if (current === 'mountain') {
        document.body.style.backgroundImage = "url('mountain.jpg')";
        pageContent.style.fontFamily = "'Courier New', monospace";
        pageContent.style.color = "pink"; // Change text color for better visibility
    } else if (current === 'sunset') {
        document.body.style.backgroundImage = "url('sunset.jpg')";
        pageContent.style.fontFamily = "Verdana, sans-serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          