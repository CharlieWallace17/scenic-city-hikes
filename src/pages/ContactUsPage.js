import { Container, Col, Row } from "reactstrap";
import ContactForm from "../components/ContactForm";

const ContactUsPage = () => {

    return (
        <Container>
        <Row className="contact-page d-flex justify-content-center my-3">
            <Col md="11" className="form">
            <div className="form-page">
            <h1 className="mb-5 text-center">We'd love to hear your feedback!</h1>
                <ContactForm />
            </div>
            </Col>
        </Row>
        </Container>
        
    );
};

export default ContactUsPage;
