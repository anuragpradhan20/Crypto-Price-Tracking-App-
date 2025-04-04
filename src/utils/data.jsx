export let COINGECKO_API_KEY="CG-eTR9yJhr8j8ANCU7oKDYCt8G";
export let COINGECKO_API_URL="https://api.coingecko.com/api/v3/coins/markets?vs_currency";
export let COINGECKO_API_URL_FOR_ID="https://api.coingecko.com/api/v3/coins/markets?vs_currency";
export let OPTIONS = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-eTR9yJhr8j8ANCU7oKDYCt8G'}
  };
export const CURRENCY_SYMBOL = {
  usd: '$',
  eur: '€',
  inr: '₹',
};