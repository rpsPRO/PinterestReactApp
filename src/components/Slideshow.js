import "./Slideshow.css";
import React from "react";
import { fontSize, fontStyle } from "@mui/system";

const mensaje1 = {
    color: "#C28B00",
    mensaje: "tu look ideal",
    rutaImagen: "/imagenes_pantalla_inicio/moda.jpg"
}

const mensaje2 = {
    color: "#618C7B",
    mensaje: "la afición que te apasiona",
    rutaImagen: "/imagenes_pantalla_inicio/fotografia.jpg"
}

const mensaje3 = {
    color: "#0076D3",
    mensaje: "nuevas ideas",
    rutaImagen: "/imagenes_pantalla_inicio/miguel_unamuno.jpg"
}

const mensajesLlamativos = [mensaje1, mensaje2, mensaje3];
const delay = 3500;

export default function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === mensajesLlamativos.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div className="repeatedMessage">Encuentra</div>
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {mensajesLlamativos.map((mensaje, index) => (
          <div
            className="slide"
            key={index}
            style={{
              fontStyle: "BlinkMacSystemFont",
              fontSize: "4em",
              fontWeight: "bold",
              color: `${mensaje.color}`
            }}
          >
            <p>{mensaje.mensaje}</p>
            <img src={mensaje.rutaImagen}></img>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {mensajesLlamativos.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
