import React, { useState, useEffect } from "react";
import "./Imagenes.scss";

const Imagenes = () => {
  const [pic, setPic] = useState([]);

  useEffect(() => {
    fetch("https://silbodeelhierro.com//wp-json/wp/v2/media?per_page=30")
      .then((response) => response.json())
      .then((data) => {
        let imagenes = [];
        data.map((img) => {
          console.log(img);
          if (img.caption.rendered === "<p>el hierro</p>\n") {
            imagenes = [
              ...imagenes,
              <img
                t={img.id}
                src={img.link}
                alt={img.title.rendered}
                height={150}
                key={img.id}
                className="img p-0"
                // onClick={() => setModalShow(true)}
              />,
            ];
          }
        });
        setPic(imagenes);
      });
  }, []);

  return (
    <div>
      <h2>La isla de El Hierro</h2>
      <p>
        Descubre las tradicionales casas de roca volcánica con techados de
        madera de sabina.
      </p>
      <div></div>
    </div>
  );
};

export default Imagenes;