import { useState, useEffect } from 'react'
import { getClima } from '../../services/getClima';
import DatosCiudad from './DatosCiudad';
import SearchCity from './SearchCity';

const MostrarDatos = () => {

    const [datos, setDatos] = useState({});

    const searchCity = async (city) => {
        const getData = await getClima(city)
        setDatos(getData)
    }

    useEffect(() => {
        searchCity('Vinaros') // Realizar la búsqueda inicial al cargar la web
    }, [])

    return (
        <>
            <div className='w-5/6 lg:w-3/6 px-2 backdrop-blur-sm bg-white/30 rounded-md'>
                <SearchCity handleNewCity={(e) => searchCity(e)} />
            </div>

            {
                <DatosCiudad
                    name={datos.name}
                    pais={datos.main ? datos.sys.country : null}
                    temp={datos.main ? Math.round(datos.main.temp) : null}
                    main={datos.weather ? datos.weather[0].main : null}
                    feel={datos.main ? Math.round(datos.main.feels_like) : null}
                    max={datos.main ? Math.round(datos.main.temp_max) : null}
                    min={datos.main ? Math.round(datos.main.temp_min) : null}
                    hum={datos.main ? datos.main.humidity : null}
                    viento={datos.main ? datos.wind.speed : null}
                    lluvia={datos.main ? datos.main.humidity : null}
                />
            }
        </>

    )
}

export default MostrarDatos