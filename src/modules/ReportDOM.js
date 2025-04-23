import { api } from "./API";
import defaultIcon from "../resources/icon/small-weather/cloudy.png";
import { fahrenheitToCelsius, celsiusToFahrenheit } from "./HelperFunctions";

class ReportDOM {
  constructor() {
    this.timezoneTitle = document.querySelector(".timezone-location");

    this.getAPI = null;
  }

  async init() {
    this.getAPI = await api;

    // console.log(this.getAPI);
    this.displayOverview();
    this.displayHourlyWeather();
    this.displayDailyWeather();
    this.displayBackgroundPhoto();
    this.displaySearchResult();
    this.convertUnit();
  }

  displayOverview(location = null) {
    this.displayOverviewHeader(location);
    this.displaytWeatherDetails();
  }

  displayOverviewHeader(location = null) {
    const currentOverview = this.getAPI.getCurrentOverview();
    // console.log(currentOverview);
    const searchedLocation = location
      ? currentOverview.address
      : this.getAPI.getFormattedLocation(currentOverview.timezone);

    // console.log(searchedLocation);
    this.displayLocalTimezone(searchedLocation);
    this.displayLocalWeatherCondition(currentOverview.localDescription);
    this.displayCurrentWeatherIcon(currentOverview.weatherIcon);
    this.displayCurrentDatetime();
  }

  displaytWeatherDetails() {
    const todayWeatherDiv = document.querySelector(".today-weather");
    const todayTempUnitSpans = Array.from(
      todayWeatherDiv.querySelectorAll(".temperature-unit")
    );

    const todayDetails = todayWeatherDiv.querySelector(".today-details");
    const todayMinTempSpan = todayDetails.querySelector(".today-min-temp");
    const todayMaxTempSpan = todayDetails.querySelector(".today-max-temp");
    const todayAvgTempSpan = todayDetails.querySelector(".today-avg-temp");
    const todayHumiditySpan = todayDetails.querySelector(".today-humidity");
    const todayUVindexSpan = todayDetails.querySelector(".today-uvindex");
    const todaySunriseSpan = todayDetails.querySelector(".today-sunrise");
    const todaySunsetSpan = todayDetails.querySelector(".today-sunset");

    const todayWeather = this.getAPI.getTodayWeather();

    todayMinTempSpan.textContent = fahrenheitToCelsius(todayWeather.minTemp);
    todayMaxTempSpan.textContent = fahrenheitToCelsius(todayWeather.maxTemp);
    todayAvgTempSpan.textContent = fahrenheitToCelsius(todayWeather.avgTemp);
    todayHumiditySpan.textContent = todayWeather.humidity;
    todayUVindexSpan.textContent = todayWeather.uvindex;
    todaySunriseSpan.textContent = todayWeather.sunrise;
    todaySunsetSpan.textContent = todayWeather.sunset;

    todayTempUnitSpans.forEach((todayTempUnitSpan) => {
      todayTempUnitSpan.innerHTML = "&deg;C";
    });
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
      hourlyTempSpan.innerHTML =
        "Temp: " +
        "<span class ='hourly-temp-value'>" +
        fahrenheitToCelsius(hourlyWeather.temp) +
        "</span>" +
        "<span class ='temperature-unit'>" +
        " &deg;C" +
        "</span>";
      hourlyFeelsLikeTempSpan.innerHTML =
        "Feelslike: " +
        "<span class ='hourly-feelslike-value'>" +
        fahrenheitToCelsius(hourlyWeather.feelslike) +
        "</span>" +
        "<span class='temperature-unit'>" +
        " &deg;C" +
        "</span>";
      hourlyHumiditySpan.innerHTML =
        "Hum: " +
        "<span class='hourly-humidity-value'>" +
        hourlyWeather.humidity +
        "</span>";
      // console.log(hourlyWeather.icon);
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
        hourlyWeatherIcon,
        hourlyConditionSpan
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
      // import(
      //   `../resources/icon/small-weather/${dailyWeather.weatherIcon}.png`
      // ).then((module) => {
      //   weatherIcon.src = module.default;
      // });

      import(`../resources/icon/small-weather/${dailyWeather.weatherIcon}.png`)
        .then((module) => {
          weatherIcon.src = module.default;
        })
        .catch((error) => {
          weatherIcon.src = defaultIcon;
          console.log("not found" + error);
        });

      dailyConditionSpan.innerHTML = dailyWeather.conditions;
      dailyMaxTempSpan.innerHTML =
        "Max: " +
        "<span class='daily-max-temp-value'>" +
        fahrenheitToCelsius(dailyWeather.maxTemp) +
        "</span>" +
        "<span class='temperature-unit'>" +
        " &deg;C" +
        "</span>";
      dailyMinTempSpan.innerHTML =
        "Min: " +
        "<span class = 'daily-min-temp-value'>" +
        fahrenheitToCelsius(dailyWeather.minTemp) +
        "</span>" +
        "<span class = 'temperature-unit'>" +
        " &deg;C" +
        "</span>";
      dailyFeelsLikeTempSpan.innerHTML =
        "Feelslike: " +
        "<span class='daily-feelslike-temp-value'>" +
        fahrenheitToCelsius(dailyWeather.feelslike) +
        "</span>" +
        "<span class='temperature-unit'>" +
        " &deg;C" +
        "</span>";
      dailyHumiditySpan.innerHTML =
        "Hum: " +
        "<span class='daily-humidity-value'>" +
        dailyWeather.humidity +
        "</span>";

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

    import(`../resources/icon/large-weather/${weatherIcon}.png`)
      .then((module) => {
        weatherIconImg.src = module.default;
      })
      .catch((error) => {
        weatherIconImg.src = defaultIcon;
        console.log("not found" + error);
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
    const hourlyList = document.querySelector(".hourly-list");
    const dailyList = document.querySelector(".daily-list");

    const hourlyItemDiv = hourlyList.querySelectorAll(".hourly-item");
    const dailyItemDiv = dailyList.querySelectorAll(".daily-item");

    // console.log(searchForm);
    searchForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      // console.log(searchLocationInput.value);
      await this.getAPI.setWeatherForecast(searchLocationInput.value);
      await this.getAPI.setBackgroundWeather(this.getAPI.getSearchedLocation());
      const searchedLocation = this.getAPI.getSearchedLocation();
      const hourlyWeathers = this.getAPI.getHourlyWeather();
      const dailyWeathers = this.getAPI.getdailyWeather();

      this.displayOverview(searchedLocation);

      hourlyItemDiv.forEach((hourlyItem, index) => {
        hourlyItem.querySelector(".hourly-condition").textContent =
          hourlyWeathers[index].conditions;
        hourlyItem.querySelector(".hourly-temp-value").textContent =
          fahrenheitToCelsius(hourlyWeathers[index].temp);
        hourlyItem.querySelector(".hourly-feelslike-value").textContent =
          fahrenheitToCelsius(hourlyWeathers[index].feelslike);
        hourlyItem.querySelector(".hourly-humidity-value").textContent =
          hourlyWeathers[index].humidity;
      });

      dailyItemDiv.forEach((dailyItem, index) => {
        dailyItem.querySelector(".daily-max-temp-value").textContent =
          fahrenheitToCelsius(dailyWeathers[index].maxTemp);
        dailyItem.querySelector(".daily-min-temp-value").textContent =
          fahrenheitToCelsius(dailyWeathers[index].minTemp);
        dailyItem.querySelector(".daily-feelslike-temp-value").textContent =
          fahrenheitToCelsius(dailyWeathers[index].feelslike);
        dailyItem.querySelector(".daily-humidity-value").textContent =
          dailyWeathers[index].humidity;
      });

      // this.displayHourlyWeather();
      // this.displayDailyWeather();
      this.displayBackgroundPhoto();
    });
  }

  convertUnit() {
    const todayDetailsDiv = document.querySelector(".today-details");
    const todayMinTempSpan = todayDetailsDiv.querySelector(".today-min-temp");
    const todayMaxTempSpan = todayDetailsDiv.querySelector(".today-max-temp");
    const todayAvgTempSpan = todayDetailsDiv.querySelector(".today-avg-temp");

    const hourlyListDiv = document.querySelector(".hourly-list");
    const hourlyTempValueSpans =
      hourlyListDiv.querySelectorAll(".hourly-temp-value");
    const hourlyFeelsLikeTempSpans = hourlyListDiv.querySelectorAll(
      ".hourly-feelslike-value"
    );
    const dailyListDiv = document.querySelector(".daily-list");

    // const temperatureUnitSpans = Array.from(
    //   hourlyListDiv.querySelectorAll(".temperature-unit")
    // ).push(...Array.from(dailyListDiv.querySelectorAll(".temperature-unit")));
    const todayTempUnitSpans = Array.from(
      todayDetailsDiv.querySelectorAll(".temperature-unit")
    );
    const hourlyTempUnitSpans = Array.from(
      hourlyListDiv.querySelectorAll(".temperature-unit")
    );
    const dailyTempUnitSpans = Array.from(
      dailyListDiv.querySelectorAll(".temperature-unit")
    );
    const allTempUnitSpans = [
      ...todayTempUnitSpans,
      ...hourlyTempUnitSpans,
      ...dailyTempUnitSpans,
    ];

    // tempUnitSpans.forEach((item) => {
    //   console.log(item);
    // });
    // console.log(hourlyTempUnitSpans);
    const dailyMaxTempSpans = dailyListDiv.querySelectorAll(
      ".daily-max-temp-value"
    );
    const dailyMinTempSpans = dailyListDiv.querySelectorAll(
      ".daily-min-temp-value"
    );
    const dailyFeelslikeTempSpans = dailyListDiv.querySelectorAll(
      ".daily-feelslike-temp-value"
    );
    // console.log(todayWeather);

    const fahrenheitChoiceInput = document.querySelector("#fahrenheit");
    fahrenheitChoiceInput.addEventListener("change", (event) => {
      const todayWeather = this.getAPI.getTodayWeather();
      const hourlyWeathers = this.getAPI.getHourlyWeather();
      const dailyWeathers = this.getAPI.getdailyWeather();
      // console.log(hourlyWeathers);
      todayMinTempSpan.textContent = todayWeather.minTemp;
      todayMaxTempSpan.textContent = todayWeather.maxTemp;
      todayAvgTempSpan.textContent = todayWeather.avgTemp;
      // console.log(hourlyTempValueSpans);
      hourlyTempValueSpans.forEach((hourlyTempSpan, index) => {
        hourlyTempSpan.textContent = hourlyWeathers[index].temp;
        // console.log(hourlyTempSpan.textContent);
      });

      hourlyFeelsLikeTempSpans.forEach((hourlyTempSpan, index) => {
        hourlyTempSpan.textContent = hourlyWeathers[index].feelslike;
      });

      allTempUnitSpans.forEach((temperatureUnitSpan) => {
        temperatureUnitSpan.innerHTML = "&deg;F";
      });

      dailyMaxTempSpans.forEach((dailyMaxTempSpan, index) => {
        dailyMaxTempSpan.textContent = dailyWeathers[index].maxTemp;
      });

      dailyMinTempSpans.forEach((dailyMinTempSpan, index) => {
        dailyMinTempSpan.textContent = dailyWeathers[index].minTemp;
      });

      dailyFeelslikeTempSpans.forEach((dailyFeelslikeTempSpan, index) => {
        dailyFeelslikeTempSpan.textContent = dailyWeathers[index].feelslike;
      });
    });

    // const tempRadioInputs = document.querySelectorAll(
    //   "input[name=temperature]"
    // );

    // tempRadioInputs.forEach((tempRadioInput) => {
    //   if (tempRadioInput.value == "fahrenheit" && tempRadioInput.checked) {
    //     console.log(tempRadioInput.value);
    //   } else if (tempRadioInput.value == "celsius" && tempRadioInput.checked) {
    //     console.log(tempRadioInput.value);
    //   }

    // });

    const celsiusChoiceInput = document.querySelector("#celsius");
    celsiusChoiceInput.addEventListener("change", (event) => {
      // const todayWeather = this.getAPI.getTodayWeather();
      // const hourlyWeathers = this.getAPI.getHourlyWeather();

      // todayMinTempSpan.textContent = fahrenheitToCelsius(todayWeather.minTemp);
      // todayMaxTempSpan.textContent = fahrenheitToCelsius(todayWeather.maxTemp);
      // todayAvgTempSpan.textContent = fahrenheitToCelsius(todayWeather.avgTemp);

      // hourlyTempSpans.forEach((hourlyTempSpan, index) => {
      //   hourlyTempSpan.textContent = fahrenheitToCelsius(
      //     hourlyWeathers[index].temp
      //   );
      // });

      const todayWeather = this.getAPI.getTodayWeather();
      const hourlyWeathers = this.getAPI.getHourlyWeather();
      const dailyWeathers = this.getAPI.getdailyWeather();

      todayMinTempSpan.textContent = fahrenheitToCelsius(todayWeather.minTemp);
      todayMaxTempSpan.textContent = fahrenheitToCelsius(todayWeather.maxTemp);
      todayAvgTempSpan.textContent = fahrenheitToCelsius(todayWeather.avgTemp);

      hourlyTempValueSpans.forEach((hourlyTempSpan, index) => {
        hourlyTempSpan.textContent = fahrenheitToCelsius(
          hourlyWeathers[index].temp
        );
      });

      hourlyFeelsLikeTempSpans.forEach((hourlyTempSpan, index) => {
        hourlyTempSpan.textContent = fahrenheitToCelsius(
          hourlyWeathers[index].feelslike
        );
      });

      allTempUnitSpans.forEach((temperatureUnitSpan) => {
        temperatureUnitSpan.innerHTML = "&deg;C";
      });

      dailyMaxTempSpans.forEach((dailyMaxTempSpan, index) => {
        dailyMaxTempSpan.textContent = fahrenheitToCelsius(
          dailyWeathers[index].maxTemp
        );
      });

      dailyMinTempSpans.forEach((dailyMinTempSpan, index) => {
        dailyMinTempSpan.textContent = fahrenheitToCelsius(
          dailyWeathers[index].minTemp
        );
      });

      dailyFeelslikeTempSpans.forEach((dailyFeelslikeTempSpan, index) => {
        dailyFeelslikeTempSpan.textContent = fahrenheitToCelsius(
          dailyWeathers[index].feelslike
        );
      });
    });
  }
}
export { ReportDOM };
