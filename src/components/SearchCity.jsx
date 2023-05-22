import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { MdSearch } from "react-icons/md";

const SearchCity = ({ handleNewCity }) => {

    const [city, setCity] = useState('Vinaros')

    const handleInputChange = ({ target }) => {
        setCity(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        handleNewCity(city)
        setCity('')
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} className="flex justify-between">
            <input
                value={city}
                onChange={(e) => handleInputChange(e)}
                placeholder='Introduce una ciudad . . .'
                type='text'
                className='bg-transparent border-none 
                    focus:outline-none text-base py-3 w-full
                    placeholder-black'
                required
            />
            <button type='submit' className='px-2 py-2  transform hover:scale-110 motion-reduce:transform-none'><MdSearch size='20px' /></button>
        </form>
    )
}

export default SearchCity

SearchCity.propTypes = {
    handleNewCity: PropTypes.func.isRequired
}