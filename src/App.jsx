import logoList from "./imagenes/logo.png"
import { ListaDeTareas } from "./componentes/ListaDeTareas/ListaDeTareas"
import { Row, Col } from "react-bootstrap"
import './App.css'

function App() {

  return (
    <div className="container-fluid ">
      <Row className="d-flex justify-content-center aplicacion-tareas" >
        <Col xs={12} sm={12} md={6} lg={4} className="my-4 columnas-aplicacion-tareas">
          <div className="d-flex flex-row justify-content-center align-items-center list-logo-contenedor mt-5">
            <img
              src={logoList}
              className='list-logo me-2' />
            <h1 className="ms-1" >My To Do List</h1>
          </div>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center row-tareas">
        <Col xs={12} sm={12} md={6} lg={4}>
          <div className="tareas-lista-principal p-3">
            <h3>Mis Tareas</h3>
            <ListaDeTareas />
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default App
