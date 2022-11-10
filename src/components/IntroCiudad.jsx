import { useState } from 'react'
import { MdSearch } from "react-icons/md";


const IntroCiudad = ({enviarCiudad}) => {

    const [location, setLocation] = useState("")

    const buscarLocation = (e) => {
        e.preventDefault();
        console.log(location);
        enviarCiudad(location)
    }

    return (
        
        <div className='w-5/6 lg:w-3/6 px-2 backdrop-blur-sm bg-white/30 rounded-md'>
            <form onSubmit={buscarLocation} className="flex justify-between">
                <input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder='Introduce una ciudad . . .'
                    type='text'
                    className='bg-transparent border-none 
                    focus:outline-none text-base py-3 w-full'
                required
                />
                <button type='submit' className='px-2 py-2  transform hover:scale-110 motion-reduce:transform-none'><MdSearch size='20px' /></button>
            </form>
        </div>
    )
}

export default IntroCiudad