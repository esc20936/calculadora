/* eslint-disable no-eval */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import "./Calculadora.css";
import "./Pantalla.css";
import Button from "./Button";

let stack = ["", null, null];
let sRes = false;

export default function Calculadora() {
  const [valor, setValor] = useState("");

  function actualizarValor(newValue) {
    if (sRes) {
      setValor("");
      setValor(newValue);
      sRes = false;
    } else {
      setValor(newValue);
    }
  }

  function cleanValor(newValue) {
    stack = ["", null, null];
    sRes = false;
    newValue = "";
    setValor(newValue);
  }

  function operacion(Operando) {
    const val = stack[0];
    if (val === "") {
      stack = [parseInt(valor, 10), Operando, null];
      setValor("");
    } else {
      sRes = true;
      const res = eval(stack[0] + stack[1] + parseInt(valor, 10));
      if (res > 999999999) {
        alert("Error: Se reinicio la calculadora");
        cleanValor("");
      } else {
        setValor(res);
        stack = [res, Operando, null];
      }
    }
  }

  return (
    <div className="cuerpo" id="cuerpo">
      <div className="Pantalla" id="Pantalla">
        <p data-testid="valor" className="valor" id="valor">{valor}</p>
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="+" idD="suma" textoStyle={{ color: "orange" }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="-" idD="resta" textoStyle={{ color: "orange" }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="/" idD="div" textoStyle={{ color: "orange" }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="*" idD="mult" textoStyle={{ color: "orange" }} style={{ }} />
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="1" idD="uno" className="uno" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="2" idD="dos" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="3" idD="tres" textoStyle={{ }} style={{ }} />
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="4" idD="cuatro" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="5" idD="cinco" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="6" idD="seis" textoStyle={{ }} style={{ }} />
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="7" idD="siete" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="8" idD="ocho" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="9" idD="nueve" textoStyle={{ }} style={{ }} />
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="0" idD="cero" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={cleanValor} style={{ width: "140px" }} idD="C" texto="C" textoStyle={{ color: "orange" }} />
      </div>
    </div>
  );
}
