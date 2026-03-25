import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container id="contact" className="py-5 d-flex justify-content-center">
      <div style={{ maxWidth: "500px", width: "100%" }}>
        <h3 className="text-center mb-4 fw-bold">Get In Touch</h3>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="primary" className="w-100">
            Send Message
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Contact;