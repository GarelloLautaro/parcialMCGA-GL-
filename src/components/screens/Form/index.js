import './style.css';
import React from 'react';
import User from '../User/index.js'
import { Field, Form } from "react-final-form";

const FormUser = () => {
    return (
        <div className="ContainerForm">
            <Form onSubmit={() => {}}>
                {
                    ({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="FormProps">
                                <h1>Alumnos</h1>
                                <label>Nombre: </label>
                                <input defaultValue={User.Alumno[0].name} type="text"/>
                                <label>Año: </label>
                                <input defaultValue={User.Alumno[0].year} type="text"/>
                                <button type="submit">Editar información</button>
                                <button type="submit">Agregar contadores</button>
                            </div>
                        </form>
                    )
                }
            </Form>
        </div>
    );
};

export default FormUser