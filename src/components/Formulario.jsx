import { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ dispatch }) => {
  //Agregamos un estado para almacenar los datos.
  const [data, setData] = useState({ nombre: "", numero: "" });

  //Desestructuramos el estaso.
  const {nombre, numero} = data;

  const handleChange = (e) => {
    setData({
        ...data,
        [e.target.name] : e.target.value,
    });
  }

  //Definimos el objeto action para Add.
  const acctionAdd = {
    type: "add",
    payload: {
        id: uuid(),
        nombre,
        numero
    }
  }

  const handleAdd = () => {
    //Invocamos al dispatch
    dispatch(acctionAdd);
  }

  return (
    <div className="container">
      <label className="mx-1 d-grid gap-2">
        Nombre:
        <input 
            onChange={handleChange}
            type="text"
            name="nombre"
            value={nombre} 
            className="form-control" 
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        Número:
        <input 
            onChange={handleChange}
            type="text"
            name="numero"
            value={numero} 
            className="form-control" 
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        <button onClick={handleAdd} className="btn btn-info mt-2">
            Agregar
        </button>
      </label>
    </div>
  );
};

export default Formulario;
