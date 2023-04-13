import React, { useState, useEffect } from "react";
import "./Colaboracion.scss";

const Colaboracion = () => {
  const width = "145px";
  const height = "200px";

  const [pic, setPic] = useState([]);

  useEffect(() => {
    fetch(
      "https://silbodeelhierro.com//wp-json/wp/v2/media?per_page=4&search=colab"
    )
      .then((response) => response.json())
      .then((data) => {
        let imagenes = [];
        data.map((img) => {
          imagenes = [
            ...imagenes,
            <img
              t={img.id}
              src={img.link}
              alt={img.title.rendered}
              height={height}
              width={width}
              key={img.id}
              className="image"
              // onClick={() => setModalShow(true)}
            />,
          ];
        });
        setPic(imagenes);
      });
  }, []);
  return (
    <div className="colaboracionContainer">
      <h3>Con la Colaboración de</h3>
      <div className="imagenes">
        {pic}
        {/* <StaticImage
          src="../images/la-frontera_escudonv.png"
          width={width}
          height={height}
          objectFit="contain"
        />
        <StaticImage
          src="../images/El_Pinar_de_El_Hierro.png"
          width={width}
          height={height}
          objectFit="contain"
        />
        <StaticImage
          src="../images/escudo_valverde1.png"
          width={width}
          height={height}
          objectFit="contain"
        />
        <StaticImage
          src="../images/cabildo.png"
          width={width}
          height={height}
          objectFit="contain"
        /> */}
      </div>
    </div>
  );
};

export default Colaboracion;
