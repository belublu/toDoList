import React, { useState } from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai"
import { AiOutlineEdit } from "react-icons/ai"
import "./Tarea.css"

const Tarea = ({ id, texto, completada, completarTarea, editarTarea, eliminarTarea }) => {
    const [editando, setEditando] = useState(false)
    const [textoEditado, setTextoEditado] = useState("")

    const guardarEdicion = () => {
        editarTarea(id, textoEditado)
        setEditando(false)
    }

    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            {editando ? (
                <input
                    className="tarea-input-editar"
                    type="text"
                    value={textoEditado}
                    onChange={(e) => setTextoEditado(e.target.value)}
                    onBlur={guardarEdicion}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            guardarEdicion()
                        }
                    }}
                    autoFocus
                />
            ) : (
                <div className="tarea-texto" onClick={() => completarTarea(id)}>
                    {texto}
                </div>
            )}
            <div className="tarea-contenedor-iconos" onClick={() => setEditando(true)}>
                <AiOutlineEdit className="tarea-icono" />
            </div>
            <div className="tarea-contenedor-iconos" onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>
    )
}

export default Tarea

/* Estoy asignando un nombre de 
        clase condicional. Es decir, que si la tarea esta completada(que estoy enviando por Prop) muestre tarea-contenedor 
        completada, y si no, solamente tarea-contenedor */

/* Se envía como propiedad id porque la app necesita saber cual es la
        tarea especifica que se debe marcar como completada.*/

/* En este caso el className se está pasando como Prop */