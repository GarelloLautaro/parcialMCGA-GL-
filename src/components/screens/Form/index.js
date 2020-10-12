import './style.css';
import React from 'react';
import { Field, Form } from "react-final-form";

const FormUser = (props) => {
    return (
        <div className="ContainerForm">
            <Form onSubmit={() => {}}>
                {
                    ({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="FormProps">
                                <h1>Alumnos</h1>
                                <label>Nombre: </label>
                                <input defaultValue={props.name} type="text"/>
                                <label>Año: </label>
                                <input defaultValue={props.year} type="text"/>
                                <button class="btn" type="submit">Guardar información</button>
                                <button class="btn" type="submit">Agregar contadores</button>
                            </div>
                        </form>
                    )
                }
            </Form>
        </div>
    );
};

export default FormUser