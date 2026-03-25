import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
  return (
    <Container id="projects" className="py-5">
      <h2 className="text-center mb-4 fw-bold">My Recent Work</h2>
      <p className="text-center text-muted mb-5">
        A showcase of technical skills and creative solutions.
      </p>

      <Row>
        <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?1"
            />
            <Card.Body>
              <Card.Title>E-Commerce Platform</Card.Title>
              <Card.Text>
                A full-featured store with payment gateway integration.
              </Card.Text>
              <Button variant="link">View Project Details →</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?2"
            />
            <Card.Body>
              <Card.Title>Task Management Tool</Card.Title>
              <Card.Text>
                A productivity app featuring drag-and-drop tasks.
              </Card.Text>
              <Button variant="link">View Project Details →</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card>
            <Card.Img
              variant="top"
              src="https://picsum.photos/400/200?3"
            />
            <Card.Body>
              <Card.Title>Weather Dashboard</Card.Title>
              <Card.Text>
                Visualizing real-time weather with dynamic charts.
              </Card.Text>
              <Button variant="link">View Project Details →</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;