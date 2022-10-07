import { Card, CardBody, CardImg } from "reactstrap";
import { PARKS } from "../shared/PARKS";

const PictureCard = ({ park }) => {
    const { image, name } = park;

    return (
        <div className="flip-card mb-3">
            <div className="flip-card-inner">
                <Card>
                    <CardImg top src={image} alt={name} className="h-75 mb-3" />
                    <CardBody className="d-flex align-items-center justify-content-center">
                        <h4 className="text-center">{name}</h4>
                    </CardBody>
                </Card>
                <div className="flip-card-back">
                    <p>This is a note about the trail.</p>
                </div>
            </div>
        </div>
    );
};

export default PictureCard;
