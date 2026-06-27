// Importa los estilos propios del encabezado
import "./Header.css";

// Componente encargado de mostrar el encabezado principal de SOFINV
function Header() {
  return (
    <header className="top-header">
      <div className="logo">
        <img
          src="/IMAGES/Logo SOFINV pagina.png"
          alt="Logo SOFINV"
        />
      </div>
  {/* Título principal del sistema */}
      <div className="header-title">
        <h1>SOFINV</h1>
        <p>Software de gestión de inventarios</p>
      </div>
{/* Iconos decorativos */}
      <div className="top-icons">
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </div>
    </header>
  );
}

export default Header;