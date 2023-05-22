import { useContext } from "react"
import Header from "./components/Footer"
import MostrarDatos from "./components/MostrarDatos"
import Titulo from "./components/Titulo"
import { ThemeContext } from "./context/theme"

function App() {

  const { theme } = useContext(ThemeContext)

  return (
    <main className={`${theme} App flex flex-col justify-center items-center font-bold`}>
      <Titulo/>
      <MostrarDatos />
      <Header/>
    </main>
  )
}

export default App
