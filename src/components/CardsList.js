import { Col, Row } from "reactstrap";
import { PARKS } from "../shared/PARKS";
import FlipCard from "./FlipCard";

const CardsList = () => {
    const parks = PARKS;

    return (
            <Row>
                {parks.map((park) => {
                    return (
                        park && (
                            <Col 
                            md='4'
                            key={park.id}>
                                <FlipCard park={park} />
                            </Col>
                        )
                    );
                })}
            </Row>
    );
};

export default CardsList;
