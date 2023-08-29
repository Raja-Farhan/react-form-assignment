import React, { useState } from "react";
import './Form.css'
import Facebook from '../../assets/images/Facebook-Logo.png'

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    for (const field in formData) {
      if (formData[field] === "") {
        newErrors[field] = "This field is required";
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
      setSuccessMessage("Looks Good.");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-container border border-dark-subtle rounded-3 px-3 py-2 mt-2">
              <div className="d-flex justify-content-center">
                <img src={Facebook} className="w-25 h-25 d-inline-block" alt="" />
              </div>
              <div className="d-flex justify-content-center">
                <h2>Create a new account</h2>
              </div>
              <div className="d-flex justify-content-center mt-2">
                <h6>It's quick and easy.</h6>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email ID:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label">
                    Date of Birth:
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className={`form-control ${errors.dob ? "is-invalid" : ""}`}
                  />
                  {errors.dob && (
                    <div className="invalid-feedback">{errors.dob}</div>
                  )}
                </div>
                <div className="mb-3 d-flex">
                  <label className="form-label">Gender:</label>
                  <div className="form-check ms-3">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      checked={formData.gender === "male"}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="male" className="form-check-label">
                      Male
                    </label>
                  </div>
                  <div className="form-check ms-3">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      checked={formData.gender === "female"}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="female" className="form-check-label">
                      Female
                    </label>
                  </div>
                  <div className="form-check ms-3">
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      checked={formData.gender === "other"}
                      onChange={handleChange}
                      className="form-check-input"
                    />
                    <label htmlFor="other" className="form-check-label">
                      Other
                    </label>
                  </div>
                  {errors.gender && (
                    <div className="invalid-feedback">{errors.gender}</div>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-signup px-5 py-3">
                    Sign Up
                  </button>
                </div>
              </form>
              {successMessage && (
                <p className="success text-success">{successMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
