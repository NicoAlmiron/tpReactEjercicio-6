import React from "react";
import { Button, Form } from "react-bootstrap";
import CuadroColor from "./CuadroColor";

const FormularioColores = () => {
  return (
    <section className="border border-dark border-2 rounded-3">
      <h3 className="display-6 pt-3 ps-2">Administrador de colores</h3>
      <article>
        <Form className="d-flex justify-content-end flex-column">
          <Form.Group className="d-flex row py-2">
            <div className="col-4">
              <CuadroColor></CuadroColor>
            </div>
            <div className="col-8">
              <Form.Control
                type="text"
                placeholder="ingrese el color aqui"
                autoFocus
              ></Form.Control>
            </div>
          </Form.Group>
          <div className="text-end pb-3">
            <Button variant="success">Guardar</Button>
          </div>
        </Form>
      </article>
    </section>
  );
};

export default FormularioColores;
