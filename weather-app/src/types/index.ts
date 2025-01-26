// src/types/index.ts

export interface WeatherData {
    temperature: number;
    description: string;
    city: string;
    humidity: number;
    windSpeed: number;
  }
  
  export interface WeatherCardProps {
    data: WeatherData;
  }
  
  export interface SearchBarProps {
    onSearch: (city: string) => void;
  }

  
  export interface ApiResponse {
      main: {
          temp: number;
          humidity: number;
      };
      weather: Array<{
          description: string;
      }>;
      wind: {
          speed: number;
      };
      name: string;
      sys: {
          country: string;
      };
  }