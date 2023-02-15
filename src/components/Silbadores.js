import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SilbadorModal from "./SilbadorModal";
import "./Silbadores.scss";

// console.log(Portraits);
// const width = "130px";

// const portraits = [
//   <StaticImage
//     src="../images/Vitoriano-Fidel-Padron-Gonzalez.jpg"
//     alt="Vitoriano-Fidel-Padron-Gonzalez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Vidal-Acosta-Gutierrez.jpg"
//     alt="Vidal-Acosta-Gutierrez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Adela-Padron-Perez.jpg"
//     alt="Adela-Padron-Perez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Andres-Gonzalez-Padron.jpg"
//     alt="Andres-Gonzalez-Padron"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Antonio-Morales-Morales-2.jpg"
//     alt="Antonio-Morales-Morales"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Aurelio-Cabrera-Acosta-2.jpg"
//     alt="Aurelio-Cabrera-Acosta"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Benito-Armas-Hernandez-2.jpg"
//     alt="Benito-Armas-Hernandez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Carlos-Alberto-Gutierrez-Sanchez-2.jpg"
//     alt="Carlos-Alberto-Gutierrez-Sanchez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Emiliano-Fernandez-Armas.jpg"
//     alt="Emiliano-Fernandez-Armas"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Esteban-Padron-Quintero.jpg"
//     alt="Esteban-Padron-Quintero"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Felix-Zamora-Gutierrez.jpg"
//     alt="Felix-Zamora-Gutierrez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Fernando-Padron-Casanas-2.jpg"
//     alt="Fernando-Padron-Casanas"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Francisco-Armas-Gonzalez.jpg"
//     alt="Francisco-Armas-Gonzalez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Francisco-Quintero-Morales.jpg"
//     alt="Francisco-Quintero-Morales"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/IMG-20210814-WA0038-768x1024.jpg"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Jose-Luis-Acosta-Castaneda-2.jpg"
//     alt="Jose-Luis-Acosta-Castaneda"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Juan-Francisco-Quintero-Padron-2-683x1024.jpg"
//     alt="Juan-Francisco-Quintero-Padron"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Juan-Francisco-Quintero-Perez.jpg"
//     alt="Juan-Francisco-Quintero-Perez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Lalo-Fonte-Armas-2.jpg"
//     alt="Lalo-Fonte-Armas"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Manuel-Padron-Quintero-2.jpg"
//     alt="Manuel-Padron-Quintero"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Maria-Reyes-Gutierrez-Quintero.jpg"
//     alt="Maria-Reyes-Gutierrez-Quintero"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Pablo-Martin-Zamora-2.jpg"
//     alt="Pablo-Martin-Zamora"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Pedro-Machin-Padron-2.jpg"
//     alt="Pedro-Machin-Padron"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Rafael-Castaneda-Rodriguez-2.jpg"
//     alt="Rafael-Castaneda-Rodriguez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Ramon-Angel-Mendez-Padron-2.jpg"
//     alt="Ramon-Angel-Mendez-Padron"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Remedios-Morales-Gonzalez-2.jpg"
//     alt="Remedios-Morales-Gonzalez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Rosario-Morales-Gonzalez-2.jpg"
//     alt="Rosario-Morales-Gonzalez"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Trinidad-Padron-Peraza.jpg"
//     alt="Trinidad-Padron-Peraza"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Epifanio-Zamora-Machin-2.jpg"
//     alt="Epifanio-Zamora-Machin"
//     width={width}
//   />,
//   <StaticImage
//     src="../images/Emiliano-Garcia-Garcia-2.jpg"
//     alt="Emiliano-Garcia-Garcia"
//     width={width}
//   />,
// ];

const Silbadores = () => {
  const [pic, setPic] = useState([]);
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetch("https://silbodeelhierro.com//wp-json/wp/v2/media")
      .then((response) => response.json())
      .then((data) => {
        let portraits = [];
        data.map((img) => {
          if (img.caption.rendered === "<p>silbador</p>\n") {
            portraits = [...portraits, img];
          }
        });
        setPic(portraits);
      });
  }, []);

  useEffect(() => {
    console.log(pic);
  }, [pic]);

  const handleClick = (event) => {};

  // useEffect(() => {
  //   console.log(pic);
  // }, [pic]);

  return (
    <div className="silbadoresContainer">
      <h2>Silbadores actuales</h2>
      <p>
        Galería homenaje a los silbadores herreños que mantienen viva esta bella
        tradición
      </p>

      {/* {pic.map((img) => {
        return <SilbadorModal props={img} />;
      })} */}
      <Container fluid>
        <Row>
          {pic.map((img) => {
            return (
              <Col lg={true} className="">
                <img
                  src={img.link}
                  alt={img.title.rendered}
                  height={150}
                  key={img.id}
                  className="img p-0"
                  onClick={() => setModalShow(true)}
                />
                <SilbadorModal
                  props={img}
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Silbadores;
