
import React, { useState } from "react";
import "./CreditCardPayment.css";

function CreditCardPayment() {
    const [formData, setFormData] = useState({
        cardHolderName: "",
        cardNumber: "",
        expMonth: "",
        expYear: "",
        cvc: "",
        amount: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let formErrors = {};
        if (!formData.cardHolderName) formErrors.cardHolderName = "Card Holder's Name is required";
        if (!formData.cardNumber) formErrors.cardNumber = "Card Number is required";
        if (!formData.expMonth || !formData.expYear) formErrors.expDate = "Expiration Date is required";
        if (!formData.cvc) formErrors.cvc = "CVC code is required";
        if (!formData.amount) formErrors.amount = "Amount is required";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Handle form submission
            console.log("Form submitted:", formData);
        }
    };

    return (
        <div className="content">
            <div className="payment-form">
                <h2>Credit Card Payment</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="cardHolderName"
                            placeholder="Card Holder's Name"
                            value={formData.cardHolderName}
                            onChange={handleChange}
                        />
                        {errors.cardHolderName && <p>{errors.cardHolderName}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="cardNumber"
                            placeholder="Card Number"
                            value={formData.cardNumber}
                            onChange={handleChange}
                        />
                        {errors.cardNumber && <p>{errors.cardNumber}</p>}
                    </div>
                    <div className="form-group">
                        <div className="exp-date">
                            <select name="expMonth" value={formData.expMonth} onChange={handleChange}>
                                <option value="">MM</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                {/* Add more months here */}
                            </select>
                            <select name="expYear" value={formData.expYear} onChange={handleChange}>
                                <option value="">YYYY</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                {/* Add more years here */}
                            </select>
                        </div>
                        {errors.expDate && <p>{errors.expDate}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="cvc"
                            placeholder="CVC"
                            value={formData.cvc}
                            onChange={handleChange}
                        />
                        {errors.cvc && <p>{errors.cvc}</p>}
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="amount"
                            placeholder="Amount"
                            value={formData.amount}
                            onChange={handleChange}
                        />
                        {errors.amount && <p>{errors.amount}</p>}
                    </div>
                    <div className="form-group buttons">
                        <button type="button" onClick={() => console.log("Canceled")}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreditCardPayment;
