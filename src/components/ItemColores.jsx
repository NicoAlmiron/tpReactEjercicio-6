import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemColores = () => {
  return (
    <>
      <article className="d-flex flex-column border border-dark rounded-3 my-2">
        <div className="text-start">
          <h5 className="text-warning p-2">Color</h5>
        </div>
        <div className="d-flex justify-content-center aling-items-center bg-secondary py-2 px-4">
          <Card style={{ width: "6rem", height: "6rem" }}></Card>
        </div>
        <div className="text-end p-2">
          <Button variant="danger">Borrar</Button>
        </div>
      </article>
    </>
  );
};

export default ItemColores;
