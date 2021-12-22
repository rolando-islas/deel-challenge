export default async function getData(query) {
  let apiURL = "https://restcountries.com/v3.1/all";

  if (query) {
    apiURL = `https://restcountries.com/v3.1/name/${query}`;
  }

  const data = await fetch(apiURL);

  if (!data.ok) {
    return [];
  }

  return await data.json();
}
