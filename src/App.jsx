import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import CardCategoria from "./components/CardCategoria";
import DetalleCategoria from "./components/DetalleCategoria";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Contacto from "./components/Contacto";
import Mapa from "./components/Mapa";
import Footer from "./components/Footer";
import Inicio from "./components/Inicio";
import FormularioRegistro from "./components/FormularioRegistro";
import FormularioLogin from "./components/FormularioLogin";
import Header from "./components/Header";
import Productos from "./components/Productos";
import AgregarProducto from "./components/AgregarProducto";

import "./App.css";


/*
=========================================================
COMPONENTE: SistemaSOFINV

Descripción:
Contenido principal del sistema SOFINV después
de iniciar sesión.
=========================================================
*/

function SistemaSOFINV() {

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);


  /*
  =========================================================
  Información de las categorías
  =========================================================
  */

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
              onClick={() =>
                setCategoriaSeleccionada(categorias[0])
              }
            />

            <CardCategoria
              nombre={categorias[1].nombre}
              imagen={categorias[1].imagen}
              descripcion={categorias[1].descripcion}
              onClick={() =>
                setCategoriaSeleccionada(categorias[1])
              }
            />

          </div>


          <div className="cards-row">

            <CardCategoria
              nombre={categorias[2].nombre}
              imagen={categorias[2].imagen}
              descripcion={categorias[2].descripcion}
              onClick={() =>
                setCategoriaSeleccionada(categorias[2])
              }
            />

            <CardCategoria
              nombre={categorias[3].nombre}
              imagen={categorias[3].imagen}
              descripcion={categorias[3].descripcion}
              onClick={() =>
                setCategoriaSeleccionada(categorias[3])
              }
            />

          </div>

        </div>

      </div>


      {/* Modal de categoría seleccionada */}

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


/*
=========================================================
COMPONENTE: App

Descripción:
Gestiona las rutas principales de SOFINV mediante
React Router.
=========================================================
*/

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Página principal */}

        <Route
          path="/"
          element={<InicioRuta />}
        />


        {/* Registro */}

        <Route
          path="/registro"
          element={<RegistroRuta />}
        />


        {/* Inicio de sesión */}

        <Route
          path="/login"
          element={<LoginRuta />}
        />


        {/* Sistema SOFINV */}

        <Route
          path="/sistema"
          element={<SistemaSOFINV />}
        />
        {/* Módulo de productos */}

        <Route
        path="/productos"
        element={<ProductosRuta />}
        />

        {/* Registrar Producto */}
        <Route
        path="/agregar-producto"
        element={<AgregarProductoRuta />}
        />

      </Routes>

    </BrowserRouter>

  );

}


/*
=========================================================
RUTA: Inicio
=========================================================
*/

function InicioRuta() {

  const navigate = useNavigate();

  return (

    <Inicio

      onLogin={() => navigate("/login")}

      onRegistro={() => navigate("/registro")}

    />

  );

}


/*
=========================================================
RUTA: Registro
=========================================================
*/

function RegistroRuta() {

  const navigate = useNavigate();

  return (

    <FormularioRegistro

      volver={() => navigate("/")}

    />

  );

}


/*
=========================================================
RUTA: Inicio de sesión
=========================================================
*/

function LoginRuta() {

  const navigate = useNavigate();

  return (

    <FormularioLogin

      volver={() => navigate("/")}

      ingresarSistema={() => navigate("/sistema")}

    />

  );

}

/*
=========================================================
RUTA: Agregar producto
=========================================================
*/

function AgregarProductoRuta() {

    return (
        <>
            <Navbar />

            <AgregarProducto />
        </>
    );

}

export default App;

/*
=========================================================
RUTA: Productos
=========================================================
*/

function ProductosRuta() {

    return (
        <>
            <Navbar />

            <Productos />
        </>
    );

}