import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Admin/CheckoutForm";
import { useSelector } from "react-redux";  
import { selectTotalAmount } from "../redux/cartSlice";
const stripePromise = loadStripe
("pk_test_51PglnE2KKjnI0TXHcv7ZXodjY4OdZc1WwuqHc4hiD2b4RfCuvvognK95J0fnpxly3rU4IVYWdkk3DS5DB0aQmby300kKFsnuo4");


const CheckoutPayment = () => {
    const [clientSecret, setClientSecret] = useState("");
    const totalAmount=useSelector(selectTotalAmount)

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:1000/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ totalAmount }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = { theme: 'stripe', };
    const options = { clientSecret,appearance};
  
    return (
      <div className="App">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    );
  }
  

export default CheckoutPayment
