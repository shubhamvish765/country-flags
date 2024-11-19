const mainContainer = document.querySelector('.main-container')
const darkBtn = document.querySelector('.dark-mode')

fetch("https://restcountries.com/v3.1/all")
.then((res)=> res.json())
.then((data)=>{
  data.forEach((country)=>{
    console.log(country.borders);
    const flagImageCard = document.createElement('a')
flagImageCard.classList.add('flag-image')
flagImageCard.href = `file:///D:/JAVASCRIPT-API/Project-2-flag/starter-code/country.html?name=${country.name.common}`;
const cardHTML = `
 <div class="card-container">
        <a class="flag-image">
          <img src="${country.flags.svg}" alt="america">
          <h3 class="image-title">${country.name.common}</h3>
          <p><b>Popualtion: </b>${country.population.toLocaleString('en-IN')}</p>
          <p><b>Region: </b>${country.region}</p>
          <p><b>Capital: </b>${country.capital}</p>
        </a>
      </div>
`
mainContainer.append(flagImageCard)
flagImageCard.innerHTML = cardHTML 
  })
})

