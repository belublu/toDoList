
import logoList from "./imagenes/logo.png"
import './App.css'
import { ListaDeTareas } from "./componentes/ListaDeTareas/ListaDeTareas"

function App() {

  return (
    <div className="aplicacion-tareas">
      <div className="list-logo-contenedor">
        <img
          src={logoList}
          className='list-logo' />
          <h1>My To Do List</h1>
      </div>

      <div className="tareas-lista-principal">
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div>

    </div>
  )
}

export default App
