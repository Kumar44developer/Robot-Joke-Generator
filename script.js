const chat = document.getElementById("_chat");

const jokeBtn = document.getElementById("jokeBtn");
generateJoke();
jokeBtn.addEventListener("click",generateJoke);
async function generateJoke(){

    jokeBtn.disabled = true;

    const message = createMessageElement("Hey Robot tell me a joke?");
    appendMessage(message);

    const joke = createMessageElement();
    setElementContent(joke,'<i class="fa-solid fa-ellipsis"></i>');
