import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../styles/Navbar.css';

const UserNavbar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container className="left-aligned-container">
        <Navbar.Brand href="/home">
          <img
            alt=""
            src="/icon.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Delegator
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/features">Features</Nav.Link>
          <Nav.Link href="/pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default UserNavbar;
