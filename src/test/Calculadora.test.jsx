/* eslint-disable no-undef */
/**
* @jest-enviroment jsdom
*/

import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Calculadora from "../Componentes/Calculadora";


describe("Testing component Calculadora", () => {
  // test("El componente debe mostrarse bien", () => {
  //   const wrapper = mount(<Calculadora />);
  //   expect(wrapper).toMatchSnapshot();
  // });

  // test("Test Valor inicial", () => {
  //   const wrapper = mount(<Calculadora />);
  //   const screen = wrapper.find("span").text();
  //   expect(screen).toBe("");
  // });

  // test("Test Suma", () => {
  //   const wrapper = mount(<Calculadora />);
  //   wrapper.find("#uno").simulate("click");
  //   const screen = wrapper.find("span").text();
  //   expect(screen).toBe("1");
  // });

  test("Test Resta", () => {
    render(<Calculadora />);
    const num = screen.getByTestId("uno");
    console.log(num);
    fireEvent.click(num);
    const pantalla = screen.getByTestId("valor");
    expect(pantalla.textContent).toBe("1");
  });
});
