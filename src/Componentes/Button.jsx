import React from "react";
import "./Button.css";

export default function Button({
  texto, style, textoStyle, valor, fValor,
}) {
  const butttonClick = (e) => {
    let valorB = "";
    if (e.target.className === "CuerpoBoton") {
      valorB = e.target.childNodes[0].innerText;
    } else if (e.target.className === "textoBoton") {
      valorB = e.target.innerText;
    }
    const data = valor;
    fValor(data + valorB);
  };

  return (
    <div className="CuerpoBoton" style={style} onClick={((e) => butttonClick(e))}>
      <h1 className="textoBoton" style={textoStyle} onClick={() => { null; }}>{ texto }</h1>
    </div>
  );
}
