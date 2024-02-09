/**
 Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
Question1(a):Get all the countries from Asia continent /region using Filter function

 */
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const asiaCountries = data.filter(country => country.region === 'Asia');
    const asiaCountryNames = asiaCountries.map(country => country.name.common);
    console.log("countries from Asia continent /region:",asiaCountryNames);
  })

