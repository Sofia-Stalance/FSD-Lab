import { Container, Button, Badge } from "react-bootstrap";

function Hero() {
  return (
    <Container className="text-center py-5">
      <Badge bg="primary" className="mb-3">
        AVAILABLE FOR HIRE
      </Badge>

      <h1 className="display-4 fw-bold">
        Creative Developer <br /> Building Scalable Apps
      </h1>

      <p className="lead text-muted mt-3">
        Specializing in modern JavaScript frameworks like React and Vite to
        create seamless user experiences and robust backend integrations.
      </p>

      <div className="mt-4">
        <Button variant="primary" className="me-3">
          View Projects
        </Button>

        <Button variant="outline-dark">
          Contact Me
        </Button>
      </div>
    </Container>
  );
}

export default Hero;