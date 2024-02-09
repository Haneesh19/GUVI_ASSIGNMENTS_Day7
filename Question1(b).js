/*
Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
Question1(b):Get all the countries with a population of less than 2 lakhs using Filter function
*/

// Fetch data from the API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesWithLowPopulation = data.filter(country => {
      return country.population < 200000;
    });
    const countryNames = countriesWithLowPopulation.map(country => country.name.common);
    console.log("Countries with population less than 2 lakhs:", countryNames);
  })

