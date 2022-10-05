import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { PARKS } from '../shared/PARKS';

const PictureCard = ({ park }) => {
    const { image, name } = park;

    return (
        <Card>
            <CardImg src={image} alt={name} />
            <CardBody>
                <CardTitle>{name}</CardTitle>
            </CardBody>
        </Card>
    )
}

export default PictureCard;