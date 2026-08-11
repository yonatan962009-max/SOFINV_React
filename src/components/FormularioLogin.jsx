/*
=========================================================
COMPONENTE: FormularioLogin

Descripción:
Permite que un usuario registrado inicie sesión.

Conceptos React utilizados

✔ useState
✔ Props
✔ Formularios controlados
✔ Eventos

=========================================================
*/

import { useState } from "react";
import "./FormularioLogin.css";
import { iniciarSesion as autenticarUsuario } from "../services/api";

function FormularioLogin({ volver, ingresarSistema }) {

    /*
    =====================================
    Estados
    =====================================
    */

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState("");

    /*
    =====================================
    Inicio de sesión
    =====================================
    */

    const manejarLogin = async (e) => {

        e.preventDefault();

        if (correo === "" || password === "") {

            setTipoMensaje("error");

            setMensaje("Debe completar todos los campos.");

            return;
        }

        try {

            const resultado = await autenticarUsuario(
                correo,
                password
            );

            console.log(
                "Usuario autenticado:",
                resultado.usuario
            );

            setTipoMensaje("success");

            setMensaje(
                "✅ Inicio de sesión exitoso. Bienvenido a SOFINV."
            );

            setTimeout(() => {

                ingresarSistema();

            }, 1500);

        } catch (error) {

            console.error(
                "Error al iniciar sesión:",
                error
            );

            setTipoMensaje("error");

            setMensaje(
                "❌ Correo o contraseña incorrectos."
            );
        }
    };

    return (

        <section className="login">

            <div className="login-card">

                <img
                    src="/IMAGES/Logo SOFINV pagina.png"
                    alt="SOFINV"
                />

                <h1>Iniciar sesión</h1>

                <form onSubmit={manejarLogin}>

                    <input
                        type="email"
                        placeholder="Correo electrónico"
                        value={correo}
                        onChange={(e) =>
                            setCorreo(e.target.value)
                        }
                    />

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                    <button type="submit">
                        Ingresar
                    </button>

                </form>

                {
                    mensaje &&
                    <p className={`mensaje ${tipoMensaje}`}>
                        {mensaje}
                    </p>
                }

                <button
                    type="button"
                    className="volver"
                    onClick={volver}
                >
                    ← Volver
                </button>

            </div>

        </section>

    );
}

export default FormularioLogin;