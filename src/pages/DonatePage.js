import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import DonateForm from "../components/DonateForm";

const DonatePage = () => {
    return (
        <PayPalScriptProvider
            options={{
                "client-id": "test",
                components: "buttons",
                currency: "USD"
            }}
        >
            <h1>Donate Today!</h1>
            <DonateForm />
        </PayPalScriptProvider>
    )
}

export default DonatePage;