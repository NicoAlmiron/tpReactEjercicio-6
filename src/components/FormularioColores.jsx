import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import ListaColores from "./ListaColores";

const FormularioColores = () => {
  return (
    <Container>
      <section className="border border-primary border-2 rounded-3 mb-4 p-3">
        <h3 className="display-6 pt-3 ps-2 text-warning">
          Administrador de colores
        </h3>
        <article>
          <Form className="d-flex justify-content-end flex-column">
            <Form.Group className="d-flex row py-2 align-items-center border border-secondary rounded-3 bg-secondary">
              <div className="col-4 d-flex justify-content-center aling-items-center">
                <Card style={{ width: "8rem", height: "8rem" }}></Card>
              </div>
              <div className="col-7">
                <Form.Control
                  type="text"
                  placeholder="ingrese el color aqui"
                  autoFocus
                ></Form.Control>
              </div>
            </Form.Group>
            <div className="text-end pb-4 pt-2">
              <Button variant="info">Guardar</Button>
            </div>
          </Form>
        </article>
      </section>
      <ListaColores></ListaColores>
    </Container>
  );
};

export default FormularioColores;