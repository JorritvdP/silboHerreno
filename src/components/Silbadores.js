import React, { useState, useEffect } from "react";
// import SilbadorModal from "./SilbadorModal";
import "./Silbadores.scss";
import Modal from "./Modal";

const Silbadores = () => {
  const [pic, setPic] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState();

  const handleOpenModal = (event) => {
    // console.log(event.target);
    // let try1 = ;
    setIsModalOpen(true);
    let try1 = (
      <img
        t={event.target.id}
        src={event.target.src}
        alt={event.target.alt}
        height={450}
        width={300}
        key={event.target.t}
      />
    );
    setModalContent(try1);
    // console.log(try1);
  };

  const handleCloseModal = () => {
    setModalContent([]);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch(
      "https://silbodeelhierro.es//wp-json/wp/v2/media?search=silbador&per_page=30"
    )
      .then((response) => response.json())
      .then((data) => {
        let portraits = [];
        data.map((img) => {
          portraits = [
            ...portraits,
            <img
              t={img.id}
              src={img.media_details.sizes.medium.source_url}
              alt={img.title.rendered}
              height={150}
              width={100}
              key={img.id}
              className="img p-0"
              onClick={handleOpenModal}
            />,
          ];
        });
        setPic(portraits);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://silbodeelhierro.es//wp-json/wp/v2/media?search=silbador&per_page=10"
    )
      .then((response) => response.json())
      .then((data) => {
        let photos = [];
        data.map((img) => {
          photos = [
            ...photos,
            <img
              t={img.id}
              src={img.media_details.sizes.medium.source_url}
              alt={img.title.rendered}
              height={150}
              width={100}
              key={img.id}
              className="img p-0 photos"
            />,
          ];
        });
        setPhoto(photos);
      });
  }, []);

  // TODO: Modal for specific ID

  return (
    <div className="silbadoresContainer">
      <h2 id="smaller">Silbadores actuales</h2>
      <p>
        Galería homenaje a los silbadores herreños que mantienen viva esta bella
        tradición
      </p>
      <div className="container pb-2 pics">{pic}</div>
      <div className="container pb-2 photo">{photo}</div>
      <div>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          content={modalContent}
        />
      </div>
    </div>
  );
};

export default Silbadores;
