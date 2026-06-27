/*
=========================================================
COMPONENTE: DetalleCategoria

Descripción:
Este componente muestra la información detallada
de la categoría seleccionada por el usuario.

Conceptos React utilizados:
✔ Props
✔ Renderizado condicional
✔ Eventos (onClick)

=========================================================
*/

import "./DetalleCategoria.css";

function DetalleCategoria({ categoria, onClose }) {

  return (

    <div
      className="modal-overlay"
      onClick={onClose}
    >

      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Nombre de la categoría */}
        <h2>{categoria.nombre}</h2>

        {/* Imagen */}
        <img
          src={categoria.imagen}
          alt={categoria.nombre}
        />

        {/* Descripción */}
        <p>{categoria.descripcion}</p>

        {/* Lista de productos */}
        <h3>Productos disponibles</h3>

        <ul>
          {categoria.detalle.map((producto, index) => (
            <li key={index}>
              {producto}
            </li>
          ))}
        </ul>

        {/* Botón para cerrar */}
        <button
          className="btn-cerrar"
          onClick={onClose}
        >
          Cerrar
        </button>

      </div>

    </div>

  );

}

export default DetalleCategoria;