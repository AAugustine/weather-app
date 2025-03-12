import React from "react";
import { CurrentForecastProps, Forecast } from "../types";

const CurrentForecast: React.FC<CurrentForecastProps> = ({ data }) => {
    if (!data || !data.forecast) {
        return <p>Loading forecast...</p>;
    }

    return (
        <div className="current-forecast">
            <h2>5-Day Forecast</h2>
            {data.forecast.map((day: Forecast, index: number) => (
                <div key={index} className="forecast-day">
                    <p>Date: {day.date}</p>
                    <p>Temperature: {day.temperature}°C</p>
                    <p>Description: {day.description}</p>
                </div>
            ))}
        </div>
    );
};

export default CurrentForecast;