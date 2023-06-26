export function SearchCountry() {
    const countries = ['American', 'British', 'Canadian', 'Chinese', 'Croatian', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Polish', 'Portuguese', 'Russian', 'Spanish', 'Thai', 'Tunisian', 'Turkish', 'Unknown', 'Vietnamese'];
    const countriesList = countries.map(country => {
      return `<a href='#/querycountry' ><li class='country-btn' data-country=${country} >${country}</li></a>`
    }).join('');
  
    const $searchCountry = document.createElement('div');
    $searchCountry.classList.add('search-container');
    const $countryLabel = document.createElement('h4');
    $countryLabel.textContent = 'Filter by country:';
    $searchCountry.appendChild($countryLabel);
  
    const $countryList = document.createElement('ul');
    $countryList.classList.add('country-list');
    $countryList.innerHTML = countriesList;
  
    $searchCountry.appendChild($countryList);
  
    document.addEventListener('click', (e) => {
   
      if (e.target.matches('a .country-btn')) {
        console.log(e.target.dataset.country)
        localStorage.setItem('CountryQuery', e.target.dataset.country);
      }
      
    })
  
    return $searchCountry;
  }