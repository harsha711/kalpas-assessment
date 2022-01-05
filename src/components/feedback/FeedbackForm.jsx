import React, { useState } from "react";
import "./FeedbackForm.css";

export default function FeedbackForm() {
  const initialFieldValues = {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    country: "",
    countrycode: "",
    mobile: "",
  };

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case "firstname":
        if (value.length <= 1) {
          setErrors({
            ...errors,
            firstname: "First Name must atleast have 2 letters",
          });
        } else {
          setErrors({
            ...errors,
            firstname: "",
          });
        }
        break;

      case "lastname":
        if (value.length <= 1) {
          setErrors({
            ...errors,
            lastname: "Last Name must atleast have 2 letters",
          });
        } else {
          setErrors({
            ...errors,
            lastname: "",
          });
        }
        break;

      case "email":
        if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          setErrors({
            ...errors,
            email: "",
          });
        }
        break;

      case "address":
        if (value.length <= 5) {
          setErrors({
            ...errors,
            address: "Username atleast have 6 letters",
          });
        } else {
          setErrors({
            ...errors,
            address: "",
          });
        }
        break;

      case "mobile":
        if (!new RegExp("^[789]d{9}$").test(value)) {
          setErrors({
            ...errors,
            mobile: "Enter a valid phone number",
          });
        } else {
          setErrors({
            ...errors,
            email: "",
          });
        }
        break;
      default:
        break;
    }
  };

  const hanldeInputChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    validate(name, value);
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();

    if (Object.errors.length !== 0) {
      alert("There is an Error!");
    }
  };

  return (
    <div className="feedbackForm">
      <h3>Thanks for taking the time!</h3>
      <p>Please provide the below details.</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="FirstName"
            name="firstname"
            placeholder="John"
            onChange={hanldeInputChange}
            value={values.firstname}
          />
          {errors.firstname && <p className="error-msg">{errors.firstname}</p>}
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="LastName"
            name="lastname"
            placeholder="Doe"
            onChange={hanldeInputChange}
            value={values.lastname}
          />
          {errors.lastname && <p className="error-msg">{errors.lastname}</p>}
        </div>
        <br />
        <div className="form-group row-lg-6">
          <label htmlFor="inputAddress">Address</label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            name="address"
            placeholder="1234 Main St"
            onChange={hanldeInputChange}
            value={values.address}
          />
          {errors.address && <p className="error-msg">{errors.address}</p>}
        </div>
        <br />

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="userEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="userEmail"
              placeholder="Email"
              onChange={hanldeInputChange}
              value={values.email}
              name="email"
            />
            {errors.email && <p className="error-msg">{errors.email}</p>}
          </div>
        </div>
        <br />

        <div className="form-row">
          <div className="form-group ">
            <label htmlFor="inputState">Country</label>
            <select
              id="inputState"
              className="form-control"
              onChange={hanldeInputChange}
              name="country"
            >
              <option>India</option>
              <option>U.S.A.</option>
              <option>Russia</option>
            </select>
          </div>
        </div>
        <br />

        <div className="container">
          <label htmlFor="mobile">Mobile</label>
          <div className="row">
            <div className="col-2">
              <input
                type="text"
                className="form-control"
                onChange={hanldeInputChange}
                name="country"
                value={values.countrycode}
                placeholder="Code"
              />
            </div>
            -
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                placeholder="Number"
                onChange={hanldeInputChange}
                value={values.mobile}
                name="mobile"
                id="mobile"
              />
            </div>
            {errors.mobile && <p className="error-msg">{errors.mobile}</p>}
          </div>
        </div>

        <br />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
