import React from "react";
import ItemColores from "./ItemColores";

const ListaColores = ({ listaColores }) => {
  return (
    <section className="d-flex justify-content-evenly flex-wrap">
      {listaColores.map((color, i) => (
        <ItemColores key={i} nombreColor={color}></ItemColores>
      ))}
    </section>
  );
};

export default ListaColores;
