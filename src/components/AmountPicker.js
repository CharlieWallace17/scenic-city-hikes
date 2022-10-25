const AmountPicker = ({ onAmountChange }) => {
    return (
        <fieldset onChange={onAmountChange}>
            <legend>Donation Amount</legend>
            <label>
                <input type="radio" value="5.00" defaultChecked="true" name="amount" />
                $5.00
            </label>
            <label>
                <input type="radio" value="25.00" name="amount" />
                $25.00
            </label>
            <label>
                <input type="radio" value="100.00" name="amount" />
                $100.00
            </label>
        </fieldset>
    );
}

export default AmountPicker;