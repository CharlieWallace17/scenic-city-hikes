import { Container, Row, Col } from "reactstrap";
import edwardsPointPic from "../assets/edwards-point-pic.jpg";

const AboutUsPage = () => {
    return (
        <Container fluid>
            <Row className="about-page">
                <Col sm="8" className="about-text mb-3 mb-md-0">
                    <h3>What Moves Us?</h3>
                    <p>
                        Recently moved to Chattanooga, Tennessee, Charlie
                        Wallace jumped into the local hiking scene head-first.
                    </p>
                    <p>
                        After becoming acquainted with countless spiraling
                        trails, inspiring vistas, and cute critters, he wanted
                        to create a community where people could share their
                        Chatt hiking experiences, as well as support local
                        organizations that keep these places looking beautiful.
                    </p>
                    <p>Thus, Scenic City Hikes was born.</p>
                </Col>
                <Col sm="3" className="about-pic">
                    <img
                        src={edwardsPointPic}
                        alt="Edward's Point"
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUsPage;
