import { Container, Row, Col } from "reactstrap";

const Footer = () => {
    return (
            <Container fluid className="footer mt-auto">
                <Row className="align-items-center">
                    <Col sm="12" className="text-center mt-3">
                        <h5>Connect With Us!</h5>
                    </Col>
                    <Col sm="12" className="text-center mb-4">
                        <a href="http://instagram.com/">
                            <i className="bi bi-instagram"></i>
                        </a>{' '}
                        <a href="http://facebook.com/">
                            <i className="bi bi-facebook"></i>
                        </a>{' '}
                        <a href="http://twitter.com/">
                            <i className="bi bi-twitter"></i>
                        </a>{' '}
                        <a href="http://youtube.com/">
                            <i className="bi bi-youtube"></i>
                        </a>
                    </Col>
                </Row>
                <p className="copyright">© Charlie Wallace 2022</p>
            </Container>
    );
};

export default Footer;
