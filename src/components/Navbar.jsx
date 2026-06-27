import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Solicitud de productos</a></li>
        <li><a href="#">Inventario</a></li>
        <li><a href="#">Proveedores</a></li>
        <li><a href="#">Contáctenos</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;