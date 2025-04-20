import { createClient } from "pexels";

class API {
  #WEATHER_API_KEY = "UBF9896CAYV5UP9SWEMYTQRLK";
  #PEXELS_API_KEY = "2BPG8lSPMJIn16bHLUXJiP6HgOtRZ2nObmG776SSr0pSnxmSIGvBBvZW";

  constructor() {
    this.coordination = null;
    this.weather = null;
    this.backgroundURL = null;
  }

  async init() {
    await this.setCoordinates();
    await this.setWeahterForecast();
    await this.setBackgroundWeather();

    return this;
    // console.log(this.coordination);
  }

  async setCoordinates() {
    try {
      const location = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      this.coordination = {
        latitude: location.coords.latitude,
        longtitude: location.coords.longitude,
      };
    } catch (error) {
      console.log("Failed to get coordination: ", error);
    }
  }

  async setWeahterForecast() {
    const weather = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${
        this.coordination.latitude
      },${this.coordination.longtitude}?key=${this.#WEATHER_API_KEY}`
    );
    this.weather = await weather.json();
  }

  async setBackgroundWeather() {
    const client = createClient(this.#PEXELS_API_KEY);

    const query = "Nature";

    const searchedphotos = await client.photos.search({
      query,
      per_page: 1,
    });

    this.backgroundURL = searchedphotos.photos[0].src.landscape;
  }

  getCoordinates() {
    return this.coordination;
  }

  getTimeZone() {
    return this.weather.timezone;
  }

  getDescription() {
    return {
      timezone: this.weather.timezone,
      localDescription: this.weather.description,
    };
  }

  getTodayWeather() {
    const todayweather = this.weather.days[0];
    return {
      date: todayweather.datetime,
      maxTemp: todayweather.tempmax,
      minTemp: todayweather.tempmin,
      avgTemp: todayweather.temp,
      humidity: todayweather.humidity,
      uvindex: todayweather.uvindex,
      sunrise: todayweather.sunrise,
      sunset: todayweather.sunset,
      conditions: todayweather.description,
    };
  }

  getHourlyWeather() {
    const hourlyWeather = this.weather.days[0].hours.map((hour) => ({
      hour: hour.datetime,
      temp: hour.temp,
      feelslike: hour.feelslike,
      humidity: hour.humidity,
      conditions: hour.conditions,
    }));

    return hourlyWeather;
  }

  getdailyWeather() {
    const dailyWeather = this.weather.days.map((day) => ({
      day: day.datetime,
      conditions: day.conditions,
      maxTemp: day.tempmax,
      minTemp: day.tempmin,
      feelslike: day.feelslike,
      humidity: day.humidity,
    }));

    return dailyWeather;
  }

  getBackgroundURL() {
    return this.backgroundURL;
  }
}

export const api = new API().init();
