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

      <a href="https://www.silbadores.com/" target="_blank">
        <h3 className="link">Estudio lingüístico Silbadores</h3>
      </a>
      <p>
        El silbo herreño fue descubierto en 1891 por el antropólogo francés
        Joseph Lajard, entre un grupo de ocho panaderos herreños avecindados en
        la ciudad de Las Palmas de Gran Canaria. Al menos desde entonces, esta
        lengua silbada no ha dejado de sonar por los riscos y dehesas de El
        Hierro, como medio de enfrentar la distancia y el aislamiento. Te
        invitamos a adentrarte en la intrahistoria del silbo herreño de la mano
        de sus protagonistas.
      </p>
    </div>
  );
};

export default About;
