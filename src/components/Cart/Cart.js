import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Cart.css";

const Cart = ({ cart, MAX_CREDIT_HOUR }) => {
  
  const [totalPrice, totalCreditHour] = cart.reduce(
    ([totalPrice, totalCreditHour], course) => [
      totalPrice + course.price,
      totalCreditHour + course.credit_hour,
    ],
    [0, 0]
  );

  const remainingCreditHour = MAX_CREDIT_HOUR - totalCreditHour;

  return (
    <div>
      <div className="cart">
        <h3>Credit Hour Remaining {remainingCreditHour}hr</h3>
        <hr />
        <h2>Course Name</h2>
        <ol>
          {cart.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ol>
        <hr />
        <h4>Total credit hour: {totalCreditHour}</h4>
        <hr />
        <h4>Total price: {totalPrice}</h4>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Cart;
