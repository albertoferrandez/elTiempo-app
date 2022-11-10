import Header from "./components/Footer"
import MostrarDatos from "./components/MostrarDatos"
import Titulo from "./components/Titulo"

function App() {

  return (
    <main className="App flex flex-col justify-center items-center">
      <Titulo/>
      <MostrarDatos />
      <Header/>
    </main>
  )
}

export default App
