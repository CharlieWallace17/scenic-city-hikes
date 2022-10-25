import { PayPalButtons } from "@paypal/react-paypal-js"
import { useEffect, useRef } from "react"

const DonateButton = ({ currency, amount }) => {
    const amountRef = useRef(amount);
    useEffect(() => {
        amountRef.current = amount;
    }, [amount]);

    return (
        <>
        <PayPalButtons
            className="paypal-btn"
            style={{ label: "donate" }}
            fundingSource="paypal"
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: amountRef.current,
                                breakdown: {
                                    item_total: {
                                        currency_code: currency,
                                        value: amountRef.current
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
                                    value: amountRef.current
                                },
                                category: "DONATION"
                                }
                            ] 
                        }
                    ]
                })
            }}
        />
        <PayPalButtons
            className="venmo-btn"
            style={{ label: "donate" }}
            fundingSource="venmo"
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            amount: {
                                value: amountRef.current,
                                breakdown: {
                                    item_total: {
                                        currency_code: currency,
                                        value: amountRef.current
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
                                    value: amountRef.current
                                },
                                category: "DONATION"
                                }
                            ] 
                        }
                    ]
                })
            }}
        />
        </>
    );
};

export default DonateButton;