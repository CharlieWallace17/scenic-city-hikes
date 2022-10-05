import { Col, Row } from 'reactstrap';
import PictureCard from './PictureCard';
import { PARKS } from '../shared/PARKS';

const CardsList = () => {
    const parks = PARKS;

    return (
        <Row>
            {parks.map((park) => {
                return (
                    park && (
                        <Col key={park.id}>
                            <PictureCard park={park} />
                        </Col>
                    )
                )
            })}
        </Row>
    )
}

export default CardsList;