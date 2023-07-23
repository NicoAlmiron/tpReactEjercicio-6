import { Container, Form } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FormularioColores from "./components/FormularioColores";

function App() {
  return (
    <>
      <Container className="pt-5">
        <FormularioColores></FormularioColores>
      </Container>
      <footer className="text-center bg-dark text-light py-4 ">
        <p>Todos los derechos reservados &copy; 2023 </p>
      </footer>
    </>
  );
}

export default App;
