import React, { useState, useEffect } from "react";
import "./Imagenes.scss";

const Imagenes = () => {
  const [pic, setPic] = useState([]);
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    fetch(
      "http://silbodeelhierro.es//wp-json/wp/v2/media?per_page=16&search=el hierro"
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
              height={150}
              width={225}
              key={img.id}
              className="img p-0"
              // onClick={() => setModalShow(true)}
            />,
          ];
          // }
        });
        setPic(imagenes);
      });
  }, []);

  useEffect(() => {
    fetch(
      "http://silbodeelhierro.es//wp-json/wp/v2/media?per_page=8&search=el hierro"
    )
      .then((response) => response.json())
      .then((data) => {
        let imagen = [];
        data.map((img) => {
          // if (img.caption.rendered === "<p>el hierro</p>\n") {
          // const height = "9.375em";
          // const width = "14.0625em";
          imagen = [
            ...imagen,
            <img
              t={img.id}
              src={img.link}
              alt={img.title.rendered}
              height={150}
              width={225}
              key={img.id}
              className="img p-0"
              // onClick={() => setModalShow(true)}
            />,
          ];
          // }
        });
        setPhoto(imagen);
      });
  }, []);

  return (
    <div className="casasContainer">
      <h2 id="smaller">La isla de El Hierro</h2>
      <p>
        Descubre las tradicionales casas de roca volcánica con techados de
        madera de sabina.
      </p>
      <div className="container pb-2 pics">{pic}</div>
      <div className="container pb-2 photo">{photo}</div>
    </div>
  );
};

export default Imagenes;
