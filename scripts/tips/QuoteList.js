import { getQuotes } from "../database.js";

export const QuoteList = () => {
  const quotes = getQuotes();
  let quoteString = "";

  for (const quote of quotes) {
    quoteString += `<section class="quote-card">
            <div class="quote">${quote.quote}</div>
            </section>`;
  }
  return quoteString;
};
