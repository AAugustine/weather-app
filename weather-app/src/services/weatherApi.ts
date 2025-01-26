import axios from 'axios';
import { ApiResponse, WeatherData } from '../types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city: string) => {
    try {
        const response = await axios.get<ApiResponse>(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        return {
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            city: response.data.name,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed
        };
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
};