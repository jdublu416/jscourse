//initialize the objects
const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);//if there is no city entered it will use the default values hard coded in the constructor.
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    weather.changeLocation(city, state);
    storage.setLocationData(city, state);
    getWeather();
    $('#locModal').modal('hide');
})

function getWeather() {
  weather
    .getWeather()
    .then(results => ui.paint(results))
    .catch(err => console.log(err));
}// wrapped this function call in another function so it loads with the above eventlistener with DOM load.  use the UI class to paint the ui with the API info results. the getWeather function is async and returns a promise so when we call it we use .then()
