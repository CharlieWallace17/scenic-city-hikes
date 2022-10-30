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
                            <Col md="4" key={park.id}>
                                <FlipCard park={park}/>
                            </Col>
                        )
                    );
                })}
                </Row>
            </Container>
    );
};

export default CardsList;
