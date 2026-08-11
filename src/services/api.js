/*
=========================================================
SERVICIO WEB SOFINV

Descripción:
Archivo encargado de realizar las peticiones al backend
de SOFINV desarrollado con Node.js y Express.

El backend se comunica con la base de datos MySQL.

=========================================================
*/

// Dirección del servicio web de SOFINV
const URL = "http://localhost:3001/usuarios";


/*
=========================================================
Registrar usuario
=========================================================
*/

export async function registrarUsuario(usuario) {

    const respuesta = await fetch(URL, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(usuario)

    });

    const datos = await respuesta.json();

    if (!respuesta.ok) {

        throw new Error(
            datos.mensaje || "Error al registrar el usuario"
        );

    }

    return datos;
}


/*
=========================================================
Iniciar sesión

Envía correo y contraseña al backend
para validar las credenciales en MySQL.
=========================================================
*/

export async function iniciarSesion(correo, contrasena) {

    const respuesta = await fetch(
        "http://localhost:3001/login",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                correo,
                contrasena
            })
        }
    );

    const datos = await respuesta.json();

    if (!respuesta.ok) {

        throw new Error(
            datos.mensaje || "Error al iniciar sesión"
        );

    }

    return datos;
}


/*
=========================================================
Consultar usuarios registrados
=========================================================
*/

export async function obtenerUsuarios() {

    const respuesta = await fetch(URL);

    const datos = await respuesta.json();

    if (!respuesta.ok) {

        throw new Error(
            datos.mensaje || "Error al consultar los usuarios"
        );

    }

    return datos;
}