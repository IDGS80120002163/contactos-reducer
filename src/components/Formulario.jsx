import { useState } from "react";
import { v4 as uuid } from "uuid";

const Formulario = ({ dispatch }) => {
  // Agregamos un estado para almacenar los datos.
  const [data, setData] = useState({
    nombre: "",
    numero: "",
    sexo: "",
    fecha_nac: "",
    imagen: null,
  });

  // Desestructuramos el estado.
  const { nombre, numero, sexo, fecha_nac, imagen } = data;

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setData({
      ...data,
      [name]: type === "file" ? files[0] : value, // Manejo especial para el input de tipo file
    });
  };

  // Definimos el objeto action para Add.
  const acctionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      nombre,
      numero,
      sexo,
      fecha_nac,
      imagen,
    },
  };

  const handleAdd = () => {
    // Invocamos al dispatch
    dispatch(acctionAdd);
    setData({ nombre: "", numero: "", sexo: "", fecha_nac: "", imagen: null });
  };

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
        Sexo:
        <div>
          <label className="form-check mb-2">
            <input
              type="radio"
              name="sexo"
              value="Masculino"
              checked={sexo === "Masculino"}
              onChange={handleChange}
              className="form-check-input"
            />
            Masculino
          </label>
          <label className="form-check mb-2">
            <input
              type="radio"
              name="sexo"
              value="Femenino"
              checked={sexo === "Femenino"}
              onChange={handleChange}
              className="form-check-input"
            />
            Femenino
          </label>
          <label className="form-check mb-2">
            <input
              type="radio"
              name="sexo"
              value="Otro"
              checked={sexo === "Otro"}
              onChange={handleChange}
              className="form-check-input"
            />
            Otro
          </label>
        </div>
      </label>
      <label className="mx-1 d-grid gap-2">
        Fecha de Nacimiento:
        <input
          onChange={handleChange}
          type="date"
          name="fecha_nac"
          value={fecha_nac}
          className="form-control"
        />
      </label>
      <label className="mx-1 d-grid gap-2">
        Imagen:
        <input
          onChange={handleChange}
          type="file"
          name="imagen"
          accept="image/*" //Para aceptar solo imágenes
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
