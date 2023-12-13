
import Main from "./components/ui/Main"
import SideBar from "./components/SideBar"
import AllData from "./components/AllData"

import { useState } from "react"

function App() {

  const [city, setCity] = useState('Vinaros')
  const handleCityChange = (newCity) => {
    setCity(newCity)
  }

  return (
    <Main>
      <SideBar city={city} handleCityChange={handleCityChange}/>
      <AllData city={city}/> 
    </Main>
  )
}

export default App
