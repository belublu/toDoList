
import logoList from "./imagenes/logo.png"
import { ListaDeTareas } from "./componentes/ListaDeTareas/ListaDeTareas"
import { Row, Col } from "react-bootstrap"

import './App.css'

function App() {

  return (
    <div className="container-fluid text-center h-100">
      <Row className="d-flex justify-content-center align-items-center aplicacion-tareas" >
        <Col xs={12} sm={12} md={6} lg={4} className="text-center">
          <div className="d-flex flex-row list-logo-contenedor ms-4 my-4">
            <img
              src={logoList}
              className='list-logo' />
            <h1 className="mt-1">My To Do List</h1>
          </div>

          <div className="tareas-lista-principal p-3">
            <h2>Mis Tareas</h2>
            <ListaDeTareas />
          </div>

        </Col>

      </Row>

    </div>
    
      

    

    
  )
}

export default App
