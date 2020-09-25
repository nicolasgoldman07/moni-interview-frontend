import React from "react";
import { Link } from "react-router-dom";

import "./nomatch.scss";

const NoMatch = (props) => {
  return (
    <div className="no-match-container">
      <div className="left-404">
        <h1>Oops!</h1>
        <h2>No pudimos encontrar lo que estabas buscando.</h2>
        <h4>
          Codigo de error:{" "}
          <a
            href="https://en.wikipedia.org/wiki/HTTP_404"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>404</strong>
          </a>
        </h4>
        <div className="left-404-links">
          <h4>Aqui tienes links que funcionan de nuestro sitio:</h4>
          <Link to="/home">Comprobar posible prestamo</Link>
          <Link to="/loans-list">Administrar prestamos</Link>
        </div>
      </div>
      <div className="right-404">
        <img
          src={process.env.PUBLIC_URL + "/404Img.svg"}
          alt=""
          className="right-404-img"
        />
      </div>
    </div>
  );
};

export default NoMatch;
