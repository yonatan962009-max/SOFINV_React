/*
=========================================================
COMPONENTE: Footer

Descripción:
Pie de página del sistema SOFINV.

Conceptos React utilizados:

✔ Componente funcional
✔ JSX

=========================================================
*/

import "./Footer.css";

function Footer() {

    return (

        <footer className="footer">

            <div class="footer-container">
        <div class="footer-content">
            <div class="footer-info">
                <h3>Contáctanos</h3>
                <p><strong>📞 Línea de atención:</strong> 5389884</p>
                <p><strong>📱 Celular:</strong> 3205612396</p>
                <p><strong>📍 Dirección:</strong> Calle 24 #30-20</p>
            </div>
        </div>
        <div class="footer-logo">
            <h3>SOFINV</h3>
            <p>Software de gestión de inventarios</p>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Software de gestión de inventarios (SOFINV). Todos los derechos reservados.</p>
        </div>
    </div>
</footer>


    );

}

export default Footer;