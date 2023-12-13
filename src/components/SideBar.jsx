import { useDateHour } from "../hooks/useDateHour"
import { useGetWeather } from "../hooks/useGetWeather"
import SearchForm from "./ui/SearchForm"

function SideBar({ city, handleCityChange }) {
  const { handleNewCity, data } = useGetWeather(city)
  const { actualDate } = useDateHour()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const city = data.get("city")

    handleCityChange(city)
    handleNewCity()
  }

  console.log(data)

  const DATA = {
    WEATHER_ICON: data?.weather[0]?.icon,
    TEMP_CELSIUS: Math.floor(data?.main?.temp),
    DESCRIPTION: data?.weather[0].description,
    CITY: data?.name,
    COUNTRY: data?.sys.country
  }

  return (
    <aside className="md:col-span-4 col-span-12 h-full p-3 md:p-4 lg:p-6">
      <SearchForm
        handleSubmit={handleSubmit}
      />

      <div className="grid grid-cols-2 md:grid-cols-1 place-items-center gap-4">
        <div className="mt-4">
          <p className="capitalize text-center">{DATA.DESCRIPTION}</p>
          <img
            src={`${DATA.WEATHER_ICON}.png`}
            alt="weather_icon"
            className="object-contain h-44 lg:h-48"
          />
        </div>

        <div className="mt-4">
          <h3 className="text-4xl md:text-7xl">
            {DATA.TEMP_CELSIUS}
            <span className="text-3xl absolute">ºC</span>
          </h3>

          <p className="mt-4">
            {actualDate.day},
            <span className="text-slate-200 ml-2">
              {actualDate.time}
            </span>
          </p>
        </div>
      </div>

      <hr className="my-2 md:my-4" />

      <div className="mt-4 md:mt-8 flex justify-center text-lg md:text-3xl">
        <p>
          {DATA.CITY},
          <span className="text-slate-200 ml-2">
            {DATA.COUNTRY}
          </span>
        </p>
      </div>

    </aside>
  )
}

export default SideBar
