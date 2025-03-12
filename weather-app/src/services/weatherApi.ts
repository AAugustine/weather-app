import axios from 'axios';
import { ApiResponse, Forecast } from '../types';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export const fetchWeather = async (city: string | null, coords?: { latitude: number; longitude: number }) => {
    try {
        let url = '';
        if (coords) {
            url = `${BASE_URL}/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;
        } else if (city) {
            url = `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`;
        } else {
            throw new Error('No city or coordinates provided');
        }

        const response = await axios.get<ApiResponse>(url);
        return {
            temperature: response.data.main.temp,
            description: response.data.weather[0].description,
            city: response.data.name,
            humidity: response.data.main.humidity,
            windSpeed: response.data.wind.speed,
        };
    } catch (error) {
        throw new Error('Error fetching weather data');
    }
};

export const fetchForecast = async (city: string | null, coords?: { latitude: number; longitude: number }) => {
    try {
        let url = '';
        if (coords) {
            url = `${BASE_URL}/forecast?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`;
        } else if (city) {
            url = `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`;
        } else {
            throw new Error('No city or coordinates provided');
        }

        const response = await axios.get(url);
        // Filter forecast data to get one entry per day at 12:00 PM
        const forecastData = response.data.list
            .filter((item: any) => item.dt_txt.includes('12:00:00'))
            .map((item: any) => ({
                date: item.dt_txt,
                temperature: item.main.temp,
                description: item.weather[0].description,
            }));

        return {
            forecast: forecastData,
        };
    } catch (error) {
        throw new Error('Error fetching forecast data');
    }
};