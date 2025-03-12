import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { WeatherData } from './types';
import { fetchForecast, fetchWeather } from './services/weatherApi';
import './App.css';
import Header from './components/Header';
import { getCurrentLocation } from './services/utilities';
import CurrentForecast from './components/CurrentForecast';

const App: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('');
    const [forecastData, setForecastData] = useState<any>(null);

    const getForecast = async () => {
        try {
            const location = await getCurrentLocation();
            const forecastData = await fetchForecast(null, location);
            setForecastData(forecastData);
        } catch (error) {
            const forecastData = await fetchForecast('London');
            setForecastData(forecastData);
        }
    };

    const handleSearch = async (city: string) => {
        try {
            const data = await fetchWeather(city);
            setWeatherData(data);
            setError('');
        } catch (err) {
            setError('Could not fetch weather data. Please try again.');
            setWeatherData(null);
        }
    };

    useEffect(() => {
        getForecast();
    }, []);

    return (
        <div>
            <Header />
            <SearchBar onSearch={handleSearch} />
            <CurrentForecast data={forecastData} />
            {error && <p className="error">{error}</p>}
            {weatherData && <WeatherCard data={weatherData} />}
        </div>
    );
};

export default App;