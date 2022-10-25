import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonateForm from "../components/DonateForm";
import { Container, Row, Col } from "reactstrap";

const DonatePage = () => {
    return (
        <PayPalScriptProvider
            options={{
                "client-id": "test",
                components: "buttons",
                currency: "USD"
            }}
        >
        <Container className="donate-page"> 
            <Row className="donate-content">
                <Col sm="12">  
                    <h1>Donate Today!</h1>
                </Col>
                <Col sm="12">  
                    <p>100% of proceeds go to the Chattanooga wildlife foundation. We need your help to preserve what makes us the Scenic City!</p>
                </Col>
                <Col>  
                    <DonateForm />
                </Col>
            </Row>
        </Container>
        </PayPalScriptProvider>
    )
}

export default DonatePage;