import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { WeatherData } from './types';
import { fetchWeather } from './services/weatherApi';
import './App.css';
import Header from './components/Header';

const App: React.FC = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string>('');

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

    return (
        <div>
            <Header />
            <SearchBar onSearch={handleSearch} />
            {error && <p className="error">{error}</p>}
            {weatherData && <WeatherCard data={weatherData} />}
        </div>
    );
};

export default App;