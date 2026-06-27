/*
=========================================================
COMPONENTE: CardCategoria

Descripción:
Componente reutilizable encargado de mostrar una categoría
del inventario. La información es recibida mediante Props.

Conceptos React utilizados:
✔ JSX
✔ Props
✔ Eventos (onClick)

=========================================================
*/

import "./CardCategoria.css";

function CardCategoria({ nombre, imagen, descripcion, onClick }) {

  return (

    <div className="card">

      {/* Imagen representativa de la categoría */}

      <div className="img-box">

        <img
          src={imagen}
          alt={nombre}
        />

      </div>

      {/* Nombre de la categoría */}

      <h3>{nombre}</h3>

      {/* Descripción */}

      <p>{descripcion}</p>

      {/* Botón */}

      <button
        className="btn-detalles"
        onClick={onClick}
      >
        Ver detalles
      </button>

    </div>

  );

}

export default CardCategoria;