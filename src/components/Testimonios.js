import React, { useState, useEffect } from "react";
import "./Testimonios.scss";

const Testimonios = () => {
  const [bgimage, setBgimage] = useState([]);

  useEffect(() => {
    fetch(
      "http://silbodeelhierro.com//wp-json/wp/v2/media?per_page=1&search=bg"
    )
      .then((response) => response.json())
      .then((data) => {
        let background = [];
        data.foreach((img) => {
          background = [
            <img
              t={img.id}
              src={img.link}
              alt={img.title.rendered}
              height={150}
              width={100}
              key={img.id}
            />,
          ];
        });
        setBgimage(background);
      });
  }, []);

  const myStyle = {
    backgroundImage: { bgimage },
    width: "100vw",
    margin: "auto",
    height: "300px",
    backgroundSize: "cover",
  };

  return <div style={myStyle}></div>;
};

export default Testimonios;
