// select an HTML element from the DOM
// save it to a local variable called heading

let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "#FFA5E0";
heading.style.fontSize = "10em";
// CSS: font-size: 10em;

heading.style.border = "5px solid #FFA5E0";
heading.style.borderRadius = "20%";
heading.style.padding = "100px";

// do everything in one line
document.querySelector("#topics").style.color = "blue";

// there are different ways to select from the DOM
document.getElementById("topics");

// you can select more than one element at one time
console.log(document.querySelectorAll(".list"));

// apply a class to an element
heading.classList.add("fancy-heading");
let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("special");
topicsClassList.toggle("special");

let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
})
                