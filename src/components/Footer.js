import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className="align-items-center">
                    <Col sm="12" className="text-center mt-3">
                        <h5>Connect With Us!</h5>
                    </Col>
                    <Col sm="12" className="text-center mb-3">
                        <a href="http://instagram.com/">
                            <i className="bi bi-instagram"></i>
                        </a>{' '}
                        <a href="http://facebook.com/">
                            <i className="bi bi-facebook fa-2x"></i>
                        </a>{' '}
                        <a href="http://twitter.com/">
                            <i className="bi bi-twitter fa-2x"></i>
                        </a>{' '}
                        <a href="http://youtube.com/">
                            <i className="bi bi-youtube bi-2x"></i>
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
