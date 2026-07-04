/*
=========================================================
COMPONENTE: Inicio

Pantalla principal antes de ingresar al sistema.
Permite elegir entre iniciar sesión o registrarse.

=========================================================
*/

import "./Inicio.css";

function Inicio({ onLogin, onRegistro }) {

  return (

    <section className="inicio">

      <div className="inicio-card">

        <img
          src="/IMAGES/Logo SOFINV pagina.png"
          alt="SOFINV"
        />

        <h1>Bienvenido a SOFINV</h1>

        <p>

          Sistema web para la administración del inventario
          del Colegio Bilingüe La Enseñanza.

        </p>

        <div className="inicio-botones">

          <button
            onClick={onLogin}
          >
            Iniciar sesión
          </button>

          <button
            onClick={onRegistro}
          >
            Registrarse
          </button>

        </div>

      </div>

    </section>

  );

}

export default Inicio;

