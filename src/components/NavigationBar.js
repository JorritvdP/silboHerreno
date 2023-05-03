import React, { useState, useEffect } from "react";
import "./NavigationBar.scss";

const Navigationbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState();

  useEffect(() => {
    fetch("https://silbodeelhierro.es/wp-json/wp/v2/media?search=navbar")
      .then((response) => response.json())
      .then((data) => {
        let logo = [];
        data.map((img) => {
          logo = (
            <img
              t={img.id}
              src={img.guid.rendered}
              alt={img.title.rendered}
              height={50}
              key={img.id}
              className="img p-0"
            />
          );
        });
        setLogo(logo);
      });
  }, []);

  useEffect(() => {
    // console.log(logo);
  }, [logo]);

  const handleScroll = () => {
    if (props.page === "quienes") {
      setScrolled(true);
      // window.scrollTop(0, 0);
    } else {
      window.scrollY >= 250 ? setScrolled(true) : setScrolled(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className={scrolled ? "navContainer" : "scroll"}>
      <div className="image">
        <a href="/">{logo}</a>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/" id="mobile">
              Home
            </a>
          </li>
          <li>
            <a href="/quienessomos">Quiénes Somos</a>
          </li>
          <li>
            <a href="/" id="hide">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigationbar;
