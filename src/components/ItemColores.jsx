import React from "react";
import { Button, Card, ListGroup } from "react-bootstrap";

const ItemColores = ({ nombreColor }) => {
  return (
    <>
      <article className="d-flex flex-column border border-dark rounded-3 m-2">
        <div className="text-start">
          <h5 className="text-warning p-2">{nombreColor}</h5>
        </div>
        <div className="d-flex justify-content-center aling-items-center bg-secondary py-2 px-4">
          <Card
            className={nombreColor + "Small"}
            style={{
              width: "6rem",
              height: "6rem",
            }}
          ></Card>
        </div>
        <div className="text-end p-2">
          <Button variant="danger">Borrar</Button>
        </div>
      </article>
    </>
  );
};

export default ItemColores;
