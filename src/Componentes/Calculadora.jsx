/* eslint-disable no-eval */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import React, { useState } from "react";
import "./Calculadora.css";
import Pantalla from "./Pantalla";
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
    <div className="cuerpo">
      <Pantalla valor={valor} />
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="+" textoStyle={{ color: "orange" }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="-" textoStyle={{ color: "orange" }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="/" textoStyle={{ color: "orange" }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="*" textoStyle={{ color: "orange" }} style={{ }} />
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="1" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="2" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="3" textoStyle={{ }} style={{ }} />
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="4" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="5" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="6" textoStyle={{ }} style={{ }} />
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="7" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="8" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="9" textoStyle={{ }} style={{ }} />
      </div>
      <div className="row1">
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={actualizarValor} texto="0" textoStyle={{ }} style={{ }} />
        <Button valor={valor} fOp={operacion} sRe={sRes} fValor={cleanValor} style={{ width: "140px" }} texto="C" textoStyle={{ color: "orange" }} />
      </div>
    </div>
  );
}
