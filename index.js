import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_10XwLnUpJHPlRG6R3siuFdn8iOXYyctX0MEl19s5"
);

export async function convertCurrency(fromCurrn, toCurrn, amt) {
  const response = await freecurrencyapi.latest({
    base_currency: fromCurrn,
    currencies: toCurrn,
  });
  const result = response.data[toCurrn];

  return result * amt;
}

convertCurrency("INR", "USD", 1);
