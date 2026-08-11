/*
=========================================================
COMPONENTE: AgregarProducto

Descripción:
Permite registrar nuevos productos en SOFINV.

Los datos son enviados al backend mediante
POST /productos y almacenados en MySQL.
=========================================================
*/

import { useState } from "react";

function AgregarProducto() {

    // Estados del formulario

    const [codigo, setCodigo] = useState("");

    const [nombre, setNombre] = useState("");

    const [cantidad, setCantidad] = useState("");

    const [descripcion, setDescripcion] = useState("");

    const [mensaje, setMensaje] = useState("");

    /*
    =====================================================
    Registrar producto
    =====================================================
    */

    const manejarEnvio = async (evento) => {

        evento.preventDefault();

        // Validar campos

        if (
            !codigo ||
            !nombre ||
            cantidad === "" ||
            !descripcion
        ) {

            setMensaje(
                "Todos los campos son obligatorios."
            );

            return;
        }

        try {

            const respuesta = await fetch(
                "http://localhost:3001/productos",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({

                        codigo: codigo.trim(),

                        nombre: nombre.trim(),

                        cantidad: Number(cantidad),

                        descripcion: descripcion.trim()

                    })
                }
            );

            const datos = await respuesta.json();

            // Verificar respuesta del servidor

            if (!respuesta.ok) {

                setMensaje(
                    datos.mensaje ||
                    "No fue posible registrar el producto."
                );

                return;
            }

            // Registro exitoso

            setMensaje(
                "Producto registrado correctamente."
            );

            // Limpiar formulario

            setCodigo("");

            setNombre("");

            setCantidad("");

            setDescripcion("");

        } catch (error) {

            console.error(
                "Error al registrar producto:",
                error
            );

            setMensaje(
                "No fue posible conectar con el servidor."
            );

        }

    };

    /*
    =====================================================
    Interfaz
    =====================================================
    */

    return (

        <main className="agregar-producto">

            <h2>Registrar producto</h2>

            <form onSubmit={manejarEnvio}>

                <div>

                    <label htmlFor="codigoProducto">
                        Código:
                    </label>

                    <input
                        id="codigoProducto"
                        type="text"
                        value={codigo}
                        onChange={(evento) =>
                            setCodigo(evento.target.value)
                        }
                        placeholder="Ejemplo: PAP-001"
                        required
                    />

                </div>


                <div>

                    <label htmlFor="nombreProducto">
                        Nombre:
                    </label>

                    <input
                        id="nombreProducto"
                        type="text"
                        value={nombre}
                        onChange={(evento) =>
                            setNombre(evento.target.value)
                        }
                        placeholder="Nombre del producto"
                        required
                    />

                </div>


                <div>

                    <label htmlFor="cantidadProducto">
                        Cantidad:
                    </label>

                    <input
                        id="cantidadProducto"
                        type="number"
                        min="0"
                        value={cantidad}
                        onChange={(evento) =>
                            setCantidad(evento.target.value)
                        }
                        placeholder="Cantidad disponible"
                        required
                    />

                </div>


                <div>

                    <label htmlFor="descripcionProducto">
                        Descripción:
                    </label>

                    <textarea
                        id="descripcionProducto"
                        value={descripcion}
                        onChange={(evento) =>
                            setDescripcion(evento.target.value)
                        }
                        placeholder="Descripción del producto"
                        required
                    />

                </div>


                <button type="submit">
                    Registrar producto
                </button>

            </form>


            {mensaje && (

                <p className="mensaje-producto">
                    {mensaje}
                </p>

            )}

        </main>

    );

}

export default AgregarProducto;