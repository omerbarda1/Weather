import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// const API_KEY = '66da95a586317a9f5385a84ed763ea55';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getWeatherData = async (lat: number, lon: number) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat,
                lon,
                units: 'metric',
                appid: API_KEY,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
