import { PARKS } from "../shared/PARKS";
import FlipCard from "./FlipCard";
import { Container, Row, Col } from 'reactstrap';

const CardsList = () => {
    const parks = PARKS;

    return (
            <Container className="my-container">
                <Row>
                {parks.map((park) => {
                    return (
                        park && (
                            <Col md="4">
                                <FlipCard park={park} key={park.name} />
                            </Col>
                        )
                    );
                })}
                </Row>
            </Container>
    );
};

export default CardsList;
