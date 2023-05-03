import React, { useState, useEffect } from "react";
import "./Colaboracion.scss";

const Colaboracion = () => {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    fetch("https://silbodeelhierro.es/wp-json/wp/v2/media?search=colab")
      .then((response) => response.json())
      .then((data) => {
        let imagenes = [];
        data.map((img) => {
          imagenes = [
            ...imagenes,
            <img
              t={img.id}
              src={img.media_details.sizes.medium.source_url}
              alt={img.title.rendered}
              height={145}
              width={200}
              key={img.id}
              className="image"
            />,
          ];
        });
        setPic(imagenes);
      });
  }, []);

  return (
    <div className="colaboracionContainer">
      <h3 id="title">Con la Colaboración de</h3>
      <div className="imagenes">{pic}</div>
    </div>
  );
};

export default Colaboracion;
