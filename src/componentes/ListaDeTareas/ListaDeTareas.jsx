import React, { useState, useEffect } from 'react'
import TareaFormulario from '../TareaFormulario/TareaFormulario'
import Tarea from "../Tarea/Tarea.jsx"
import "../ListaDeTareas/ListaDeTareas.css"

export const ListaDeTareas = () => {
    const [tareas, setTareas] = useState(()=> {
        const almacenarTareas = localStorage.getItem("tareas")
        if (almacenarTareas) {
            return JSON.parse(almacenarTareas)
        } else{
            return []
        }
    }) 

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.text = tarea.texto.trim()
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas)
        }
    }

    const editarTarea = (id, textoEditado) =>{
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.texto = textoEditado
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas))
    },[tareas])

    return (
        <>
            <TareaFormulario onSubmit={agregarTarea} />

            <div className="tareas-lista-contenedor">
                {
                    tareas.map((tarea) =>
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                            editarTarea={editarTarea} 
                            />
                    )
                }
            </div>
        </>
    )
}
