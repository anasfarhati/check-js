import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import { Container, Navbar, Nav, Card, } from 'react-bootstrap';

function App() {
  return (
    <>
    <div className="App">
       <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">My Bootstrap App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <h1> My App</h1>
        <Card>
          <Card.Body>
            <Card.Title>Card 1</Card.Title>
            <Card.Text>This is the content of Card 1.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card 2</Card.Title>
            <Card.Text>This is the content of Card 2.</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>This is the content of Card 3.</Card.Text>
          </Card.Body>
        </Card>
    </div>
    </>
    
  );
}

export default App;
