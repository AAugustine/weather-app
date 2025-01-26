import React from 'react';
import { WeatherCardProps } from '../types';

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
    return (
        <div className="weather-card">
            <h2>{data.city}</h2>
            <p>Temperature: {data.temperature}°C</p>
            <p>Description: {data.description}</p>
            <p>Humidity: {data.humidity}%</p>
            <p>Wind Speed: {data.windSpeed} m/s</p>
        </div>
    );
};

export default WeatherCard;