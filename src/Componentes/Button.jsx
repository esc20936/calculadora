/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import "./Button.css";
import PropTypes from "prop-types";

export default function Button({
  texto, style, textoStyle, valor, fValor, fOp, sRe,
}) {
  const butttonClick = (e) => {
    let valorB = "";
    if (e.target.className === "CuerpoBoton") {
      valorB = e.target.childNodes[0].innerText;
    } else if (e.target.className === "textoBoton") {
      valorB = e.target.innerText;
    }
    if (["+", "-", "*", "/"].includes(valorB)) {
      fOp(valorB);
    } else {
      const data = valor;
      fValor((sRe) ? valorB : data + valorB);
    }
  };

  return (
    <div className="CuerpoBoton" style={style} onClick={((e) => butttonClick(e))}>
      <h1 className="textoBoton" style={textoStyle} onClick={() => null}>{ texto }</h1>
    </div>
  );
}

Button.propTypes = {
  style: PropTypes.object.isRequired,
  textoStyle: PropTypes.object.isRequired,
  valor: PropTypes.string.isRequired,
  fValor: PropTypes.func.isRequired,
  fOp: PropTypes.func.isRequired,
  sRe: PropTypes.bool.isRequired,
  texto: PropTypes.string.isRequired,
};
