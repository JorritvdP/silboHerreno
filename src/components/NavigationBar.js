import React, { useState, useEffect } from "react";
import "./NavigationBar.scss";

const Navigationbar = (props) => {
  const [scrolled, setScrolled] = useState(false);
  const [logo, setLogo] = useState();

  useEffect(() => {
    fetch("http://silbodeelhierro.es//wp-json/wp/v2/media?search=navbar")
      .then((response) => response.json())
      .then((data) => {
        let logo = [];
        data.map((img) => {
          logo = (
            <img
              t={img.id}
              src={img.link}
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
        <a href="/">
          {/* <img
            src="../../public/silbo_typo_logo.png"
            alt="silboherrenologo"
            height={20}
          /> */}
          {logo}
        </a>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/quienessomos">Quiénes Somos</a>
          </li>
          <li>
            <a href="/" className="hide">
              Contacto
            </a>
          </li>
          {/* <li class="nav-item dropdown">
            <img class="avatar dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" src="https://kitt.lewagon.com/placeholder/users/ssaunier" />
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" data-turbo-method="delete" href="#">Log out</a>
            </div>
          </li>
          <!--li class="nav-item"-->
          <!--/li--> */}
        </ul>
      </div>
    </div>
  );
};

export default Navigationbar;
