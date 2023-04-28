import React, { useState, useEffect } from "react";
import "./Colaboracion.scss";

const Colaboracion = () => {
  const width = "145px";
  const height = "200px";

  const [pic, setPic] = useState([]);

  useEffect(() => {
    fetch(
      "http://silbodeelhierro.es//wp-json/wp/v2/media?per_page=4&search=colab"
    )
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
              height={height}
              width={width}
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
