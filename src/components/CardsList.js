import { PARKS } from "../shared/PARKS";
import FlipCard from "./FlipCard";

const CardsList = () => {
    const parks = PARKS;

    return (
            <div className="my-container">
                {parks.map((park) => {
                    return (
                        park && (
                                <FlipCard park={park} key={park.id} />
                        )
                    );
                })}
            </div>
    );
};

export default CardsList;
