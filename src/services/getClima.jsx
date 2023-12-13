
import PropTypes from 'prop-types'

export const getClima = async(city) => {

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36c85aaf32df1a52eb9a0e08218adb7f&lang=sp&units=metric`
    
    const resp = await fetch( URL );

    const data = await resp.json()

    return data
}

getClima.propTypes = {
    city: PropTypes.string.isRequired
}
