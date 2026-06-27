/*
=========================================================
COMPONENTE: Contacto

Descripción:
Este componente muestra el formulario de contacto
(PQRS) del sistema SOFINV.

Conceptos React utilizados:

✔ useState
✔ Eventos onChange
✔ Evento onSubmit
✔ Formularios controlados
✔ Renderizado condicional

=========================================================
*/

import { useState } from "react";
import "./Contacto.css";

function Contacto() {

  // Estado del formulario
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    tipo: "",
    mensaje: ""
  });

  // Estado para mostrar mensajes
  const [mensaje, setMensaje] = useState("");

  // Actualiza los datos del formulario
  const cambiarValor = (e) => {

    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });

  };

  // Envía el formulario
  const enviarFormulario = (e) => {

    e.preventDefault();

    if (
      formulario.nombre === "" ||
      formulario.correo === "" ||
      formulario.tipo === "" ||
      formulario.mensaje === ""
    ) {

      setMensaje("Por favor complete todos los campos.");
      return;

    }

    setMensaje("✅ PQRS enviada correctamente.");

    setFormulario({
      nombre: "",
      correo: "",
      tipo: "",
      mensaje: ""
    });

  };

  return (

    <section className="contacto">

      <h2>Envíanos tu PQRS</h2>

      <p>
        ¿Tienes alguna petición, queja, reclamo o sugerencia?
      </p>

      <form onSubmit={enviarFormulario}>

        <input
          type="text"
          name="nombre"
          placeholder="Nombre completo"
          value={formulario.nombre}
          onChange={cambiarValor}
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          value={formulario.correo}
          onChange={cambiarValor}
        />

        <select
          name="tipo"
          value={formulario.tipo}
          onChange={cambiarValor}
        >

          <option value="">Seleccione una opción</option>

          <option>Petición</option>

          <option>Queja</option>

          <option>Reclamo</option>

          <option>Sugerencia</option>

        </select>

        <textarea
          name="mensaje"
          placeholder="Escriba su solicitud..."
          rows="6"
          value={formulario.mensaje}
          onChange={cambiarValor}
        />

        <button type="submit">

          Enviar PQRS

        </button>

      </form>

      {mensaje && (

        <p className="mensaje">

          {mensaje}

        </p>

      )}

    </section>

  );

}

export default Contacto;