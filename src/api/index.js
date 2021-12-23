// This function handles everything of the api logic. In a real app I would abstract things like the api fetching, error logic and response parsing.
export default async function getData(query) {
  // I decied to use the full URL here, but in a real app, this would be an environment variable
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
