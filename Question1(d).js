/*
Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
Question1(d):Print the total population of countries using reduce function.
*/


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log("Total Population of countries:", totalPopulation);
  })

