import { toast } from "react-toastify";
import React, { useEffect, useState } from "react";

import Cart from "../Cart/Cart";
import Course from "../Course/Course";

import "./Container.css";

const MAX_CREDIT_HOUR = 20;

const Container = () => {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleCart = (course) => {
    const courseExistInCart = cart.find((item) => item.id === course.id);

    if (!courseExistInCart) {
      const totalCreditHour = cart.reduce(
        (total, course) => total + course.credit_hour,
        0
      );

      if (!(totalCreditHour + course.credit_hour > MAX_CREDIT_HOUR)) {
        const newCart = [...cart, course];

        setCart(newCart);
      } else {
        toast("Limit Exceeded!");
      }
    }
  };

  return (
    <div>
      <h2>Course Registration</h2>
      <h3>Total Courses:{courses.length}</h3>

      <div className="container">
        <div className="course-container">
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              handleCart={handleCart}
            ></Course>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart} MAX_CREDIT_HOUR={MAX_CREDIT_HOUR}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Container;
