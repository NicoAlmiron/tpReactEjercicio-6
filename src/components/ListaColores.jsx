import React from "react";
import ItemColores from "./ItemColores";
import { ListGroup } from "react-bootstrap";

const ListaColores = ({ listaColores, borrarColor }) => {
  return (
    <ListGroup.Item>
      <section className="d-flex justify-content-evenly flex-wrap">
        {listaColores.map((color, i) => (
          <ItemColores
            key={i}
            nombreColor={color}
            borrarColor={borrarColor}
            index={i}
          ></ItemColores>
        ))}
      </section>
    </ListGroup.Item>
  );
};

export default ListaColores;
