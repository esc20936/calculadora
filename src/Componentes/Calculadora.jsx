/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import "./Calculadora.css";
import Pantalla from "./Pantalla";
import Button from "./Button";

export default function Calculadora() {
  const [valor, setValor] = useState("");

  function actualizarValor(newValue) {
    setValor(newValue);
  }


  function cleanValor(newValue) {
    setValor("");
  }
  return (
    <div className="cuerpo">
      <Pantalla valor={valor} />
      <div className="row1">
        <Button valor={valor} fValor={actualizarValor} texto="+" textoStyle={{ color: "orange" }} />
        <Button valor={valor} fValor={actualizarValor} texto="-" textoStyle={{ color: "orange" }} />
        <Button valor={valor} fValor={actualizarValor} texto="/" textoStyle={{ color: "orange" }} />
        <Button valor={valor} fValor={actualizarValor} texto="*" textoStyle={{ color: "orange" }} />
      </div>
      <div className="row1">
        <Button valor={valor} fValor={actualizarValor} texto="1" />
        <Button valor={valor} fValor={actualizarValor} texto="2" />
        <Button valor={valor} fValor={actualizarValor} texto="3" />
      </div>
      <div className="row1">
        <Button valor={valor} fValor={actualizarValor} texto="4" />
        <Button valor={valor} fValor={actualizarValor} texto="5" />
        <Button valor={valor} fValor={actualizarValor} texto="6" />
      </div>
      <div className="row1">
        <Button valor={valor} fValor={actualizarValor} texto="7" />
        <Button valor={valor} fValor={actualizarValor} texto="8" />
        <Button valor={valor} fValor={actualizarValor} texto="9" />
      </div>
      <div className="row1">
        <Button valor={valor} fValor={actualizarValor} texto="0" />
        <Button valor={valor} fValor={actualizarValor} texto="=" textoStyle={{ color: "orange" }} />
        <Button valor={valor} fValor={cleanValor} texto="C" textoStyle={{ color: "orange" }} />
      </div>
    </div>
  );
}
