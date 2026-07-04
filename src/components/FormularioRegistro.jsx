/*
=========================================================
COMPONENTE: FormularioRegistro

Descripción:
Permite registrar nuevos usuarios en el sistema SOFINV.

Conceptos React utilizados:

✔ useState
✔ Eventos
✔ Props
✔ Formularios controlados

=========================================================
*/

import { useState } from "react";
import "./FormularioRegistro.css";
import { registrarUsuario } from "../services/api";

function FormularioRegistro({ volver }) {

    /*
    ============================================
    Estados del formulario
    ============================================
    */

    const [nombre, setNombre] = useState("");

    const [usuario, setUsuario] = useState("");

    const [correo, setCorreo] = useState("");

    const [password, setPassword] = useState("");

    const [confirmar, setConfirmar] = useState("");
    /*
    =========================================================
    Estado que almacena mensajes de validación.
    =========================================================
    */
   const [mensaje, setMensaje] = useState("");



    /*
    ============================================
    Función temporal del formulario.

    Más adelante enviaremos la información
    mediante fetch() al json-server.
    ============================================
    */

    /*
    =========================================================
    Valida la información del formulario.
    En la siguiente fase esta función enviará la
    información al servicio web mediante fetch().
    =========================================================
    */
   const manejarRegistro = async (e) => {

    e.preventDefault();

    // Verifica que ningún campo esté vacío

    if (

        nombre === "" ||

        usuario === "" ||

        correo === "" ||

        password === "" ||

        confirmar === ""

    ){

        setMensaje("Todos los campos son obligatorios.");

        return;

    }

    // Verifica que ambas contraseñas coincidan

    if(password !== confirmar){

        setMensaje("Las contraseñas no coinciden.");

        return;

    }

    try{
        await registrarUsuario({
            
            nombre,
            
            usuario,
            
            correo,
            
            password
        
    });

    setMensaje("Usuario registrado correctamente.");

    setNombre("");

    setUsuario("");

    setCorreo("");

    setPassword("");

    setConfirmar("");
}catch(error){
    setMensaje("Error al registrar el usuario.");
}
};

    return (

        <section className="registro">

            <div className="registro-card">

                <img
                    src="/IMAGES/Logo SOFINV pagina.png"
                    alt="SOFINV"
                />

                <h1>Crear cuenta</h1>

                <form onSubmit={manejarRegistro}>

                    <input

                        type="text"

                        placeholder="Nombre completo"

                        value={nombre}

                        onChange={(e) => setNombre(e.target.value)}

                    />

                    <input

                        type="text"

                        placeholder="Usuario"

                        value={usuario}

                        onChange={(e) => setUsuario(e.target.value)}

                    />

                    <input

                        type="email"

                        placeholder="Correo electrónico"

                        value={correo}

                        onChange={(e) => setCorreo(e.target.value)}

                    />

                    <input

                        type="password"

                        placeholder="Contraseña"

                        value={password}

                        onChange={(e) => setPassword(e.target.value)}

                    />

                    <input

                        type="password"

                        placeholder="Confirmar contraseña"

                        value={confirmar}

                        onChange={(e) => setConfirmar(e.target.value)}

                    />

                    <button>

                        Registrarse

                    </button>

                </form>
                {
                mensaje &&
                <p className="mensaje">
                    {mensaje}
                </p>
                }

                <button

                    className="volver"

                    onClick={volver}

                >

                    ← Volver

                </button>

            </div>

        </section>

    );

}

export default FormularioRegistro;