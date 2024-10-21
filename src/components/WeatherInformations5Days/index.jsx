/* eslint-disable react/prop-types */
import styled from "styled-components";

//CSS
const ContainerWeather5Days = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 10px;
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
`;

const WeatherList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const WeatherItem = styled.div`
  text-align: center;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  padding: 10px;

  .forecast-day,
  .forecast-description {
    text-transform: capitalize;
    font-size: 1.1rem;
  }
`;

//WeatherInformations5Days
const WeatherInformations5Days = ({ weather5Days }) => {
  const dailyForecast = {};

  for (let forecast of weather5Days.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  function converDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });

    return newDate;
  }

  return (
    <ContainerWeather5Days>
      <h3>Previsão Próximos 5 Dias</h3>
      <WeatherList>
        {next5DaysForecast.map((forecast) => (
          <WeatherItem key={forecast.dt}>
            <p className="forecast-day">{converDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
              alt="img"
            />
            <p className="forecast-description">
              {forecast.weather[0].description}
            </p>
            <p>
              {Math.round(forecast.main.temp_min)}ºC min /{" "}
              {Math.round(forecast.main.temp_max)}ºC máx
            </p>
          </WeatherItem>
        ))}
      </WeatherList>
    </ContainerWeather5Days>
  );
};

export default WeatherInformations5Days;
