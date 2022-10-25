import { PayPalButtons } from "@paypal/react-paypal-js"
import { useEffect, useRef } from "react"

const DonateButton = ({ currency, amount }) => {
    const amountRef = useRef(amount);
    useEffect(() => {
        amountRef.current = amount;
    }, [amount]);

    return (
        <PayPalButtons
            style={{ color: "black", label: "donate" }}
            fundingSource="paypal"
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: amount,
                                breakdown: {
                                    item_total: {
                                        currency_code: currency,
                                        value: amount
                                    }
                                }
                            },
                            items: [
                                {
                                name: "Chattanooga Hiking Donation",
                                description: "All proceeds directly support preserving Chattanooga hiking trails.",
                                quantity: "1",
                                unit_amount: {
                                    currency_code: currency, 
                                    value: amount
                                },
                                category: "DONATION"
                                }
                            ] 
                        }
                    ]
                })
            }}
        />
    );
};

export default DonateButton;