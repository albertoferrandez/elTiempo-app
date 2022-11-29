import { ClimaContext } from "../context/ClimaContext"
import Icons from "../services/Icons"


const DatosCiudad = ({ name, pais, temp, main, feel, max, min, hum, viento, lluvia }) => {

    if(main !== null || undefined){
        document.querySelector(".MostrarDatos").style.backgroundImage = `url(src/assets/imagenes/${main}.jpg)`; 
        document.querySelector(".App").style.backgroundColor = `${
            
            main === 'Clouds' ? '#697277' : null ||
            main === 'Clear' ? '#9ba71d' : null ||
            main === 'Rain' ? '#60848a' : null ||
            main === 'Thunderstorm' ? '#7c68a3' : null ||
            main === 'Snow' ? '#1c2226' : null
        
        }`   
    }else{
        null;
    }

    return (
        <>
            <article className='flex flex-col justify-center items-center'>

                <div className='pt-6'>
                    <h1 className='text-white text-2xl'> {name} - {pais}</h1>
                </div>

                <div className='flex justify-center items-center pt-6 icons-weather w-full'>
                    <div>
                        <h1 className='text-white text-5xl'> {temp} <small> ºC </small> </h1>
                    </div>
                    <div className="ml-6">
                        <ClimaContext.Provider value={main}>
                            <Icons />
                        </ClimaContext.Provider>
                    </div>
                </div>

                <div className='mt-6 w-5/6 lg:w-3/6'>
                    <div className='grid py-3 grid-rows-2 grid-cols-2 gap-4'>
                        <div className='backdrop-blur-sm bg-white/30 rounded-md p-2 text-xs md:text-base'>
                            <h6>Sensación: </h6>
                            <p className="text-center my-2 ">{feel} ºC</p>
                        </div>
                        <div className='backdrop-blur-sm bg-white/30 rounded-md p-2 text-xs md:text-base'>
                            ºC Máxima:
                            <p className="text-center my-2">{max} ºC</p>
                        </div>
                        <div className='backdrop-blur-sm bg-white/30 rounded-md p-2 text-xs md:text-base'>
                            ºC Minima:
                            <p className="text-center my-2">{min} ºC</p>
                        </div>
                        <div className='backdrop-blur-sm bg-white/30 rounded-md p-2 text-xs md:text-base'>
                            Húmedad:
                            <p className="text-center my-2">{hum} %</p>
                        </div>
                        <div className='backdrop-blur-sm bg-white/30 rounded-md p-2 text-xs md:text-base'>
                            Viento:
                            <p className="text-center my-2">{viento}  km/h</p>
                        </div>
                        <div className='backdrop-blur-sm bg-white/30 rounded-md p-2 text-xs md:text-base'>
                            Lluvia:
                            <p className="text-center my-2">{lluvia} %</p>
                        </div>
                    </div>
                </div>
            </article>

        </>

    )
}

export default DatosCiudad
