import axios from 'axios';
import { Degree } from '../Types/Degree';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const unitSystemMap: Record<Degree, 'metric' | 'imperial'> = {
    C: 'metric',
    F: 'imperial',
  };
  
export const getCityTempreture = async (lat: number, lon: number, degree: Degree) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                lat,
                lon,
                units: unitSystemMap[degree],
                appid: API_KEY,
            },
        });
        return response.data.list[0].main.temp;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
