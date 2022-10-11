import { useState } from "react";
import { useSpring, a } from "react-spring";
import { Card, CardBody, CardImg } from "reactstrap";

const FlipCard = ({ park }) => {
    const { image, name } = park;
    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    });
    return (
        <div className="flip-container" onClick={() => set((state) => !state)}>
            <a.div
                className="c back-card"
                style={{
                    opacity,
                    transform,
                    rotateY: "180deg",
                }}
            >
                <Card className="flip-card-back h-100">
                    <CardBody>
                        <h4 className="text-center">{name}</h4>
                    </CardBody>
                </Card>
            </a.div>
            <a.div
                className="c"
                style={{ opacity: opacity.to((o) => 1 - o), transform }}
            >
                <Card className="card h-100">
                    <CardImg top src={image} alt={name} className="h-75 mb-3" />
                    <CardBody>
                        <h4 className="text-center">{name}</h4>
                    </CardBody>
                </Card>
            </a.div>
        </div>
    );
};

export default FlipCard;