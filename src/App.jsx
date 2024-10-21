import { useRef, useState } from "react";
import "./App.css";
import axios from "axios";
import WeatherInformations from "./components/WeatherInformations";
import styled from "styled-components";
import WeatherInformations5Days from "./components/WeatherInformations5Days";

// CSS
const ContainerApp = styled.main`
  max-width: 1000px;
  padding: 20px;
  margin: 0 auto;
  text-align: center;

  h1 {
    font-size: 4rem;
    color: #ffffff;
  }

  input[type="text"] {
    padding: 10px;
    border-radius: 20px 0 0 20px;
    border: none;
    outline: none;
    width: 60%;
    max-width: 300px;
    margin-top: 30px;
  }

  button {
    background-color: #ff9800;
    border: none;
    padding: 10px;
    border-radius: 0 20px 20px 0;
    cursor: pointer;
    color: #fff;
    font-weight: bold;

    &:hover {
      background-color: #f57c00;
    }
  }
`;

// APP
function App() {
  const [weather, setWeather] = useState();
  const [weather5Days, setWeather5Days] = useState();
  const inputRef = useRef();

  async function searchCity() {
    try {
      const city = inputRef.current.value;
      const key = "d88a3a8d0c400259fc0fdbe915ae2dde";
      const lang = "pt-br";

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=${lang}`;

      const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=${lang}`;

      const apiInfo = await axios.get(url);
      const apiInfo5Days = await axios.get(url5Days);
      console.log(apiInfo.data);

      setWeather(apiInfo.data);
      setWeather5Days(apiInfo5Days.data);
    } catch (err) {
      console.error("Erro ao buscar Informações da cidade:", err);
      alert("Cidade não encontrada ou houve um problema com a requisição");
    }
  }

  return (
    <ContainerApp>
      <h1>Previsão Climática</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <WeatherInformations weather={weather} />}
      {weather5Days && <WeatherInformations5Days weather5Days={weather5Days} />}
    </ContainerApp>
  );
}

export default App;
