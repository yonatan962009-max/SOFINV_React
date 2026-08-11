import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

    return (

        <nav className="navbar">

            <ul className="menu">

                <li>
                    <Link to="/">Inicio</Link>
                </li>

                <li>
                    <Link to="/nosotros">
                        Nosotros
                    </Link>
                </li>

                <li>
                    <Link to="/solicitud-productos">
                        Solicitud de productos
                    </Link>
                </li>

                <li>
                    <Link to="/inventario">
                        Inventario
                    </Link>
                </li>

                <li>
                    <Link to="/productos">
                        Productos
                    </Link>
                </li>

                <li>
                    <Link to="/proveedores">
                        Proveedores
                    </Link>
                </li>

                <li>
                    <Link to="/contacto">
                        Contáctenos
                    </Link>
                </li>

            </ul>

        </nav>

    );
}

export default Navbar;