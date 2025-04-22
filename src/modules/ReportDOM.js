import { api } from "./API";
import defaultIcon from "../resources/icon/small-weather/cloudy.png";

class ReportDOM {
  constructor() {
    this.timezoneTitle = document.querySelector(".timezone");

    this.getAPI = null;
  }

  async init() {
    this.getAPI = await api;

    console.log(this.getAPI);
    this.displayOverview();
    this.displayHourlyWeather();
    this.displayDailyWeather();
    this.displayBackgroundPhoto();
    this.displaySearchResult();
  }

  displayOverview() {
    this.displayOverviewHeader();
    this.displaytWeatherDetails();
  }

  displayOverviewHeader() {
    const currentOverview = this.getAPI.getCurrentOverview();
    // console.log(currentOverview);
    this.displayLocalTimezone(currentOverview.timezone);
    this.displayLocalWeatherCondition(currentOverview.localDescription);
    this.displayCurrentWeatherIcon(currentOverview.weatherIcon);
    this.displayCurrentDatetime();
  }

  displaytWeatherDetails() {
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

    hourlyWrapper.innerHTML = "";

    hourlyWeathers.forEach((hourlyWeather) => {
      const hourlyWeatherDiv = document.createElement("div");
      const hourlySpan = document.createElement("div");
      const hourlyWeatherIcon = document.createElement("img");
      const hourlyConditionSpan = document.createElement("div");
      const hourlyWeatherDetails = document.createElement("div");
      const hourlyFeelsLikeTempSpan = document.createElement("div");
      const hourlyTempSpan = document.createElement("div");
      const hourlyHumiditySpan = document.createElement("div");

      hourlyWeatherDiv.classList.add("hourly-item");
      hourlyTempSpan.classList.add("hourly-temp");
      hourlyFeelsLikeTempSpan.classList.add("hourly-feelslike-temp");
      hourlySpan.classList.add("hourly-hour");
      hourlyHumiditySpan.classList.add("hourly-humidity");
      hourlyConditionSpan.classList.add("hourly-condition");
      hourlyWeatherDetails.classList.add("hourly-weather-details");
      hourlyWeatherIcon.classList.add("hourly-weather-icon");

      hourlySpan.innerHTML = hourlyWeather.hour.slice(0, 5);
      hourlyConditionSpan.innerHTML = hourlyWeather.conditions;
      hourlyTempSpan.innerHTML = "Temp: " + hourlyWeather.temp + " &deg;C";
      hourlyFeelsLikeTempSpan.innerHTML =
        "Feelslike: " + hourlyWeather.feelslike + " &deg;C";
      hourlyHumiditySpan.innerHTML = "Hum: " + hourlyWeather.humidity;

      import(`../resources/icon/small-weather/${hourlyWeather.icon}.png`)
        .then((module) => {
          hourlyWeatherIcon.src = module.default;
        })
        .catch((error) => {
          hourlyWeatherIcon.src = defaultIcon;
          console.log("not found" + error);
        });

      hourlyWeatherDiv.append(
        hourlySpan,
        hourlyConditionSpan,
        hourlyWeatherIcon
      );

      hourlyWeatherDetails.append(
        hourlyTempSpan,
        hourlyFeelsLikeTempSpan,
        hourlyHumiditySpan
      );

      hourlyWeatherDiv.appendChild(hourlyWeatherDetails);
      hourlyWrapper.append(hourlyWeatherDiv);
    });
  }

  displayDailyWeather() {
    const dailyWeathers = this.getAPI.getdailyWeather();
    const dailyWrapper = document.querySelector(".daily-list");
    dailyWrapper.innerHTML = "";
    // console.log(dailyWeathers);
    dailyWeathers.forEach((dailyWeather) => {
      const dailyWeatherDiv = document.createElement("div");
      const dailyConditionSpan = document.createElement("div");
      const dailyWeatherValuesDiv = document.createElement("div");
      const dailyMaxTempSpan = document.createElement("div");
      const dailyMinTempSpan = document.createElement("div");
      const dailyFeelsLikeTempSpan = document.createElement("div");
      const dailySpan = document.createElement("div");
      const weatherIcon = document.createElement("img");
      const dailyHumiditySpan = document.createElement("div");

      dailyWeatherDiv.classList.add("daily-item");
      dailySpan.classList.add("daily-hour");
      weatherIcon.classList.add("daily-weather-icon");
      dailyConditionSpan.classList.add("daily-condition");
      dailyWeatherValuesDiv.classList.add("daily-weather-values");
      dailyMaxTempSpan.classList.add("daily-max-temp");
      dailyMinTempSpan.classList.add("daily-min-temp");
      dailyFeelsLikeTempSpan.classList.add("daily-feelslike-temp");
      dailyHumiditySpan.classList.add("daily-humidity");

      dailySpan.textContent = dailyWeather.day;
      // console.log(dailyWeather.weatherIcon);
      import(
        `../resources/icon/small-weather/${dailyWeather.weatherIcon}.png`
      ).then((module) => {
        weatherIcon.src = module.default;
      });

      dailyConditionSpan.innerHTML = dailyWeather.conditions;
      dailyMaxTempSpan.innerHTML = "Max: " + dailyWeather.maxTemp + " &deg;C";
      dailyMinTempSpan.innerHTML = "Min: " + dailyWeather.minTemp + " &deg;C";
      dailyFeelsLikeTempSpan.innerHTML =
        "Feelslike: " + dailyWeather.feelslike + " &deg;C";
      dailyHumiditySpan.innerHTML = "Hum: " + dailyWeather.humidity;

      dailyWeatherDiv.append(dailySpan, weatherIcon, dailyConditionSpan);

      dailyWeatherValuesDiv.append(
        dailyMaxTempSpan,
        dailyMinTempSpan,
        dailyFeelsLikeTempSpan,
        dailyHumiditySpan
      );

      dailyWeatherDiv.appendChild(dailyWeatherValuesDiv);

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
    weatherIconDiv.innerHTML = "";
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

  displaySearchResult() {
    const searchForm = document.querySelector(".search-form");
    const searchLocationInput = searchForm.querySelector(".search-location");

    // console.log(searchForm);
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      // console.log(searchLocationInput.value);
      await this.getAPI.setWeatherForecast(searchLocationInput.value);
      await this.getAPI.setBackgroundWeather(
        this.getAPI.getFormattedLocation()
      );
      this.displayOverview();
      this.displayHourlyWeather();
      this.displayDailyWeather();
      this.displayBackgroundPhoto();
    });
  }
}
export { ReportDOM };
