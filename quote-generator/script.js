const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteButton = document.getElementById("new-quote");
const twitterButton = document.getElementById("twitter");

let quotes = [];
let quote = {
  text: "What you are is what you have been. What you'll be is what you do now.",
  author: "Buddha",
};

newQuoteButton.addEventListener("click", () => newQuote());

twitterButton.addEventListener("click", () => tweetQuote());

// Show New Quote
const newQuote = () => {
  console.log("triggered");
  try {
    if (quotes.length === 0) {
      // Get Quotes Locally
      quotes = localQuotes;
      console.log("LOCALLY LOADED");
    }
    while (quote.text == quoteEl.innerText) {
      let newIndex = Math.floor(Math.random() * quotes.length);
      quote = quotes[newIndex];
    }
    quoteEl.innerText = quote.text;
    styleLengthyQuote(quoteEl);
    authorEl.innerText =
      quote.author === null ? "- Unknown" : `- ${quote.author}`;
  } catch (err) {
    console.log(err);
  }
};

// Get Quotes From API
const fetchQuotes = async () => {
  console.log("triggered REQUEST");
  const apiUrl = "httpsss://type.fit/api/quotes";
  try {
    const res = await fetch(apiUrl);
    quotes = await res.json();
    console.log("REQUEST MADE");
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

// On Load
fetchQuotes().then(() => {
  newQuote();
});
