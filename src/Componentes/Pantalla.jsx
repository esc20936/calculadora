/* eslint-disable react/prop-types */
import React from "react";
import "./Pantalla.css";

export default function Pantalla({ valor }) {
  return (
    <div className="Pantalla">
      <p className="valor" id="valor" data-testid="aaa">{valor}</p>
    </div>
  );
}
