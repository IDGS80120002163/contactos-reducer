import { useEffect, useReducer, useState } from "react";
import Formulario from "./Formulario";
import TablaContactos from "./TablaContactos";
import { ContactosReducer } from "../reducers/ContactosReducer";

const init = () => {
    //Definimos el localstorage
    const contactos = localStorage.getItem("contactos");

    return contactos ? JSON.parse(contactos) : [];
}

const Contactos = () => {
  
  /**
   * Utilizamos el hook useReducer para poder utilizar el ReducerContactos 
   * pasándole un estado inicial
   */

  const [state, dispatch] = useReducer(ContactosReducer, [], init);
  
  const [formView, setFormView] = useState(false);

  //Agregando un useEffect
  useEffect(() => {
    localStorage.setItem("contactos", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mt-3">
        <button onClick={() => setFormView(!formView)} className="btn btn-success">
            {!formView ? "+ Agregar contacto" : "- Cerrar Formulario"}
        </button>
        {formView && <Formulario dispatch={dispatch}/>}        
        <TablaContactos contactos={state} dispatch={dispatch}/>
    </div>
  );
};

export default Contactos;
