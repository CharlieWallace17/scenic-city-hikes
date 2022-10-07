import { Container, Col, Row } from "reactstrap";
import PictureCard from "./PictureCard";
import { PARKS } from "../shared/PARKS";

const CardsList = () => {
    const parks = PARKS;

    return (
        <Container className="d-flex">
            <Row>
                {parks.map((park) => {
                    return (
                        park && (
                            <Col sm='4' key={park.id}>
                                <PictureCard park={park} />
                            </Col>
                        )
                    );
                })}
            </Row>
        </Container>
    );
};

export default CardsList;
