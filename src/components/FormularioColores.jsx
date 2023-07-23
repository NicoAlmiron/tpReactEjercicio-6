import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  const colores = JSON.parse(localStorage.getItem("colores")) || [];
  const cuadrados = JSON.parse(localStorage.getItem("cuadrados")) || [];

  const coloresCuadro = [
    "azul",
    "gris",
    "celeste",
    "naranja",
    "rojo",
    "negro",
    "verde",
    "blanco",
  ];
  const coloresCuadroCard = [
    "azulSmall",
    "grisSmall",
    "celesteSmall",
    "naranjaSmall",
    "rojoSmall",
    "negroSmall",
    "verdeSmall",
    "blancoSmall",
  ];

  const [color, setColor] = useState("");
  const [listaColores, setListaColores] = useState(colores);
  const [colorCuadro, setColorCuadro] = useState(cuadrados);

  const handleSubmit = (e) => {
    e.preventDefault();
    setListaColores([...listaColores, color]);
    setColor("");
    colores.push(color);
    setColorCuadro([
      ...colorCuadro,
      coloresCuadro.find((itemColor) => itemColor === color),
    ]);
    cuadrados.push(coloresCuadro.find((itemColor) => itemColor === color));
    localStorage.setItem("colores", JSON.stringify(colores));
    localStorage.setItem("cuadrados", JSON.stringify(cuadrados));
  };

  const borrarColor = (index) => {
    let listaColoresFiltrada = listaColores.filter(
      (itemColores, i) => index !== i
    );
    setListaColores(listaColoresFiltrada);
    colores.splice(index, 1);
    localStorage.setItem("colores", JSON.stringify(colores));
    cuadrados.splice(index, 1);
    localStorage.setItem("cuadraros", JSON.stringify(cuadrados));
  };

  return (
    <Container>
      <section className="border border-primary border-2 rounded-3 mb-4 p-3">
        <article>
          <h3 className="display-6 pt-3 ps-2 text-warning">
            Administrador de colores
          </h3>
          <Form
            onSubmit={handleSubmit}
            className="d-flex justify-content-end flex-column"
          >
            <Form.Group
              className="d-flex row py-2 align-items-center border border-secondary rounded-3 bg-secondary"
              controlId="color"
            >
              <div className="col-4 d-flex justify-content-center aling-items-center">
                <Card
                  className={coloresCuadro.filter(
                    (itemColor) => itemColor === color
                  )}
                  style={{ width: "8rem", height: "8rem" }}
                ></Card>
              </div>
              <div className="col-7">
                <Form.Control
                  type="text"
                  placeholder="ingrese el color aqui"
                  autoFocus
                  value={color}
                  onChange={(e) => setColor(e.target.value.toLowerCase())}
                ></Form.Control>
              </div>
            </Form.Group>
            <div className="text-end pb-4 pt-2">
              <Button variant="info" type="submit">
                Guardar
              </Button>
            </div>
          </Form>
        </article>
      </section>
      <ListaColores
        listaColores={listaColores}
        borrarColor={borrarColor}
      ></ListaColores>
    </Container>
  );
};

export default FormularioColores;
