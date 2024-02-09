/*
Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
Question1(e): Print the country that uses US dollars as currency.
*/

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const usDollarCountries = data.filter(country => {
      return country.currencies && country.currencies.hasOwnProperty('USD');
    });
    usDollarCountries.forEach(country => {
      console.log(country.name.common);
    });
  })
