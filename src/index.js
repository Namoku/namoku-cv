import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Logo from "../assets/LogoUDC.png";
import LogoG from "../assets/logoGplay.png";

import App from "./App";
const handleClick = () => {
  window.location.href =
    "https://play.google.com/store/apps/details?id=com.guardaditostr";
};
function Boton() {
  return (
    <div
      className="Boton"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={Logo} alt="logo" width="30%" />
      <img
        src={LogoG}
        alt="logo"
        width="30%"
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

function Integrantes() {
  return (
    <section>
      Integrantes:
      <ul>
        <li>Deniz Navarro Luis Ignacio</li>
        <li>Miguel Gomez Joana Elizabeth</li>
        <li>Wuitron Mendoza Cristopher Samuel</li>
        <li>San Miguel Lopez Fernando</li>
      </ul>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <Boton />
    <Integrantes />
  </StrictMode>,
  rootElement
);
