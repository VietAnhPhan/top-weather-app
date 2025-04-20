import { api } from "./API";

class ReportDOM {
  constructor() {
    this.timezoneTitle = document.querySelector(".timezone");
    this.localDescription = document.querySelector(".local-description");

    this.getAPI = null;
  }

  async init() {
    this.getAPI = await api;

    // console.log(this.getAPI);
    this.displayDescription();
    this.displayTodayWeather();
    this.displayHourlyWeather();
    this.displayDailyWeather();
    this.displayBackgroundPhoto();
  }

  displayDescription() {
    const descriptionDiv = document.querySelector(".decription");
    const hoursSpan = descriptionDiv.querySelector(".hours");
    const minutesSpan = descriptionDiv.querySelector(".minutes");
    const weatherIconDiv = descriptionDiv.querySelector(
      ".description-weather-icon"
    );
    const weatherIconImg = document.createElement("img");

    const description = this.getAPI.getDescription();
    // console.log(description);
    this.timezoneTitle.textContent = description.timezone;
    this.localDescription.textContent = description.localDescription;
    const currentTime = new Date();

    hoursSpan.textContent = currentTime.getHours() + ":";
    minutesSpan.textContent = currentTime.getMinutes();

    const weatherIcon = description.weatherIcon;

    import(`../resources/icon/${weatherIcon}.png`).then((module) => {
      console.log(module);
    });

    weatherIconDiv.appendChild(weatherIconImg);
  }

  displayTodayWeather() {
    const todayWeatherDiv = document.querySelector(".today-weather");
    const todayDaySpan = todayWeatherDiv.querySelector(".today-date");
    const todayConditionSpan =
      todayWeatherDiv.querySelector(".today-condition");
    const todayDetails = todayWeatherDiv.querySelector(".today-details");
    const todayMinTempSpan = todayDetails.querySelector(".today-min-temp");
    const todayMaxTempSpan = todayDetails.querySelector(".today-max-temp");
    const todayAvgTempSpan = todayDetails.querySelector(".today-avg-temp");
    const todayHumiditySpan = todayDetails.querySelector(".today-humidity");
    const todayUVindexSpan = todayDetails.querySelector(".today-uvindex");
    const todaySunriseSpan = todayDetails.querySelector(".today-sunrise");
    const todaySunsetSpan = todayDetails.querySelector(".today-sunset");

    const todayWeather = this.getAPI.getTodayWeather();
    todayDaySpan.textContent = todayWeather.date;
    todayConditionSpan.textContent = todayWeather.conditions;
    todayMinTempSpan.textContent = todayWeather.minTemp;
    todayMaxTempSpan.textContent = todayWeather.maxTemp;
    todayAvgTempSpan.textContent = todayWeather.avgTemp;
    todayHumiditySpan.textContent = todayWeather.humidity;
    todayUVindexSpan.textContent = todayWeather.uvindex;
    todaySunriseSpan.textContent = todayWeather.sunrise;
    todaySunsetSpan.textContent = todayWeather.sunset;
  }

  displayHourlyWeather() {
    const hourlyWeathers = this.getAPI.getHourlyWeather();
    const hourlyWrapper = document.querySelector(".hourly-list");

    hourlyWeathers.forEach((hourlyWeather) => {
      const hourlyWeatherDiv = document.createElement("div");
      const hourlyTempSpan = document.createElement("div");
      const hourlyFeelsLikeTempSpan = document.createElement("div");
      const hourlySpan = document.createElement("div");
      const hourlyHumiditySpan = document.createElement("div");
      const hourlyConditionSpan = document.createElement("div");

      hourlyWeatherDiv.classList.add("hourly-item");
      hourlyTempSpan.classList.add("hourly-temp");
      hourlyFeelsLikeTempSpan.classList.add("hourly-feelslike-temp");
      hourlySpan.classList.add("hourly-hour");
      hourlyHumiditySpan.classList.add("hourly-humidity");
      hourlyConditionSpan.classList.add("hourly-condition");

      hourlySpan.textContent = hourlyWeather.hour.slice(0, 5);
      hourlyConditionSpan.textContent = hourlyWeather.conditions;
      hourlyTempSpan.textContent = hourlyWeather.temp;
      hourlyFeelsLikeTempSpan.textContent = hourlyWeather.feelslike;
      hourlyHumiditySpan.textContent = hourlyWeather.humidity;

      hourlyWeatherDiv.append(
        hourlySpan,
        hourlyConditionSpan,
        hourlyFeelsLikeTempSpan,
        hourlyTempSpan,
        hourlyHumiditySpan
      );

      hourlyWrapper.append(hourlyWeatherDiv);
    });
  }

  displayDailyWeather() {
    const dailyWeathers = this.getAPI.getdailyWeather();
    const dailyWrapper = document.querySelector(".daily-list");
    // console.log(dailyWeathers);
    dailyWeathers.forEach((dailyWeather) => {
      const dailyWeatherDiv = document.createElement("div");
      const dailyConditionSpan = document.createElement("div");
      const dailyMaxTempSpan = document.createElement("div");
      const dailyMinTempSpan = document.createElement("div");
      const dailyFeelsLikeTempSpan = document.createElement("div");
      const dailySpan = document.createElement("div");
      const dailyHumiditySpan = document.createElement("div");

      dailyWeatherDiv.classList.add("daily-item");
      dailyMaxTempSpan.classList.add("daily-max-temp");
      dailyMinTempSpan.classList.add("daily-min-temp");
      dailyFeelsLikeTempSpan.classList.add("daily-feelslike-temp");
      dailySpan.classList.add("daily-hour");
      dailyHumiditySpan.classList.add("daily-humidity");
      dailyConditionSpan.classList.add("daily-condition");

      dailySpan.textContent = dailyWeather.day;
      dailyConditionSpan.textContent = dailyWeather.conditions;
      dailyMaxTempSpan.textContent = dailyWeather.maxTemp;
      dailyMinTempSpan.textContent = dailyWeather.minTemp;
      dailyFeelsLikeTempSpan.textContent = dailyWeather.feelslike;
      dailyHumiditySpan.textContent = dailyWeather.humidity;

      dailyWeatherDiv.append(
        dailySpan,
        dailyConditionSpan,
        dailyMaxTempSpan,
        dailyMinTempSpan,
        dailyFeelsLikeTempSpan,
        dailyHumiditySpan
      );

      dailyWrapper.append(dailyWeatherDiv);
    });
  }

  displayBackgroundPhoto() {
    const backgroundDiv = document.querySelector("section");
    // console.log(this.getAPI.getBackgroundURL());
    backgroundDiv.style.backgroundImage = `url(${this.getAPI.getBackgroundURL()}`;
  }
}
export { ReportDOM };
