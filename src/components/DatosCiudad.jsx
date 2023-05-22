import { useContext } from 'react'
import { ThemeContext } from '../context/theme'
import { useEffect } from 'react'

const DatosCiudad = ({ name, pais, temp, main, feel, max, min, hum, viento, lluvia }) => {

    const { theme, setTheme } = useContext(ThemeContext)

    useEffect(() => {
        console.log(main, theme)
        setTheme(main)
    }, [main])

    return (
        <>
            <article className='flex flex-col justify-center items-center w-5/6 lg:w-3/6'>
                <div className='backdrop-blur-sm bg-white/30 mt-2 rounded-md p-2'>
                    <div className='pt-6'>
                        <h1 className='text-2xl'> {name} - {pais}</h1>
                    </div>

                    <div className='flex justify-center items-center pt-6 icons-weather w-full'>
                        <div>
                            <h1 className='text-5xl'> {temp} <small> ºC </small> </h1>
                        </div>
                        <div className="ml-6">
                            <img src={`/iconos-clima/${main}.gif`} alt='clima main' width={60} />
                        </div>
                    </div>
                </div>

                <div className='mt-6 w-5/6 lg:w-6/6'>
                    <div className='grid py-3 grid-rows-2 grid-cols-2 gap-4 lg:grid-cols-3'>
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
