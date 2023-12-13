import { useState, useEffect } from 'react'
import { getClima } from '../services/getClima'
import humidity from '/humidity.png'
import tempmin from '/tempmin.png'
import tempmax from '/tempmax.png'
import wind from '/wind.png'

export function useGetWeather(city) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleNewCity = async () => {
        try {
            const getData = await getClima(city)
            setData(getData)
        } catch (error) {
            console.error('Error fetching weather data:', error)
            throw error
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        handleNewCity()
    }, [city])

    const dataValues = {
        TEMP_MIN: {
            title: 'Temperatura Minima',
            value: `${data?.main?.temp_min}`,
            unit: '°C',
            icon: tempmin
        },
        TEMP_MAX: {
            title: 'Temperatura Maxima',
            value: `${data?.main?.temp_max}`,
            unit: '°C',
            icon: tempmax
        },
        HUMIDITY: {
            title: 'Humedad',
            value: `${data?.main?.humidity}`,
            unit: '%',
            icon: humidity
        },
        PRESSURE: {
            title: 'Presión Atmosférica',
            value: `${data?.main?.pressure}`,
            unit: 'hPa',
            icon: ''
        },
        WIND_SPEED: {
            title: 'Viento',
            value: `${data?.wind?.speed} km/h`,
            icon: wind
        },
        VISIBILITY: {
            title: 'Visibilidad',
            value: `${data?.visibility / 1000}`,
            unit: 'Km',
            icon: ''
        }
    }

    return {
        dataValues,
        loading,
        handleNewCity,
        data
    }
}


