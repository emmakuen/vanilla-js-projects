const containerEl = document.querySelector(".container");
const jokeEl = document.querySelector(".joke");
const buttonEl = document.querySelector("#button");

const getJoke = async () => {
  try {
    const response = await fetch(url, { headers });
    const data = await response.json();
    const { punchline, setup } = data.body[0];
    const joke = `${setup} ${punchline}`;
    return joke;
  } catch (err) {
    console.log("Oops,", err);
    return "Oops, we couldn't fetch the joke.";
  }
};

const showJoke = (joke) => {
  jokeEl.innerHTML = `<p>${joke}</p>`;
  jokeEl.classList.remove("hidden");
};

// On Click
buttonEl.addEventListener("click", () => {
  getJoke().then(showJoke);
});

// On Load
getJoke().then(showJoke);
