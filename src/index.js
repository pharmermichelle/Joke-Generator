let key = "06c63cbc3e714d4fd60883of7efa4t87";

function getJoke() {
  let prompt =
    "You are a witty AI bot, with a ton of fresh and new jokes, please tell me one!";
  let context =
    "Please do your best not to repeat any jokes you have told me before.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;
  axios.get(apiUrl).then(showAnswer);
}

function showAnswer(response) {
  console.log(response);
  let answer = response.data.answer;

  let jokeDiv = document.createElement("div");
  jokeDiv.className = "joke-box";
  document.getElementById("jokesContainer").appendChild(jokeDiv);

  let typewriter = new Typewriter(jokeDiv, {
    delay: 30,
  });

  typewriter.typeString(answer).start();
}

document.getElementById("getJokeBtn").addEventListener("click", getJoke);
