import { useState } from "react";
import CardCategoria from "./components/CardCategoria";
import DetalleCategoria from "./components/DetalleCategoria";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import "./App.css";
import Contacto from "./components/Contacto";
import Mapa from "./components/Mapa";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio"; 
import FormularioRegistro from "./components/FormularioRegistro";
import FormularioLogin from "./components/FormularioLogin";

function App() {

  // Estado que almacena la categoría seleccionada
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  /*=========================================================
  Estado que controla qué pantalla se muestra.
  inicio
  login
  registro
  sistema
  =========================================================
  */
 const [pantalla, setPantalla] = useState("inicio");



  // Información de las categorías
  const categorias = [
    {
      nombre: "Aseo",
      imagen: "/IMAGES/Productos de aseo pagina.jpg",
      descripcion:
        "Detergentes, desinfectantes y suministros de limpieza profesional.",
      detalle: [
        "Jabón líquido",
        "Desengrasantes",
        "Limpiavidrios",
        "Ambientador"
      ]
    },
    {
      nombre: "Ferretería",
      imagen: "/IMAGES/Productos de ferreteria pagina.jpg",
      descripcion:
        "Herramientas, tornillería y materiales de mantenimiento.",
      detalle: [
        "Martillo",
        "Destornillador",
        "Tubos PVC",
        "Pintura"
      ]
    },
    {
      nombre: "Papelería",
      imagen: "/IMAGES/Productos de papeleria pagina.jpg",
      descripcion:
        "Útiles escolares y suministros de oficina.",
      detalle: [
        "Esferos",
        "Cartulina",
        "Marcadores",
        "Tijeras"
      ]
    },
    {
      nombre: "Bisutería",
      imagen: "/IMAGES/Bisuteria.jpg",
      descripcion:
        "Elementos decorativos y accesorios.",
      detalle: [
        "Hilos",
        "Medallas",
        "Agujas",
        "Hojales"
      ]
    }
  ];
  /*
=========================================================
Si el usuario aún no ha iniciado sesión,
se muestra la pantalla de bienvenida.
=========================================================
*/

if (pantalla === "inicio") {

  return (

    <Inicio
      onLogin={() => setPantalla("login")}
      onRegistro={() => setPantalla("registro")}
    />

  );

}

/*
=========================================================
Muestra el formulario de registro.
=========================================================
*/

if (pantalla === "registro") {

  return (

    <FormularioRegistro

      volver={() => setPantalla("inicio")}

    />

  );

}

/*
=========================================================
Muestra el formulario de inicio de sesión.
=========================================================
*/

if (pantalla === "login") {

  return (

    <FormularioLogin

      volver={() => setPantalla("inicio")}

      ingresarSistema={() => setPantalla("sistema")}

    />

  );

}

  return (
    <>
      <Header />

      <Navbar />

      <Slider />

      <div className="contenedor">

        <div className="titulo">
          <h2>Descubre nuestros productos</h2>

          <p>
            En nuestro almacén encontrarás una amplia variedad de productos
            diseñados para apoyar las actividades educativas y el mantenimiento.
            Ofrecemos soluciones prácticas y de calidad adaptadas a las
            necesidades diarias de la institución.
          </p>
        </div>

        <div className="cards">

          <div className="cards-row">

            <CardCategoria
              nombre={categorias[0].nombre}
              imagen={categorias[0].imagen}
              descripcion={categorias[0].descripcion}
              onClick={() => setCategoriaSeleccionada(categorias[0])}
            />

            <CardCategoria
              nombre={categorias[1].nombre}
              imagen={categorias[1].imagen}
              descripcion={categorias[1].descripcion}
              onClick={() => setCategoriaSeleccionada(categorias[1])}
            />

          </div>

          <div className="cards-row">

            <CardCategoria
              nombre={categorias[2].nombre}
              imagen={categorias[2].imagen}
              descripcion={categorias[2].descripcion}
              onClick={() => setCategoriaSeleccionada(categorias[2])}
            />

            <CardCategoria
              nombre={categorias[3].nombre}
              imagen={categorias[3].imagen}
              descripcion={categorias[3].descripcion}
              onClick={() => setCategoriaSeleccionada(categorias[3])}
            />

          </div>

        </div>

      </div>

      {/* Modal que muestra la categoría seleccionada */}
      {categoriaSeleccionada && (
        <DetalleCategoria
          categoria={categoriaSeleccionada}
          onClose={() => setCategoriaSeleccionada(null)}
        />
    
      )}

      <div className="contacto-mapa">

    <Contacto />

    <Mapa />

</div>
<Footer />

    </>
  );
}

export default App;