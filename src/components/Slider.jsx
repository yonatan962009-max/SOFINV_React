// Hook para controlar la imagen que se muestra
import { useState, useEffect } from "react";

// Importa los estilos del slider
import "./Slider.css";

// Componente Slider
function Slider() {

  // Arreglo con las imágenes del slider
  const imagenes = [
    "/IMAGES/Slider pagina web.avif",
    "/IMAGES/Slider.2.jpg",
    "/IMAGES/Slider.3.jpg",
    "/IMAGES/Slider.4.jpg"
  ];

  // Estado que almacena la imagen actual
  const [imagenActual, setImagenActual] = useState(0);

  // Estado que controla si el slider está pausado
const [pausado, setPausado] = useState(false);


 // Muestra la siguiente imagen
const siguiente = () => {
  setImagenActual((actual) =>
    (actual + 1) % imagenes.length
  );
};

  // Muestra la imagen anterior
const anterior = () => {
  setImagenActual((actual) =>
    (actual - 1 + imagenes.length) % imagenes.length
  );
};

  // Cambia automáticamente la imagen cada 5 segundos
useEffect(() => {

  if (pausado) return;

  const intervalo = setInterval(() => {

    setImagenActual((actual) =>
      (actual + 1) % imagenes.length
    );

  }, 5000);

  return () => clearInterval(intervalo);

}, [pausado, imagenes.length]);

 return (
    <section
  className="slider"
  onMouseEnter={() => setPausado(true)}
  onMouseLeave={() => setPausado(false)}
  
>
    {/* Indicadores del slider */}
<div className="slider-indicators">

  {imagenes.map((_, index) => (

    <span
      key={index}
      className={
        index === imagenActual
          ? "indicator active"
          : "indicator"
      }
      onClick={() => setImagenActual(index)}
    ></span>

  ))}

</div>

        <button
            className="slider-nav prev"
            onClick={anterior}
        >
            ❮
        </button>

        <img
            className="slider-image active"
            src={imagenes[imagenActual]}
            alt="Slider SOFINV"
        />

        <button
            className="slider-nav next"
            onClick={siguiente}
        >
            ❯
        </button>

    </section>
);
}

export default Slider;