import React, { useState } from "react";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    buildingNumber: "",
    houseNumber: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // API call to the Java backend to sign up a new user
    fetch("http://localhost:8080/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.href = "/viewreportuser";
        // handle success or error response from the backend
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
              <label htmlFor="lastName">Last name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
      <div>
                    <label htmlFor="buildingNumber">Building number: &nbsp;</label>
                    <input
                      type="text"
                      id="buildingNumber"
                      name="buildingNumber"
                      value={formData.buildingNumber}
                      onChange={handleInputChange}
                    />
                  </div>
           <div>
                               <label htmlFor="houseNumber">House number: &nbsp;&nbsp;&nbsp;</label>
                               <input
                                 type="text"
                                 id="houseNumber"
                                 name="houseNumber"
                                 value={formData.houseNumber}
                                 onChange={handleInputChange}
                               />
                             </div>
           <div>

        <label htmlFor="emailAddress">Email Address: &nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleInputChange}
        />
      </div>
       <div>
                                     <label htmlFor="phoneNumber">Phone number:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                                     <input
                                       type="text"
                                       id="phoneNumber"
                                       name="phoneNumber"
                                       value={formData.phoneNumber}
                                       onChange={handleInputChange}
                                     />
                                   </div>
      <div>
        <label htmlFor="password">Password:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Sign Up</button>
      <div>
      Sign up Form
      </div>
    </form>
  );
};

export default SignUpForm;