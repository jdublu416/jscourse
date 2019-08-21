class Weather {
  constructor(city, state) {
    this.xRapidapiKey = 'b8cac74844msh61ce1a5b858ff8dp1f9d01jsn357d323087fa';
    this.xRapidapiHost = 'weather2020-weather-v1.p.rapidapi.com';
    this.city = city;
    this.state = state;
  }

  async getWeather() {
    const response = await fetch(`https://${this.xRapidapiHost}/city/${this.xRapidapiKey}/${this.city},${this.state}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "weather2020-weather-v1.p.rapidapi.com",
            "x-rapidapi-key": "b8cac74844msh61ce1a5b858ff8dp1f9d01jsn357d323087fa"
        }
    });
    const responseData = await response.json();
    return responseData;
  }

  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
//this api information is from rapidAPI and it is dummy data from their docs...they want your credit card for free access NTY