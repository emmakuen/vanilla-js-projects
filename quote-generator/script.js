const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter");
const loaderEl = document.getElementById("loader");
const quoteContainer = document.getElementById("quote-container");

let quotes = [];
let quote = {
  text: "What you are is what you have been. What you'll be is what you do now.",
  author: "Buddha",
};

// Event Listeners
newQuoteButton.addEventListener("click", () => newQuote());
twitterButton.addEventListener("click", () => tweetQuote());

// Show New Quote
const newQuote = () => {
  loading();
  try {
    if (quotes.length === 0) {
      // Get Quotes Locally
      quotes = localQuotes;
    }
    while (quote.text == quoteEl.innerText) {
      let newIndex = Math.floor(Math.random() * quotes.length);
      quote = quotes[newIndex];
    }
    quoteEl.innerText = quote.text;
    styleLengthyQuote(quoteEl);
    authorEl.innerText =
      quote.author === null ? "- Unknown" : `- ${quote.author}`;
    loadingComplete();
  } catch (err) {
    console.log(err);
  }
};

// Get Quotes From API
const fetchQuotes = async () => {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const res = await fetch(apiUrl);
    quotes = await res.json();
    loadingComplete();
  } catch (err) {
    console.log(err);
  }
};

const styleLengthyQuote = (quoteElement) =>
  quoteElement.innerText.length > 100
    ? quoteElement.classList.add("long-quote")
    : quoteElement.classList.remove("long-quote");

// Tweet Quote
const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteEl.innerText} - ${authorEl.innerText}`;
  window.open(twitterUrl, "_blank");
};

// Show Loader
const loading = () => {
  loaderEl.hidden = false;
  quoteContainer.hidden = true;
};

// Hide Loader
const loadingComplete = () => {
  loaderEl.hidden = true;
  quoteContainer.hidden = false;
};

// On Load
fetchQuotes().then(() => {
  newQuote();
});
