import { useState } from "react";
import DonateButton from "./DonateButton";
import AmountPicker from "./AmountPicker";

const DonateForm = () => {
    const [amount, setAmount] = useState("5.00");
    return (
        <form className="donate-form">
            <AmountPicker
                onAmountChange={(e) => {
                    setAmount(e.target.value);
                }}
            />
            <DonateButton 
                currency="USD"
                amount={amount} />
        </form>
    )
}

export default DonateForm;