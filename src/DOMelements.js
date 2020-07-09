import { fetchWeatherAsync, fetchFlickrPhoto, toggleLoader } from './index.js';
import { getCountryCode } from './countryCode.js';
// search button and array of divs with data
const button = document.querySelector('#citySearchButton');
export const dataDivs = [...document.querySelectorAll('.data')];

// adds search button event handler
button.addEventListener('click', () => {
  toggleLoader();
  const searchQuery = document.querySelector('#cityNameInput').value;
  const infoArray = searchQuery.split(',');
  const nameOfCity = infoArray[0];
  // city name without the space in front of the name
  const nameOfCountry = infoArray[infoArray.length - 1].replace(' ', '');
  const countryCode = getCountryCode(nameOfCountry);
  const query = `${nameOfCity},${countryCode}`;

  

  //clear search
  document.querySelector('#cityNameInput').value = '';
  // fetches the weather data
  fetchWeatherAsync(query, units);
  // fetches the city photo
  fetchFlickrPhoto(nameOfCity);
  
function menuToggle(menuID) {
  const menu = document.querySelector(`#${menuID}`);
  menu.classList.toggle('visible');
  menu.classList.toggle('hidden');
}
  menuToggle('menu-overlay');
});

// celcius
const metricButton = document.querySelector('.metric');
// fahrenheit
const imperialButton = document.querySelector('.imperial');
const unitsButtons = [metricButton, imperialButton];

function getUnit() {
  const units = unitsButtons.filter((input) => {
    if (input.checked) {
      return input;
    }
  })[0].value;
  return units;
}
const units = getUnit();

// adds click listeners to the units buttons
unitsButtons.forEach((input) =>
  input.addEventListener('click', () => switchUnits(event)),);

// this should be refactored to do maths on the unit data as opposed to fetching new data
function switchUnits(e) {
  const searchQuery = document.querySelector('#cityNameInput').value;
  const units = e.target.value;
  if (searchQuery !== '') {
    resetData(dataDivs);
    fetchWeatherAsync(searchQuery, units);
    // run the query again
  }
}


export const name = document.querySelector('.cityName');
export const country = document.querySelector('.country');
export const date = document.querySelector('.weatherDate');
export const descr = document.querySelector('.description');
export const icon = document.querySelector('.weather-icon');
export const weathName = document.querySelector('.weatherName');
export const feelsLike = document.querySelector('.feels_like');
export const humid = document.querySelector('.humidity');
export const press = document.querySelector('.pressure');
export const wind = document.querySelector('.wind');
export const temp = document.querySelector('.temp');
export const tempMax = document.querySelector('.temp_max');
export const tempMin = document.querySelector('.temp_min');
export const sunrise = document.querySelector('.sunrise');
export const sunset = document.querySelector('.sunset');

// hero container
export const hero = document.querySelector('.hero-container');
export const heroImgContainer = document.querySelector('.hero-img-container');
