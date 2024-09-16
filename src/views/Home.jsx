import CardPizza from '../component/CardPizza.jsx'
import Row from "react-bootstrap/Row";
import { Container } from 'react-bootstrap';
import { useContext, useEffect } from "react";
import CardContext from "../context/CardContext.jsx";

const Home = () => {
  // Datos de todas las pizza para genera las card de c/u (CONTEXT)
  const { pizzas, setPizzas } = useContext(CardContext);
 
  // Conectar y consumir la API
  const url = "http://localhost:5000/api/pizzas/";

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container fluid className=" py-3 mx-2">
        <Row xs={1} md={2} className="g-4">
          {pizzas.map((pizza) => (
            <CardPizza key={pizza.id} pizza={pizza} />
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;