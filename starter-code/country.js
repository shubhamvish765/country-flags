const countryName = new URLSearchParams(window.location.search).get('name')

const ImageTag = document.querySelector('.mains-container img')
const heading2Tag = document.querySelector('.content-container h2')
const nativeName = document.querySelector('.native-name span')
const Population = document.querySelector('.population span')
const regionSpanTag = document.querySelector('.region span')
const capitalSpanTag = document.querySelector('.capital span')
const languagesSpanTag = document.querySelector('.languages span')
const currencies = document.querySelector('.currencies span')
const topLevelDomain = document.querySelector('.domain')
const subRegion = document.querySelector('.sub-region')
const borderBoundaries = document.querySelector('.border-boundary')

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    console.log(country.borders);
    ImageTag.src = country.flags.svg
    heading2Tag.innerText = country.name.common
    // NativeNamespanTag.innerText = country.name.common
    Population.innerText = country.population.toLocaleString('en-IN')
    regionSpanTag.innerText = country.region
    capitalSpanTag.innerText = country.capital
    // languagesSpanTag.innerText = country.languages.eng
    topLevelDomain.innerText = country.tld.join(', ')
    subRegion.innerText = country.subregion;
    if (country.name.nativeName) {
      nativeName.innerText = Object.values(country.name.nativeName)[0].common
    } else {
      nativeName.innerText = country.name.common
    }

    if(country.currencies)
    {
      currencies.innerText = Object.values(country.currencies).map((currency)=> currency.name).join(', ')
    }
    if(country.languages)
    {
      languagesSpanTag.innerText = Object.values(country.languages).join(', ')
    }
    country.borders.forEach((border)=>{
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
      .then((res)=> res.json())
      .then(([borderCountry])=>{
        console.log(borderCountry);
        const borderCountryTag = document.createElement('a');
        borderCountryTag.innerText = borderCountry.name.common
        borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
        borderBoundaries.append(borderCountryTag)
      })
    })
})