import { useContext} from 'react'
import { ClimaContext } from '../context/ClimaContext'

const Icons = () => {

    const main = useContext(ClimaContext)

    switch (main) {
        case 'Rain':
            return <img src="/iconos-clima/lluvia.gif" alt="icono-gif" className="w-32 h-32"/>;
        case 'Clouds':
            return <img src="/iconos-clima/few.gif" alt="icono-gif" className="w-32 h-32"/>;
        case 'Clear':
            return <img src="/iconos-clima/sun.gif" alt="icono-gif" className="w-32 h-32"/>;
        case 'Thunderstorm':
            return <img src="/iconos-clima/thunder.gif" alt="icono-gif" className="w-32 h-32"/>;
        case 'Snow':
            return <img src="/iconos-clima/snow.gif" alt="icono-gif" className="w-32 h-32"/>;
        default: null;
    }

    return (
        
        <>
            {main}
        </>
    )
}

export default Icons

