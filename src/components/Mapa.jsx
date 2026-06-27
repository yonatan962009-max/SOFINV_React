/*
=========================================================
COMPONENTE: Mapa


Descripción:
Muestra la ubicación de la institución mediante
Google Maps.

Conceptos React utilizados:

✔ Componente funcional
✔ JSX

=========================================================
*/

import "./Mapa.css";

function Mapa() {

    return (

        <section className="mapa">

            <h2>📍 Ubicación</h2>

            <iframe

                title="Ubicación SOFINV"

                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8280491259474!2d-74.083!3d4.60971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zNMKwMzYnMzQuOSJOIDc0wrAwNScwMC4wIlc!5e0!3m2!1ses!2sco!4v0000000000000" 

                loading="lazy"

                allowFullScreen

            >

            </iframe>

        </section>

    );

}

export default Mapa;