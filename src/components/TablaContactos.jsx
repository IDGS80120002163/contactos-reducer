import { useState } from "react"; 

const TablaContactos = ({ contactos = [], dispatch }) => {
  // Estado para manejar los datos del contacto a actualizar
  const [data, setData] = useState({
    nombre: "",
    numero: "",
    sexo: "",
    fecha_nac: "",
    imagen: null,
    id: null,
  });

  const { nombre, numero, sexo, fecha_nac, imagen, id } = data;

  // Definimos el método handleDelete
  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

  // Definimos el método handlePrepareUpdate para preparar la actualización
  const handlePrepareUpdate = (contacto) => {
    setData({
      id: contacto.id,
      nombre: contacto.nombre,
      numero: contacto.numero,
      sexo: contacto.sexo,
      fecha_nac: contacto.fecha_nac,
      imagen: contacto.imagen,
    });
  };

  // Definimos el método handleUpdate para aplicar la actualización
  const handleUpdate = () => {
    const updateAction = {
      type: "update",
      payload: {
        id,
        nombre,
        numero,
        sexo,
        fecha_nac,
        imagen,
      },
    };
    dispatch(updateAction);
    // Limpiar datos
    setData({ nombre: "", numero: "", sexo: "", fecha_nac: "", imagen: null, id: null });
  };

  const handleImageChange = (e) => {
    setData({ ...data, imagen: e.target.files[0] }); // Guardar la imagen seleccionada
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Número</th>
            <th>Sexo</th>
            <th>Fecha de Nacimiento</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {contactos.map((contacto) => {
            const finalId = contacto.id.split("-");
            return (
              <tr key={contacto.id}>
                <th>{finalId[0]}</th>
                <td>{contacto.nombre}</td>
                <td>{contacto.numero}</td>
                <td>{contacto.sexo}</td>
                <td>{contacto.fecha_nac}</td>
                <td>
                  {contacto.imagen && ( // Comprobamos si hay imagen y la mostramos
                    <img
                      src={URL.createObjectURL(contacto.imagen)} // Convertimos el archivo a una URL
                      alt={contacto.nombre}
                      style={{ width: "50px", height: "50px", borderRadius: "50%" }} // Estilos opcionales
                    />
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(contacto.id)}
                    className="btn btn-danger"
                  >
                    Eliminar
                  </button>
                  <button
                    onClick={() => handlePrepareUpdate(contacto)}
                    className="btn btn-warning"
                  >
                    Actualizar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {id && (
        <div className="mt-3">
          <label className="mx-1 d-grid gap-2">
            Nombre:
            <input
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => setData({ ...data, nombre: e.target.value })}
              className="form-control"
            />
          </label>
          <label className="mx-1 d-grid gap-2">
            Número:
            <input
              type="text"
              name="numero"
              value={numero}
              onChange={(e) => setData({ ...data, numero: e.target.value })}
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
                  onChange={(e) => setData({ ...data, sexo: e.target.value })}
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
                  onChange={(e) => setData({ ...data, sexo: e.target.value })}
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
                  onChange={(e) => setData({ ...data, sexo: e.target.value })}
                  className="form-check-input"
                />
                Otro
              </label>
            </div>
          </label>
          <label className="mx-1 d-grid gap-2">
            Fecha de Nacimiento:
            <input
              type="date"
              name="fecha_nac"
              value={fecha_nac}
              onChange={(e) => setData({ ...data, fecha_nac: e.target.value })}
              className="form-control"
            />
          </label>
          <label className="mx-1 d-grid gap-2">
            Imagen:
            <input
              type="file"
              name="imagen"
              accept="image/*" // Para aceptar solo imágenes
              onChange={handleImageChange} // Manejar el cambio de imagen
              className="form-control"
            />
          </label>
          <label className="mx-1 d-grid gap-2">
            <button onClick={handleUpdate} className="btn btn-success mt-2">
              Actualizar Contacto
            </button>
          </label>
        </div>
      )}
    </div>
  );
};

export default TablaContactos;
