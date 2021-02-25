import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Nav, Navbar, NavDropdown, Button, Jumbotron } from 'react-bootstrap';
import data from './data.js';

function App() {

  let [shoes, shoes변경] = useState(data);

  function fn_changeShoe() {
    let array = [...shoes];
    shoes변경(array);
  }

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">TalentShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Jumbotron className="background">
        <h1>당신의 재능을 삽니다!</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>

      <Container>
        <Row>
          {/* <Col>
            <img alt="없어" src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].content} &amp; {shoes[0].price}</p>
          </Col>
          <Col>
            <img alt="없어" src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 &amp; 가격</p>
          </Col>
          <Col>
            <img alt="없어" src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
            <h4>상품명</h4>
            <p>상품설명 &amp; 가격</p>
          </Col> */}
          {
            shoes.map((key) => {
              return (
                <Info shoes={key} />
              )
            })
          }
        </Row>
      </Container>
      <div onClick={() => {fn_changeShoe()}} style={{display:'none'}}>asd</div>
    </div>
  );
}

function Info(props) {
  return (
    <Col>
      <img alt="없어" src={"https://codingapple1.github.io/shop/shoes" + (props.shoes.id + 1) + ".jpg"} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} &amp; {props.shoes.price}</p>
    </Col>
  )
}

export default App;
