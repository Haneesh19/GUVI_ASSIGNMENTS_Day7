/*
Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
Question1(c):Print the following details name, capital, flag, using forEach function
*/

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.png);
      console.log("--------------------------------");
    });
  })