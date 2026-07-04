/*
=========================================================
SERVICIO WEB SOFINV

Descripción:
Archivo encargado de realizar todas las peticiones
al servicio web (json-server).

Ventajas:

✔ Código organizado.
✔ Fácil mantenimiento.
✔ Reutilizable.
✔ Escalable.

=========================================================
*/

// Dirección del servicio web

const URL = "http://localhost:3001/usuarios";

/*
=========================================================
Registrar usuario
=========================================================
*/

export async function registrarUsuario(usuario){

    const respuesta = await fetch(URL,{

        method:"POST",

        headers:{

            "Content-Type":"application/json"

        },

        body:JSON.stringify(usuario)

    });

    return respuesta.json();

}

/*
=========================================================
Consultar usuarios registrados
=========================================================
*/

export async function obtenerUsuarios(){

    const respuesta = await fetch(URL);

    return respuesta.json();

}