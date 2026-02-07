const chat = document.getElementById("_chat");

const jokeBtn = document.getElementById("jokeBtn");
generateJoke();
jokeBtn.addEventListener("click",generateJoke);
async function generateJoke(){
