const TablaContactos = ({ contactos = [], dispatch }) => {
  
    //Definimos el método handleDelete
    const handleDelete = (id) => {
        const deleteAction = {
            type: "delete",
            payload: id,
        };
        dispatch(deleteAction);
    }

    return (
    <table className="table">
        <thead>
            <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Número</th>
            {/* <th>Sexo</th>
            <th>Fecha de nacimiento</th>
            <th>Foto</th> */}
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
                <td>
                    <button onClick={() => handleDelete(contacto.id)} className="btn btn-danger">Eliminar</button>
                    <button className="btn btn-warning">Actualizar</button>
                </td>
                </tr>
            );
            })}
        </tbody>
    </table>
  );
};

export default TablaContactos;
