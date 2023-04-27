import React from "react";
import "./About.scss";
// import { AccordionButton } from "react-bootstrap";

const About = () => {
  return (
    <div className="aboutContainer">
      <p>
        Asociación sin ánimo de lucro dedicada a preservar y difundir el
        patrimonio cultural inmaterial de la isla de El Hierro. Silbar es uno de
        los múltiples modos de expresión para distintos idiomas en el mundo. Es
        un sistema de comunicación no oficial que se utiliza, principalmente,
        para largas distancias. En sí mismo no se considera una lengua en el
        sentido estricto de la palabra, sino utiliza conversiones de los fonemas
        de un dialecto existente con tonos, longitudes e intensidades
        determinadas. El lenguaje silbado en El Hierro es un fenómeno cultural
        prehispánico. El aborigen herreño silbaba su lengua y, tras la conquista
        y colonización, silbó en español. El lenguaje silbado existió también en
        otras islas (en Tenerife y Gran Canaria), concluimos que los aborígenes
        canarios habían importado esta técnica de comunicación a distancia desde
        la cercana costa de África, de donde procedían, en las regiones
        montañosas del Atlas. Muchos herreños, todos nacidos antes de 1950,
        aprendieron el lenguaje silbado, y lo hicieron desde pequeños. Era
        necesario, pues facilitaba las labores del campo, tanto en el pastoreo
        como en la agricultura. También valía para la transmisión de cualquier
        otro tipo de mensaje, por lo que siempre gozó de gran consideración. Los
        silbadores contaban con ventajas muy útiles, como lo puede ser ahora el
        hecho de disponer de telefonía móvil. Hay un sinfín de anécdotas e
        historias relacionadas con el silbo, en las que éste ayudó a resolver
        comprometidas situaciones.
      </p>

      <p>
        Sigue el enlace para obtener más información sobre el estudio
        lingüístico Silbadores
      </p>
      <a href="https://www.silbadores.com/" target="_blank">
        <button className="button">
          <h3 className="link">Estudio lingüístico Silbadores</h3>
        </button>
      </a>
    </div>
  );
};

export default About;
