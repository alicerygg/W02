// API calls are asynchronous
async function getCatFacts() {
    const url = "https://catfact.ninja/fact";

    const responce = await fetch(url);

    const data = await responce.json();

    console.log(data.fact);
}

document.querySelector("button")
    .addEventListener("click", e => {
        getCatFacts();
    });

function displayCatFacts(fact) {
    document.querySelector("#cat-fact").innerHTML = `<p>${fact}</p>`;
};
