let key = "06c63cbc3e714d4fd60883of7efa4t87";

function getJoke() {
  let prompt = "Tell me a joke please!";
  let context = "Use a new joke everytime.";
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
