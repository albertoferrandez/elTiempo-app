import { useState, useEffect } from 'react'
import DatosCiudad from './DatosCiudad';
import IntroCiudad from './IntroCiudad';

const MostrarDatos = () => {

  const [datos, setDatos] = useState({});

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Vinaros&appid=36c85aaf32df1a52eb9a0e08218adb7f&lang={es}&units=metric"
    ).then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => {
        console.log(error)
      });
  }, [])

  const handleenviarCiudad = (location) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=36c85aaf32df1a52eb9a0e08218adb7f&lang={es}&units=metric`
    ).then((response) => response.json())
      .then((data) =>setDatos(data))
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <section className='MostrarDatos w-4/5 h-auto py-6 md:w-3/5 rounded-md
    
    backdrop-blur-md text-white'>

      <nav className='flex justify-center inline-block'>
        <IntroCiudad enviarCiudad={handleenviarCiudad} />
      </nav>

      {
        location === "" ? "" :
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

    </section>
  )
}

export default MostrarDatos