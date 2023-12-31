import React, { useState } from 'react'
import "../TareaFormulario/TareaFormulario.css"
import { v4 as uuidv4 } from "uuid"

const TareaFormulario = (props) => {

    const [input, setInput] = useState("")



    const manejarCambio = e => {
        setInput(e.target.value)
    }

    const manejarEnvio = e => {
        e.preventDefault()

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }

        props.onSubmit(tareaNueva)
        document.getElementsByTagName("input")[0].value = ""
        setInput("")
    }



    return (
        <form
            className='tarea-formulario'
            onSubmit={manejarEnvio}>
            <input
                className='tarea-input'
                type="text"
                placeholder='Escribe una tarea'
                name="texto"
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>Agregar</button>
        </form>
    )
}

export default TareaFormulario