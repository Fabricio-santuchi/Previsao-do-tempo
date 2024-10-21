/* eslint-disable react/prop-types */
import styled from "styled-components";

//CSS
const ContainerWeather = styled.div`
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;

  h2 {
    font-size: 2rem;
  }
`;

const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Temperatura = styled.p`
  padding-left: 10px;
  font-weight: bold;
  font-size: 2.4rem;
`;

const Description = styled.p`
  text-transform: capitalize;
  font-size: 1.3rem;
  margin-bottom: 10px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

// WeatherInformations
const WeatherInformations = ({ weather }) => {
  return (
    <ContainerWeather>
      <h2>{weather.name}</h2>
      <WeatherInfo>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="img"
        />
        <Temperatura>{Math.round(weather.main.temp)}ºC</Temperatura>
      </WeatherInfo>
      <Description>{weather.weather[0].description}</Description>
      <Details>
        <p>Sensação térmica: {Math.round(weather.main.feels_like)}</p>
        <p>Umidade: {weather.main.humidity}</p>
        <p>Pressão: {weather.main.pressure}</p>
      </Details>
    </ContainerWeather>
  );
};

export default WeatherInformations;
