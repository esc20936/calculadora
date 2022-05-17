import React from "react";
import "./Pantalla.css";

export default function Pantalla({ valor }) {
  return (
    <div className="Pantalla">
      <h1 className="valor">{valor}</h1>
    </div>
  );
}
