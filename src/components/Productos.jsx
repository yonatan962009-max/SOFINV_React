/*
=========================================================
COMPONENTE: Productos

Descripción:
Módulo encargado de consultar y mostrar los productos
registrados en el sistema SOFINV.
=========================================================
*/

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Productos() {

    const navigate = useNavigate();

    // Estado que almacena los productos
    const [productos, setProductos] = useState([]);

    /*
    =====================================================
    Consultar productos al cargar el componente
    =====================================================
    */

    useEffect(() => {

        obtenerProductos();

    }, []);


    /*
    =====================================================
    Obtener productos desde el backend
    =====================================================
    */

    const obtenerProductos = async () => {

        try {

            const respuesta = await fetch(
                "http://localhost:3001/productos"
            );

            const datos = await respuesta.json();

            setProductos(datos);

        } catch (error) {

            console.error(
                "Error al consultar los productos:",
                error
            );

        }

    };


    /*
    =====================================================
    Interfaz
    =====================================================
    */

    return (

        <main className="productos">

            <h1>Productos SOFINV</h1>

            <button
                className="btn-registrar-producto"
                onClick={() => navigate("/agregar-producto")}
            >
                + Registrar producto
            </button>


            {productos.length === 0 ? (

                /*
                ==========================================
                Estado cuando no existen productos
                ==========================================
                */

                <section className="productos-vacio">

                    <div className="icono-productos">
                        📦
                    </div>

                    <h2>
                        No hay productos registrados
                    </h2>

                    <p>
                        Aún no se han registrado productos
                        en el sistema.
                    </p>

                    <p>
                        Haz clic en "Registrar producto"
                        para agregar uno.
                    </p>

                </section>

            ) : (

                /*
                ==========================================
                Lista de productos
                ==========================================
                */

                <section className="lista-productos">

                    {productos.map((producto) => (

                        <article
                            className="tarjeta-producto"
                            key={producto.id}
                        >

                            <div className="icono-tarjeta">
                                📦
                            </div>

                            <div className="informacion-producto">

                                <h3>
                                    {producto.nombre}
                                </h3>

                                <p>
                                    <strong>Código:</strong>{" "}
                                    {producto.codigo}
                                </p>

                                <p>
                                    <strong>Cantidad:</strong>{" "}
                                    {producto.cantidad}
                                </p>

                                <p className="descripcion-producto">
                                    {producto.descripcion}
                                </p>

                            </div>

                        </article>

                    ))}

                </section>

            )}

        </main>

    );

}

export default Productos;