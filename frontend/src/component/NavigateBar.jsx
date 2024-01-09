import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./NavigateBar.css";

const NavigateBar = () => {

  const [clicado, setClicado] = useState(false);
  const navigate = useNavigate();

  const handleClique = () => {
    setClicado(!clicado);
  };

  return (
    <nav className="NavigateBarItems">

      <img className="NavigateBar-logo" src="./logo1.jpeg" alt="Logo" style={{ width: '25%', height: 'auto' }} />

      <div className="menu-icons" onClick={handleClique}>
        <i className={clicado ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul
        className={clicado ? "NavigateBar-menu ativo" : "NavigateBar-menu"}
      >
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.URL}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={() => navigate("/inscrever")}
          >
            Inscrever-se
          </button>
        </li>
        <li>
          <button
            onClick={() => navigate("/entrar")}
          >
            Entrar
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigateBar;
