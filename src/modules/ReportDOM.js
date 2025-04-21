import { api } from "./API";

class ReportDOM {
  constructor() {
    this.timezoneTitle = document.querySelector(".timezone");

    this.getAPI = null;
  }

  async init() {
    this.getAPI = await api;

    // console.log(this.getAPI);
    this.displayCurrentOverview();
    this.displayCurrentWeather();
    this.displayHourlyWeather();
    this.displayDailyWeather();
    this.displayBackgroundPhoto();
  }

  displayCurrentOverview() {
    const currentOverview = this.getAPI.getCurrentOverview();

    this.displayLocalTimezone(currentOverview.timezone);
    this.displayLocalWeatherCondition(currentOverview.localDescription);
    this.displayCurrentWeatherIcon(currentOverview.weatherIcon);
    this.displayCurrentDatetime();
  }

  displayCurrentWeather() {
    const todayWeatherDiv = document.querySelector(".today-weather");

    const todayDetails = todayWeatherDiv.querySelector(".today-details");
    const todayMinTempSpan = todayDetails.querySelector(".today-min-temp");
    const todayMaxTempSpan = todayDetails.querySelector(".today-max-temp");
    const todayAvgTempSpan = todayDetails.querySelector(".today-avg-temp");
    const todayHumiditySpan = todayDetails.querySelector(".today-humidity");
    const todayUVindexSpan = todayDetails.querySelector(".today-uvindex");
    const todaySunriseSpan = todayDetails.querySelector(".today-sunrise");
    const todaySunsetSpan = todayDetails.querySelector(".today-sunset");

    const todayWeather = this.getAPI.getTodayWeather();

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

  displayCurrentWeatherIcon(weatherIcon) {
    const weatherIconDiv = document.querySelector(".description-weather-icon");

    const weatherIconImg = document.createElement("img");
    import(`../resources/icon/${weatherIcon}.png`).then((module) => {
      weatherIconImg.src = module.default;
    });

    weatherIconDiv.appendChild(weatherIconImg);
  }

  displayCurrentDatetime() {
    const currentDaySpan = document.querySelector(".today-date");

    // console.log(currentOverview);

    const currentDateTime = new Date();
    const dayOption = { weekday: "long" };
    const monthOption = { month: "long" };

    const currentDay = new Intl.DateTimeFormat("en-US", dayOption).format(
      currentDateTime
    );

    const currentMonth = new Intl.DateTimeFormat("en-US", monthOption).format(
      currentDateTime
    );

    let formatedCurrentDateTime =
      currentDay +
      "," +
      currentDateTime.getDate() +
      " " +
      currentMonth +
      " " +
      "at" +
      " " +
      currentDateTime.getHours() +
      ":" +
      currentDateTime.getMinutes();
    currentDaySpan.textContent = formatedCurrentDateTime;
  }

  displayLocalWeatherCondition(localDescription) {
    const localWeatherCondition = document.querySelector(".local-description");
    localWeatherCondition.textContent = localDescription;
  }

  displayLocalTimezone(localTimezone) {
    const currentOverviewDiv = document.querySelector(".current-overview");
    this.timezoneTitle.textContent = localTimezone;
  }
}
export { ReportDOM };
