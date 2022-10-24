import edwardsPointPic from "../assets/edwards-point-pic.jpg";

const AboutUsPage = () => {
    return (
    <div className="about-page">
        <div className="about-text">
            <h3>What Moves Us?</h3>
            <p>Recently moved to Chattanooga, Tennessee, Charlie Wallace jumped into the local hiking scene head-first.</p>
            <p>After becoming acquainted with countless spiraling trails, inspiring vistas, and cute critters, he wanted to create a community where people could share their Chatt hiking experiences, as well as support local organizations that keep these places looking beautiful.</p>
            <p>Thus, Scenic City Hikes was born.</p>
        </div>
        <img src={edwardsPointPic} alt="Edward's Point" className="about-pic" />
    </div>
            )
};

export default AboutUsPage;
