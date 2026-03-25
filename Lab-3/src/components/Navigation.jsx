import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" className="py-3">
      <Container>
        <Navbar.Brand className="fw-bold text-primary">
          DEV<span className="text-light">PORTFOLIO</span>
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;