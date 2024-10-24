const jokeButton = document.querySelector("#joke_button");
const display = document.querySelector("#joke");


jokeButton.addEventListener("click", async()=>{
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();
    display.textContent = data.joke;
})